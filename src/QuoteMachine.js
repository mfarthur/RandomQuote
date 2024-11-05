// src/QuoteMachine.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuoteMachine = () => {
    const [quote, setQuote] = useState({ text: '', author: '' });

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            setQuote({ text: response.data.content, author: response.data.author });
        } catch (error) {
            console.error('Erro ao buscar citação:', error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const handleNewQuote = () => {
        fetchQuote();
    };

    return (
        <div id="quote-box">
            <p id="text">"{quote.text}"</p>
            <p id="author">- {quote.author}</p>
            <button id="new-quote" onClick={handleNewQuote}>Nova Citação</button>
            <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Tweetar
            </a>
        </div>
    );
};

export default QuoteMachine;

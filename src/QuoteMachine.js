import React, { useEffect, useState } from 'react';
import quotes from './quotes.json'; // Importa o arquivo JSON
import './QuoteMachine.css'; // Importa o arquivo CSS

const QuoteMachine = () => {
    const [quote, setQuote] = useState({ text: '', author: '' });

    const fetchQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        setQuote(randomQuote);
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

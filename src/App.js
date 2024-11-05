import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
import { setQuote, setLoading } from './redux/quoteReducer';

const QUOTE_API_URL = 'http://api.quotable.io/random';

function App() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quote);
  const loading = useSelector((state) => state.quote.loading);

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(QUOTE_API_URL);
      dispatch(setQuote({ content: response.data.content, author: response.data.author }));
    } catch (error) {
      console.error("Erro ao buscar a citação", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="App">
      <h1 className="app-title">Daily Inspirational Quote</h1>
      <h2 className="app-subtitle">A little dose of inspiration to brighten your day</h2>
      <div id="quote-box" className="quote-box">
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <>
            <div className="quote-container">
              <span className="quote-icon">❝</span>
              <div id="text" className="quote-text">{quote.content}</div>
              <span className="quote-icon quote-icon-end">❞</span>
              <div id="author" className="quote-author">— {quote.author}</div>
            </div>
            <button id="new-quote" className="new-quote-button" onClick={getNewQuote}>Nova Citação</button>
            <a 
              id="tweet-quote" 
              className="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.content}" - ${quote.author}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweetar
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

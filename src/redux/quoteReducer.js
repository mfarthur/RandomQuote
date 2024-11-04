const initialState = {
    quote: { content: "", author: "" },
    loading: true,
  };
  
  const SET_QUOTE = 'SET_QUOTE';
  const SET_LOADING = 'SET_LOADING';

  export default function quoteReducer(state = initialState, action) {
    switch (action.type) {
      case SET_QUOTE:
        return { ...state, quote: action.payload, loading: false };
      case SET_LOADING:
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  }
  

  export const setQuote = (quote) => ({ type: SET_QUOTE, payload: quote });
  export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
  
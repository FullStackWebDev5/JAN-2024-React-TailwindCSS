import { 
  FETCH_NEWS_LOADING, 
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE
} from '../actions/news.js'

const initialState = {
  loading: false,
  news: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload
      }
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer
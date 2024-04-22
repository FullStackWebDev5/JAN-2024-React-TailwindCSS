import axios from 'axios'

export const FETCH_NEWS_LOADING = 'FETCH_NEWS_LOADING'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE' 

const API_URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f40203cc39184176a487521beaf0836b'

export const fetchNewsLoading = () => ({
  type: FETCH_NEWS_LOADING
})

export const fetchNewsSuccess = (users) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: users
})

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error
})

export const fetchNews = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchNewsLoading())
      const res = await axios.get(API_URL)
      dispatch(fetchNewsSuccess(res.data.articles))
    } catch (error) {
      dispatch(fetchNewsFailure(error))
    }  
  }
}
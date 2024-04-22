import React, { useEffect } from 'react'
import SingleNews from './SingleNews.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from '../actions/news.js'

function News() {
  const news = useSelector(store => store.newsReducer.news)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='flex justify-evenly items-center flex-wrap my-10 mx-auto'>
        {news.map(singleNews => (
          <SingleNews key={singleNews.id} singleNews={singleNews} />
        ))}
      </div>
    </div>
  )
}

export default News
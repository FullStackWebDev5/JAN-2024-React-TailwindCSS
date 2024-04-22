import React from 'react'

function SingleNews({ singleNews }) {
  const { title, description, urlToImage } = singleNews

  const dummyImageURL = 'https://previews.123rf.com/images/maxxigo/maxxigo1711/maxxigo171100024/90696732-breaking-news-header-banner.jpg'

  return (
    <div className='w-[450px] p-5 m-2 text-center rounded bg-[#444] hover:scale-105 hover: cursor-pointer'>
      <img className='w-full h-[250px]' src={urlToImage || dummyImageURL} alt='news-header' />
      <h1 className='text-base h-[80px]'>{title}</h1>
      <p className='text-xs h-[50px]'>{description}</p>
    </div>
  )
}

export default SingleNews
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './news.scss';

function News() {
  const [news, setNews] = useState([]);

  const fetchNewData = () => {
    axios.get(`${process.env.REACT_APP_NEWS_API}/search-news?api-key=${process.env.REACT_APP_NEWS_API_KEY}`).then(res => {
      // console.log(res.data)
      setNews(res.data.news)
    })
  }

  useEffect(() => {
    // fetchNewData()
  }, [])

  return (
    <section className='news-section'>
      <section className='inner-section'>
        <h2>Out latest news</h2>
        <section className="news-card-container">
          {/* {
            news.map(item =>
              <div className='news-card'>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
              </div>
            )
          } */}

          <div className='news-card'>
            <img src='https://sitquije.com/wp-content/uploads/2020/08/geno-oracle.jpg' alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias impedit</p>
          </div>
          <div className='news-card'>
            <img src='https://sitquije.com/wp-content/uploads/2020/08/geno-oracle.jpg' alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias impedit</p>
          </div>
          <div className='news-card'>
            <img src='https://assets.entrepreneur.com/content/3x2/2000/20190201202004-GettyImages-680315933.jpeg' alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias impedit</p>
          </div>
        </section>
      </section>
    </section>
  )
}

export default News

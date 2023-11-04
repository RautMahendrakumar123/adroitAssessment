import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import axios from 'axios';
import Card from './Card';

const Homepage = () => {
  const [data, setData] = useState([]);

  const fetchnews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6d311dbb2f444b9b803c2e3a516d35de');
      if (response.data.articles) {
        const articlesWithId = response.data.articles.map((article, index) => ({
          ...article,
          id:index + 1,
        }));
        setData(articlesWithId); 
      }
    } catch (error) {
      console.error(error);
    }
  }
console.log(data)
  useEffect(() => {
    fetchnews();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1>Get your articles here</h1>
        <div className='card-container'>
          {data.map((article) => (
            <Card key={article.id} data={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

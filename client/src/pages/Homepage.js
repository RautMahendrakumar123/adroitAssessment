import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import axios from 'axios';
import Card from './Card';


const Homepage = () => {
  const [data, setData] = useState([]);

  const fetchnews = async()=>{
      let response = await axios.request('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6d311dbb2f444b9b803c2e3a516d35de')
      console.log(response.data.articles)
      setData(response.data.articles)
  }
  useEffect(()=>{
    fetchnews()
  },[])
  return (
    <div>
      <Header />
      <div>
        <h1>Get your articles here</h1>
        <div className='card-container'>
          {data.map((article, index) => (
            <Card key={index} data={article}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;


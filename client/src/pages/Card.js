import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={data.urlToImage} className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
        {
          !localStorage.getItem('token')?
          <div>login to read more</div>
          :   
          <>
            <a href={data.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          read more
        </a> 
          </>    
        
        
        }
        
      </div>
    </div>
  );
};

export default Card;


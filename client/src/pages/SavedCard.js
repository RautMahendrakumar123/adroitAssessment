import React, { useContext } from 'react'
import { Mycontext } from '../contex/Context';

const SavedCard = ({data}) => {
    const { savedArticles, setSavedArticles } = useContext(Mycontext);

    const handleRemove = () => {
        const updatedArticles = savedArticles.filter((article) => article.id !== data.id);
        setSavedArticles(updatedArticles);
      }
  return (
    <div className="card" style={{ width: '18rem', marginBottom: '5rem' }}>
    <img src={data.urlToImage} className="card-img-top" alt={data.title} />
    <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">{data.description}</p>
      {!localStorage.getItem('token') ? (
        <div>Login to read the full article...</div>
      ) : (
        <>
          <a
            href={data.url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleRemove}
          >
            Remove
          </button>
        </>
      )}
    </div>
  </div>
  )
}

export default SavedCard

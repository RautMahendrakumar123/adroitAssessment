import React, { useContext } from 'react';
import { Mycontext } from '../contex/Context';
import Header from '../component/Header';
import SavedCard from './SavedCard';

const Saved = () => {
  const { savedArticles } = useContext(Mycontext);

  return (
    <>
    <Header />
    <h2>
      Saved Articles
    </h2>
     <div className='d-flex'>
      {savedArticles.map((article, index) => (
        <SavedCard key={index} data={article} />
      ))}
    </div>
    </>
   
  );
}

export default Saved;
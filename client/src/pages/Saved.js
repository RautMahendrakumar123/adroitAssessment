import React, { useContext } from 'react';
import { Mycontext } from '../contex/Context';
import Card from './Card';

const Saved = () => {
  const { savedArticles } = useContext(Mycontext);

  return (
    <div>
      {savedArticles.map((article, index) => (
        <Card key={index} data={article} />
      ))}
    </div>
  );
}

export default Saved;
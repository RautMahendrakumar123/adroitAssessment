import React, { createContext, useState, useContext } from 'react';

export const Mycontext = createContext();

const ContextProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  return (
    <Mycontext.Provider value={{ savedArticles, setSavedArticles }}>
      {children}
    </Mycontext.Provider>
  );
}

export default ContextProvider;
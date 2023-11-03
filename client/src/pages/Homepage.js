import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
// import axios from 'axios';

const Homepage = () => {
//   const [newsData, setNewsData] = useState([]);
//   const searchQuery = 'sports';

//   useEffect(() => {
   


//     async function fetchData() {
//         try {
//             const response = await axios.get(options);
//             console.log(response);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     fetchData();
//   }, [searchQuery]);

  return (
    <div>
      <Header />
      <div>
        <h1>Get your articles here</h1>
      </div>
    </div>
  );
};

export default Homepage;

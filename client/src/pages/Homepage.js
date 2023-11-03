import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
// import axios from 'axios';

const Homepage = () => {
//   const [newsData, setNewsData] = useState([]);
//   const searchQuery = 'sports';

//   useEffect(() => {
   
//     const options = {
//         method: 'GET',
//         url: 'https://news67.p.rapidapi.com/v2/country-news',
//         params: {
//           fromCountry: 'India',
//           onlyInternational: 'true'
//         },
//         headers: {
//           'X-RapidAPI-Key': 'd0ac69d9eemsh1f89df2fa236344p103290jsn287566a59054',
//           'X-RapidAPI-Host': 'news67.p.rapidapi.com'
//         }
//       };

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

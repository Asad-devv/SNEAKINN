import React, { useState, useEffect } from 'react';
import axios from 'axios';





export const fetchData = async () => {
    const [articles, setArticles] = useState([]);

    const result = await axios(
      'https://newsapi.org/v2/top-headlines?q=sneakers&apiKey={API_KEY}',
    );
    console.log(result.data.articles)
    setArticles(result.data.articles);
  };

  fetchData();
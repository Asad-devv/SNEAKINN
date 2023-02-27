import React, { useState, useEffect } from 'react';

const fetchData = async () => {
    const result = await axios(
      'https://newsapi.org/v2/top-headlines?q=sneakers&apiKey={API_KEY}',
    );
    setArticles(result.data.articles);
  };

  fetchData();
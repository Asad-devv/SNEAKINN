import React, { useState, useEffect } from 'react';
import axios from 'axios';





 const fetchArticles = async () => {

    try {
        const result = await axios(
          'https://newsapi.org/v2/top-headlines?q=sneakers&apiKey={API_KEY}',
        );
        return result.data.articles;
      } catch (error) {
        throw error;
      }
  };

  export default fetchArticles
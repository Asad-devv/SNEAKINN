import React, { useState, useEffect } from 'react';
import axios from 'axios';





 const fetchArticles = async () => {

    try {
        const result = await axios(
          'https://newsapi.org/v2/top-headlines?q=sneakers&apiKey=2e331b24728349198874c9edd7491ee1',
        );
        return result.data.articles;
      } catch (error) {
        throw error;
      }
  };

  export default fetchArticles;
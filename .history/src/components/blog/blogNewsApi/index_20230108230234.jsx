import React, { useState, useEffect } from 'react';
import axios from 'axios';





 const fetchArticles = async (page) => {

    try {
        const result = await axios(
          `https://newsapi.org/v2/everything?q=sneakers&apiKey=2e331b24728349198874c9edd7491ee1&pageSize=12&${page}`,
        );
        console.log(result.data)
        return result.data.articles;
      } catch (error) {
        console.log( error);
      }
  };

  export default fetchArticles;
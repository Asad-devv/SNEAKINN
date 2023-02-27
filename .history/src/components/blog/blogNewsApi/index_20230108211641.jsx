import React, { useState, useEffect } from 'react';
import axios from 'axios';





export const fetchData = async () => {

    try {
        const result = await axios(
          'https://newsapi.org/v2/top-headlines?q=sneakers&apiKey={API_KEY}',
        );
        return result.data.articles;
      } catch (error) {
        throw error;
      }
  };

  
import React, { useState, useEffect } from 'react';
import axios from 'axios';





export const fetchData = async () => {

    const result = await axios(
      'https://newsapi.org/v2/top-headlines?q=sneakers&apiKey={API_KEY}',
    );
    console.log(result.data.articles)
    return re
  };

  fetchData();
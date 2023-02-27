import axios from "axios";

// e7b480a7c7mshe3bc7cc1503aea4p17e7ebjsna492e3cd0b53
const API =  'e7b480a7c7mshe3bc7cc1503aea4p17e7ebjsna492e3cd0b53'
const options1 = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/trends',
  params: {query: 'sneakers', currency: 'EUR'},
  headers: {
    'X-RapidAPI-Key':API,
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};

export const getSneakers = async () => {
  try {
    const { data } = await axios.request(options1);
    return data;
  } catch (error) { 
    console.log(error);
  }
};

export const getProductsBySlug=async (query)=>{
const options2 = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/product',
  params: {query: query, currency: 'EUR', country: 'FR'},
  headers: {
    'X-RapidAPI-Key':API,
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};

try {
  const { data } = await axios.request(options2);
  return data;
} catch (error) { 
  console.log(error);
}
}


export const searchProducts= async (query,page)=>{
const options = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/search',
  params: {query: query, limit: '15', page: '1'},
  headers: {
    'X-RapidAPI-Key': API,
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};
try {
  const { data } = await axios.request(options);
  return data;
} catch (error) { 
  console.log(error);
};}
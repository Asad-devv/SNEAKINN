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
  params: {query: query, limit: '15', page: page},
  headers: {
    'X-RapidAPI-Key': API,
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};
try {
  const { data } = await axios.request(options);
  if (data.length > 15) {
    // Increment the page value if there are more results
    page += 1;
  }
  return data;
} catch (error) { 
  console.log(error);
};}


const images = [{
  
  img1:"https://i.pinimg.com/564x/81/a9/66/81a96635eb8f9fcf7b3036f0e12e18a2.jpg",

  img2 : "https://i.pinimg.com/564x/d1/0a/94/d10a94c706c76d5d5a1433a449ec96c0.jpg",
  img3 : "https://i.pinimg.com/564x/2d/8b/a5/2d8ba56af0950401fe3e332195eba9a1.jpg",
}];
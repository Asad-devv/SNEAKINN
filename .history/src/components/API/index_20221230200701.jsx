import axios from "axios";
const API =  ''
const options = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/trends',
  params: {query: 'sneakers', currency: 'EUR'},
  headers: {
    'X-RapidAPI-Key': 'import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/product',
  params: {query: 'nike-air-max-1-travis-scott-wheat', currency: 'EUR', country: 'FR'},
  headers: {
    'X-RapidAPI-Key': 'e7b480a7c7mshe3bc7cc1503aea4p17e7ebjsna492e3cd0b53',
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});',
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};

export const getSneakers = async () => {
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) { 
    console.log(error);
  }
};


import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/product',
  params: {query: 'nike-air-max-1-travis-scott-wheat', currency: 'EUR', country: 'FR'},
  headers: {
    'X-RapidAPI-Key': 'e7b480a7c7mshe3bc7cc1503aea4p17e7ebjsna492e3cd0b53',
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
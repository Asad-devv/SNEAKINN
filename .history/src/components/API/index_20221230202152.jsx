import axios from "axios";

// e7b480a7c7mshe3bc7cc1503aea4p17e7ebjsna492e3cd0b53
const API =  'e7b480a7c7mshe3bc7cc1503aea4p17e7ebjsnaasad492e3cd0b53'
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


const options2 = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/product',
  params: {query: 'nike-air-max-1-travis-scott-wheat', currency: 'EUR', country: 'FR'},
  headers: {
    'X-RapidAPI-Key':API,
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};

axios.request(options2).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


constgetSearch=()=>{
const options = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/search',
  params: {query: 'CT5053-001', limit: '10', page: '1'},
  headers: {
    'X-RapidAPI-Key': API,
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});}
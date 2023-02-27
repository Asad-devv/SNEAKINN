import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/trends',
  params: {query: 'sneakers', currency: 'EUR'},
  headers: {
    'X-RapidAPI-Key': 'e7b4804a7c7mshe3bc7cc1503aea4p17e7ebjsna492e3cd0b53',
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};

export const getData=()=>{
axios.request(options).then(function (response) {
  const data=response.data;
  console.log(data)
}).catch(function (error) {
	console.error(error);
});
}
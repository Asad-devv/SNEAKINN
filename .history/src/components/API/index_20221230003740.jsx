const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/trends',
  params: {query: 'sneakers', currency: 'EUR'},
  headers: {
    'X-RapidAPI-Key': 'e7bsa480a7c7mshe3bc7asacc1503aea4p17e7ebjsna492e3cd0b53',
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};
// e7b480a7c7mshe3bc7cc1503aea4p17e7ebjsna492e3cd0b53
const getSneakers =async()=>{


const {data:{data}} = axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
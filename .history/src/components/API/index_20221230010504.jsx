import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://stockx1.p.rapidapi.com/v2/stockx/trends',
  params: {query: 'sneakers', currency: 'EUR'},
  headers: {
    'X-RapidAPI-Key': 'e7b480a7c7mshe3bc7cc15as03aea4p17e7ebjsna492e3cd0b53',
    'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
  }
};
export const getSneakers =async()=>{
try{

const {data:{data}} = await axios.request(options)
return data 
} catch (error){ 
	console.log(error)}


console.log("asad")
function asad(){
    console.log()
}
// e7b480a7c7mshe3bc7cc1503aea4p17e7ebjsna492e3cd0b53
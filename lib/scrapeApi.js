import axios from "axios";
const url= 'http://localhost:9000/humble-scraper'
const url1= 'http://localhost:9000/scraper-1'
const url2= 'http://localhost:9000/scraper-2'

export const scrape = (data) => axios.post(url, data);
export const scrape1 = (data) => axios.post(url1, data);
export const scrape2 = (data) => axios.post(url2, data);

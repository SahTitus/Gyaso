import axios from "axios";
const url= 'http://localhost:9000/humble-scraper'

export const scrape = (data) => axios.post(url, data);

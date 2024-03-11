
import axios from 'axios';

const instance = axios.create({
  baseURL:" https://api.carmelmishel.com/api"
});

export default instance;


//"http://localhost:3009/api"
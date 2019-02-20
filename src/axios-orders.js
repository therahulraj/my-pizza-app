import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-pizza-app-ef4f1.firebaseio.com/'
});

export default instance;

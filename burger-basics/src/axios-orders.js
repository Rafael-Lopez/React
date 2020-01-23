import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-me-burger-6efb5.firebaseio.com/'
});

export default instance;
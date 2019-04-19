import axios from 'axios';
import {unsplash} from '../shared/constants';

export default axios.create({
    baseURL: unsplash.baseURL,
    headers: {
        Authorization: `Client-ID ${unsplash.chloeClient}`
    }
});
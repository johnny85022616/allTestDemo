import axios from "axios";

const userRequest = axios.create({
    baseURL: 'http://localhost:3001/rest'
  });

export const apiUserStore = (data) => userRequest.post('/storeUser', data);
import axios from "axios";


export const apiNhaKich = axios.create({
    baseURL:'https://localhost:7036/api/',
});  

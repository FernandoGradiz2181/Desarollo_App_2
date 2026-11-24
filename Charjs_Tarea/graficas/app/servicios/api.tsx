import axios from "axios";

const API_URL = "http://localhost:5000/";
export const fetchconsulta1 = async () => {
    const response = await axios.get(`${API_URL}product-category-avg-value`);
    return response.data;
}

export const fetchconsulta2 = async () => {
    const response = await axios.get(`${API_URL}product-max-value`);
    return response.data;
}

export const fetchconsulta3 = async () => {
    const response = await axios.get(`${API_URL}product-min-value`);
    return response.data;
}
import axios from "axios";

const UserApiVersion = "/api/signup";

const headerData =
{
    headers: {
        'Content-Type': 'application/json'
    }
}

//////-------------------------------///////////
///////-------Authentication -------------////
//////-------------------------------///////////

export const signup = async (data) => {
    const response = await axios.post(`/api/signup`,data, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

export const login = async (data) => {
    const response = await axios.post(`/api/login`,data, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

export const tokenVerify = async (data) => {
    const response = await axios.get(`/api/tokenVerification`,headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

//////-------------------------------///////////
/////============get All products ==========////
//////-------------------------------///////////

export const getAllProducts = async () => {
    const response = await axios.get(`/api/products`, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}


export const fetchSingleProductApi = async (pid) => {
    const response = await axios.get(`/api/product/${pid}`, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

// add shipping addres
export const shippingAdd = async (data) => {
    const response = await axios.post(`/api/shipping`,data, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}


// order details
export const orderDetailesApi = async () => {
    const response = await axios.post(`/api/createOrder`, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}


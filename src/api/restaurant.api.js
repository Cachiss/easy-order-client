import axios from 'axios';

const server_url = import.meta.env.VITE_API_URL;

export const getRestaurants = async () => {
    //127.0.0.1:3000/restaurants
  try {
    const response = await axios.get(`${server_url}/restaurants`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getRestaurant = async (name) => {
    //127.0.0.1:3000/restaurants/OTRO
    try {
        const response = await axios.get(`${server_url}/restaurants/${name}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const loginRestaurant = async (email, password) => {
    //127.0.0.1:3000/restaurants/login
    try {
        const response = await axios.post(`${server_url}/restaurants/login`, { email, password });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const createRestaurant = async (data) => {
    //127.0.0.1:3000/restaurants
    const {name, email, password, dishes} = data;
    try {
        const response = await axios.post(`${server_url}/restaurants`, { name, email, password, dishes });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const addOrder = async (data, restaurant)=>{
    //127.0.0.1:3000/restaurants/XDD/order
    const {dishes, user} = data;
    try {
        const response = await axios.post(`${server_url}/restaurants/${restaurant}/order`, { dishes, user });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteRestaurant = async (name) => {
    //127.0.0.1:3000/restaurants/XDD
    try {
        const response = await axios.delete(`${server_url}/restaurants/${name}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateRestaurant = async (name, dishes) => {
    try {
        //127.0.0.1:3000/restaurants/XDD/order/64d6a44163b7fda01dab765e
        const response = await axios.put(`${server_url}/restaurants/${name}`, dishes);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateOrderStatus = async (restaurant, order, status) => {
    //127.0.0.1:3000/restaurants/XDD/order/64d6a9ea2b99300d428bcab4/status
    try {
        const response = await axios.put(`${server_url}/restaurants/${restaurant}/order/${order}/status`, {status});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


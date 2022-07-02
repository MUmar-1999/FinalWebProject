import axios from "axios";

const API_URL = 'http://localhost:3002/users'

export const addUser = async (data) =>
{
    try {
        return await axios.post(API_URL, data);
    }
    catch (error)
    {
        console.log("Error while calling add review", error.message)
    }
}

export const getUser = async () => {
    try { 
        return await axios.get(API_URL)
    }
    catch (error)
    {
        console.log("Error while calling get review", error.message)
    }
}

export const getUse = async () => {
    try {
        return await axios.get('${API_URL}/${data}')
    }
    catch (error) {
        console.log("Error while calling get review", error.message)
    }

  
}

export const editUse = async (data) => {
    try {
        return await axios.put('${API_URL}/${id}', data);
    }
    catch (error) {
        console.log("Error while calling edit review", error.message)
    }

  
}

export const deleteUser = async (id) => {

    try {
        return await axios.delete('${API_URL}/${id}')
    } 
    catch (error) {
        console.log("Error while calling delete review", error.message)
    }
}
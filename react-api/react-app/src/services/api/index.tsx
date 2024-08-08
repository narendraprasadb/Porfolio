import axios from 'axios'
const BASE_URL='https://jsonplaceholder.typicode.com/users'
export const fetchData=async()=>{
    try{
        const response=await axios.get(BASE_URL);
        return response.data;
    }catch(error){
        console.error("Error",error);
    }
};
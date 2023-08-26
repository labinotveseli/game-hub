// import axios from "axios";
import gamesList from "./apiData";

// const useRealAPI = true;

// const apiUrl = import.meta.env.VITE_API_URL;
// const apiKey = import.meta.env.VITE_API_KEY;

const apiClient = () => {
   // if (useRealAPI) {
   //   return axios.create({
   //     baseURL: apiUrl,
   //     params: {
   //       key: apiKey
   //     }
   //   });
   // } else {
     return {
       get: () => Promise.resolve({ data: gamesList })
     };
 };
 
 export default apiClient(); 
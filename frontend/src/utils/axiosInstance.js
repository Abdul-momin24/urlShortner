//  axios ka instance create karega



import axios from "axios";

// baar baar axios instance create ho rha tha usse prevent krne ke liye humne ye ek instance bana diya jisse  humein baar baar instance create na krna pde or hum use krle common code he 


const axiosIsntance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",

    timeout: 10000,
    withCredentials: true, // To include cookies in requests

})


axiosIsntance.interceptors.response.use(
    response => response, // Pass through successful responses
  
    error => {
      const { response } = error;
  
      if (response) {
        const { status, data } = response;
  
        const messages = {
          400: "Bad Request",
          401: "Unauthorized",
          403: "Forbidden",
          404: "Not Found",
          500: "Internal Server Error"
          // Add more status codes as needed
        };
  
        const message = messages[status] || "An error occurred";
        console.error(`${message}:`, data);
      }
  
      return Promise.reject(error);
    }
  );
  

export default axiosIsntance;
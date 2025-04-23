import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
    // baseURL: 'https://apigarments.artisandesign.xyz'//
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { signOutUser } = useAuth();

//   useEffect(() => {
//     // ✅ Request Interceptor
//     const requestInterceptor = axiosSecure.interceptors.request.use(
//       (config) => {
//         const token = localStorage.getItem("access-token");
//         if (token) {
//           config.headers.authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     // ✅ Response Interceptor
//     const responseInterceptor = axiosSecure.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         const status = error?.response?.status;
//         if (status === 401 || status === 403) {
//           console.warn("Unauthorized! Logging out...");
//           setTimeout(() => {
//             signOutUser();
//             navigate("/login");
//           }, 100); 
//         }
//         return Promise.reject(error);
//       }
//     );

//     // ✅ Cleanup: Component Unmount হলে Interceptor Remove করা
//     return () => {
//       axiosSecure.interceptors.request.eject(requestInterceptor);
//       axiosSecure.interceptors.response.eject(responseInterceptor);
//     };
//   }, [navigate, signOutUser]);

  return axiosSecure;
};

export default useAxiosSecure;
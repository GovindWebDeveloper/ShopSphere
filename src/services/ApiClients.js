import axios from "axios";
import { message } from "antd";
import { loaderSubject } from "./LoaderService";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Track request count
let requestCount = 0;

const showLoader = () => {
  if (requestCount === 0) {
    loaderSubject.next(true);
  }
  requestCount++;
};

const hideLoader = () => {
  requestCount--;
  if (requestCount === 0) {
    loaderSubject.next(false);
  }
};

// Add a request interceptor
apiClient.interceptors.request.use(
  (response) => {
    showLoader();
    return response;
  },
  (error) => {
    hideLoader();
    message.error("Failed to send request!");
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => {
    hideLoader();
    return response;
  },
  (error) => {
    hideLoader();
    message.error(
      error.response?.data?.message || "Failed to fetch all Products!"
    );
    return Promise.reject(error);
  }
);

export default apiClient;

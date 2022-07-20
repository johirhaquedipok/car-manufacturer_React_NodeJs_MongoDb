import axios from "axios";
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json",
  },
});

const client = axios.create("https://jsonplaceholder.typicode.com");
export const request = ({ ...options }) => {
  client.head.Authorization = ` Bearer token`;
  const onSuccess = (response) => response;
  const onError = (err) => {
    // optionally catch errors
    return err;
  };

  return client(options).then(onSuccess).catch(onError);
};

/* 
call the data

const postCalingApi = (data) => {
    return request({url: '/superherl', method: 'post', data:hero })
}

*/

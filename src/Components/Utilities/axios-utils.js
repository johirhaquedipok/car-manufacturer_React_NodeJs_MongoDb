import axios from "axios";

export const client = axios.create({ baseURL: "http://localhost:5000" });

export const authClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});

/* export const request = async ({ ...options }) => {
  client.head.Authorization = ` Bearer token`;
  const onSuccess = (response) => response;
  const onError = (err) => {
    // optionally catch errors
    return err;
  };

  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};
 */
/* 
call the data

const postCalingApi = (data) => {
    return request({url: '/superherl', method: 'post', data:hero })
}

*/

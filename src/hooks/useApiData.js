import axios from "axios";
import { useQuery } from "react-query";

async function fetchPosts() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}
const useApiData = (onSuccess, onError) => {
  useQuery(
    "users",
    fetchPosts,
    // use functions to show success and erro
    {
      onSuccess,
      onError,
    }
  );
};

export default useApiData;

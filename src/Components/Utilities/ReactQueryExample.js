import React from "react";
import { useQuery } from "react-query";
import apiClient from "../../Utilities/axios-utils";
import Loading from "../../Utilities/Loading";
const ReactQueryExample = () => {
  // success
  const onSuccess = (data) => {
    console.log("success ", data);
  };
  // error
  const onError = (data) => {
    console.log("error ", data);
  };
  //
  async function fetchPosts() {
    const { data } = await apiClient.get("/users");
    return data;
  }
  const { isLoading, data, isFetching, refetch } = useQuery(
    "users",
    fetchPosts,
    // use functions to show success and erro
    {
      onSuccess,
      onError,
      // this mehtod change the data from api
      select: (data) => {
        const convertToArray = data.map((d) => d.name);
        return convertToArray;
      },
    }
  );

  if (isFetching || isLoading) {
    return <Loading />;
  }

  //   update browswr data instatat
  //   React query tutoaril 21
  /* const addData = (dataDetails) => {
    return axios.post('locahost5000', dataDetails)
}
const useaddDataToTheBrowserInstant = () => {
    return useMutation(addData, {
        onSuccess: (data) => {
            
            queryClient.setQueryData('querykey', (oldQueryData) => {
                return (
                    ...oldQurData,
                    data:[...oldQurData, data.data]
                )
            })
        }
    })
} 
    // call this fn in 
    const {mutate} = useaddDataToTheBrowserInstant()

    const handleData = (data) => {
        data coming from use forom

        mutate(data)
    }

*/

  return <div></div>;
};

export default ReactQueryExample;

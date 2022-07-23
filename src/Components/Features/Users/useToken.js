import { useEffect, useState } from "react";
import { client } from "../../Utilities/axios-utils";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    if (email) {
      // get user token
      const jotToken = async (email) => {
        const { data } = await client.post(`/signin`, { email });
        localStorage.setItem("accessToken", data.accessToken);
        return setToken(data.accessToken);
      };
      jotToken(email);
    }
  }, [user]);

  return [token];
};

export default useToken;

import { useEffect, useState } from "react";
import { client } from "../Components/Utilities/axios-utils";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      client.get(`/admin/${email}`).then((data) => {
        setAdmin(data?.data?.admin);
        setAdminLoading(false);
      });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;

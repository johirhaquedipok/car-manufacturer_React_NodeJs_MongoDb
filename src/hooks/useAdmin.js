import { useEffect, useState } from "react";
import { authClient } from "../Components/Utilities/axios-utils";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      const { data: userData } = authClient.get(`/admin/${email}`);
      setAdmin(userData?.data.admin);
      setAdminLoading(false);
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;

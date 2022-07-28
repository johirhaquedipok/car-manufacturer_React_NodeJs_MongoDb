import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import AllUsersTableBody from "./All-users-table-body";
const AllUsers = () => {
  // users
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["users"], async () => {
    return await authClient.get(`/all-users`);
  });

  //   make admin
  const { mutate } = useMutation(
    async (email) => {
      return await authClient.put(`/users-role/${email}`);
    },
    {
      onSuccess: (data) => {
        if (data?.data?.matchedCount === 1) toast.success("user role updated");
        refetch();
      },
      onError: (error) => {
        toast.error(error);
      },
    }
  );

  const makeAdmin = (email) => {
    mutate(email);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      All Users
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user, idx) => (
              <AllUsersTableBody
                key={user._id}
                user={user}
                idx={idx}
                makeAdmin={makeAdmin}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

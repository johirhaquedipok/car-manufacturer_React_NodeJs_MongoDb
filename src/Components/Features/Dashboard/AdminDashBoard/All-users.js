import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import ConfirmModalDelete from "../../Ui/ConfirmModalDelete";
import AllUsersTable from "./All-users-table";
const AllUsers = () => {
  const [modal, setModal] = useState("");

  // users
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["users"], async () => {
    return await authClient.get(`/all-users`);
  });

  //   make admin
  const { mutate, isLoading: adminLoading } = useMutation(
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
  //   delete a user
  const { mutate: userDelete, isLoading: userDeleteLoading } = useMutation(
    async (id) => {
      return await authClient.delete(`/user-delete/${id}`);
    },
    {
      onSuccess: (data) => {
        if (data?.data?.acknowledge === true) toast.success("user deleted");
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
  const handleDeleteUser = (id) => {
    userDelete(modal);
  };

  if (isLoading || adminLoading || userDeleteLoading) {
    return <Loading />;
  }
  return (
    <div>
      All Users
      <AllUsersTable
        users={users?.data}
        setModal={setModal}
        makeAdmin={makeAdmin}
      />
      <ConfirmModalDelete
        modal={modal}
        handleDeleteProduct={handleDeleteUser}
      />
    </div>
  );
};

export default AllUsers;

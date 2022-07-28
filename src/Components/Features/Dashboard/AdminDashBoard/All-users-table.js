import React from "react";
import AllUsersTableBody from "./All-users-table-body";

const AllUsersTable = ({ users, makeAdmin, setModal }) => {
  return (
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
          {users?.map((user, idx) => (
            <AllUsersTableBody
              key={user._id}
              user={user}
              idx={idx}
              makeAdmin={makeAdmin}
              setModal={setModal}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsersTable;

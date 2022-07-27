import React from "react";

const AllUsersTableBody = ({ idx, user, makeAdmin }) => {
  return (
    <tr key={user?._id}>
      <th>{idx + 1}</th>
      <td>{user?.userEmail}</td>
      {user?.role !== "admin" ? (
        <td>Regular Users</td>
      ) : (
        <td>
          <div className="badge  btn-primary">Admin</div>
        </td>
      )}

      <td>
        {user?.role !== "admin" && (
          <button
            className="btn btn-xs btn-secondary"
            onClick={() => makeAdmin(user?.userEmail)}
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs btn-error">Remove User</button>
      </td>
    </tr>
  );
};

export default AllUsersTableBody;

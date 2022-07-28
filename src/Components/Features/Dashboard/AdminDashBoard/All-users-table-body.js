import React from "react";

const AllUsersTableBody = ({ idx, user, makeAdmin, setModal }) => {
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
        <label
          htmlFor="my-modal-6"
          className="btn btn-xs btn-error"
          onClick={() => setModal(user?._id)}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default AllUsersTableBody;

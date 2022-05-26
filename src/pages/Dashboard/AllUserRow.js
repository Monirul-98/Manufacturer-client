import React from "react";

const AllUserRow = ({ user, index }) => {
  const { email, role } = user;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      {/* <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-accent text-white btn-xs">
            Make Admin
          </button>
        )}
      </td> */}
      <td>
        <button class="btn btn-accent text-white btn-xs">Remove user</button>
      </td>
    </tr>
  );
};

export default AllUserRow;

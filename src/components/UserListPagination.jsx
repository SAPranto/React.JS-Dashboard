import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";

const UserListPagination = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${page}`
        );
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch users");
      }
    };
    fetchUsers();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="font-semibold">ID</div>
      <div className="font-semibold">USER</div>
      <div className="font-semibold">EMAIL</div>
      <div className="font-semibold">OPTIONS</div>
      <div />
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <div>{user.id}</div>
          <div className="flex items-center">
            <img
              src={user.avatar}
              alt=""
              width={40}
              className="rounded-xl mr-2"
            />
            <div>
              <div>
                {user.first_name} {user.last_name}
              </div>
            </div>
          </div>
          <div>{user.email}</div>
          <BsThreeDots className="cursor-pointer text-primary-text" />
          <div />
        </React.Fragment>
      ))}

      <div className="flex justify-between col-span-5 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:text-gray-500"
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:text-gray-500"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default UserListPagination;

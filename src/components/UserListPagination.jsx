import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

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
    <div className="">
    <div className="grid grid-cols-5 gap-5">
      <div className="font-semibold text-slate-500 text-xs ">#ID</div>
      <div className="font-semibold text-slate-500 text-xs">USER</div>
      <div className="font-semibold text-slate-500 text-xs">EMAIL</div>
      <div className="font-semibold text-slate-500 text-xs">OPTIONS</div>
      <div />
      <div className="absolute bg-slate-50 w-[35rem] h-10 -z-10 rounded-xl left-[250px] top-[132px]">

      </div>
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <div className="text-slate-500 mt-4">{user.id}</div>
          <div className="flex items-center">
            <img
              src={user.avatar}
              alt=""
              width={45}
              className="rounded-xl mr-2"
              />
            <div>
              <div className="text-slate-500 font-semibold text-xs mt-1">
                {user.first_name} {user.last_name}
              </div>
            </div>
          </div>
          <div className="text-slate-500 font-semibold text-xs mt-4">{user.email}</div>
          <BsThreeDots className="cursor-pointer text-primary-text mt-4" />
          <div />
        </React.Fragment>
      ))}

      <div className="flex col-span-5 mt-8 gap-2">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-2 h-8 border text-sm text-black rounded-md"
          >
          <MdOutlineKeyboardDoubleArrowLeft/>
        </button>
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-2 h-8 border text-sm text-black rounded-md"
          >
          <MdOutlineKeyboardArrowLeft/>
        </button>
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-3 h-8 border text-sm text-black rounded-md disabled:bg-blue-500 disabled:text-white"
          >
          1
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-3 h-8 border text-sm text-black rounded-md disabled:bg-blue-500 disabled:text-white"
          >
          2
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-2 h-8 border text-sm text-black rounded-md"
          >
          <MdOutlineKeyboardArrowRight/>
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-2 h-8 border text-sm text-black rounded-md"
          >
          <MdOutlineKeyboardDoubleArrowRight/>
        </button>

      </div>
    </div>
          </div>
  );
};

export default UserListPagination;

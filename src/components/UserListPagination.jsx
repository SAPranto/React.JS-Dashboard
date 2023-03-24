import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserListPagination = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch users');
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
    <div>
      {users.map((user) => (
        <div key={user.id} className='flex gap-10 my-4'>
          <p>{user.id}</p>
          <img src={user.avatar} alt="" width={40} className='rounded-xl'/>
          <p>{user.first_name} {user.last_name}</p>
          <p>{user.email}</p>
        </div>
      ))}
      <div className='flex just'>
      <button onClick={handlePreviousPage} disabled={page === 1}>Previous Page</button>
      <button onClick={handleNextPage} disabled={page === totalPages}>Next Page</button>
      </div>
    </div>
  );
};

export default UserListPagination;

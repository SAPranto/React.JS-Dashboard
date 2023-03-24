import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineUser } from 'react-icons/hi';
import { TbReportAnalytics } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Search from '../components/Search'
import UserListPagination from '../components/UserListPagination';

const Users = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderIcon = (Icon) => (
    <span>
      <Icon className="text-lg text-primary-text mt-[3px]" />
    </span>
  );

  const renderMenuItem = (index, Icon, title) => (
    <div
      className={`dash ${
        activeIndex === index ? 'bg-gray-200' : ''
      }`}
      onClick={() => handleOnClick(index)}
    >
      {renderIcon(Icon)}
      <h5 className="text-primary-text">{title}</h5>
    </div>
  );

  return (
    <div className=''>
    <div className='flex'>
      <div className="container pt-4 border-r w-56 h-screen px-4 mx-2">
        <img src="./logo.png" alt="" width={120} className="mx-2" />
        <div className="mt-2 mb-4 mx-2">
          <span className="text-primary-text text-xs">PAGES</span>
        </div>
        <Link to='/'>
        {renderMenuItem(0, RxDashboard, 'Dashboard')}
        </Link>
        <Link to='/users'>
        {renderMenuItem(1, HiOutlineUser, 'Users')}
        </Link>
        {renderMenuItem(2, TbReportAnalytics, 'Sales')}
      </div>
      <div>
      <Search/>
      <div>
      <h1 className='my-6 font-semibold'>Users List</h1>
      <UserListPagination />
    </div>
      </div>
    </div>

    </div>
  )
}

export default Users
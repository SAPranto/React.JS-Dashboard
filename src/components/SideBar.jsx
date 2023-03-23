import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUser } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
const SideBar = () => {
  return (
    <>
    <div className='container pt-4 border-r w-44 h-screen px-4 mx-2'>
      <img src="./logo.png" alt="" width={120} className='mx-2'/>
      <div className='mt-2 mb-4 mx-2'>
      <span className='text-primary-text text-xs'>PAGES</span>
      </div>
      <div className='dash '>
        <span>
        <RxDashboard className='text-lg text-primary-text mt-[3px]'/>
        </span>
        <h5 className='text-primary-text'>Dashboard</h5>
      </div>
      <div className='dash'>
        <span>
        <HiOutlineUser className='text-lg text-primary-text mt-[3px]'/>
        </span>
        <h5 className='text-primary-text'>Users</h5>
      </div>
      <div className='dash'>
        <span>
        <TbReportAnalytics className='text-lg text-primary-text mt-[3px]'/>
        </span>
        <h5 className='text-primary-text'>Sales</h5>
      </div>
    </div>
    </>
  )
}

export default SideBar
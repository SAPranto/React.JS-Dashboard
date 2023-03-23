import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUser } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
const SideBar = () => {
  return (
    <>
    <div className='container pt-4 border-r w-44 h-screen px-4'>
      <img src="./logo.png" alt="" width={120}/>
      <div className='mt-2 mb-4'>
      <span className='text-primary-text text-xs'>PAGES</span>
      </div>
      <div className='flex gap-2 my-1 py-2'>
        <span>
        <RxDashboard className='text-lg text-primary-text mt-[3px]'/>
        </span>
        <h5 className='text-primary-text'>Dashboard</h5>
      </div>
      <div className='flex gap-2 my-1 py-2'>
        <span>
        <HiOutlineUser className='text-lg text-primary-text mt-[3px]'/>
        </span>
        <h5 className='text-primary-text'>Users</h5>
      </div>
      <div className='flex gap-2 my-1 py-2'>
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
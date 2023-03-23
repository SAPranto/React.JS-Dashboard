import React from 'react'
import Search from '../components/Search'
import SideBar from '../components/SideBar'

const Dashboard = () => {
  return (
    <>
    <div className='flex'>
    <SideBar />
    <Search/>
    </div>
    </>
  )
}

export default Dashboard
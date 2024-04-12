
import React from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'

function layout({children}) {
  return (
    <>
    <div className='h-full hidden md:block md:w-64 flex-col fixed inset-y-0 z-50'><SideNav key={Math.random()}/></div>
    <div className='md:ml-64'><TopHeader/>{children}</div>
    </>
  )
}

export default layout
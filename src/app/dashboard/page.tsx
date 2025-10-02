'use client'

import { useSession } from 'next-auth/react';


const DashboardPage = () => {
  const { data: session, status } = useSession();

  return (

    <div className= "flex flex-col max-w-screen-xl mx-auto py-6 p-4 mt-18">
      
        
        <div className=""></div>
    </div>
  )
}

export default DashboardPage

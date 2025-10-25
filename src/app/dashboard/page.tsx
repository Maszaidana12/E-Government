'use client'

import { useSession } from 'next-auth/react';
import DashboardClient from './dashboardclient';

const DashboardPage = () => {
  const { data: session, status } = useSession();

  return (
    

    <div className= "flex flex-col max-w-screen-xl mx-auto py-6 p-4 mt-18">
      <DashboardClient />
        
        <div className=""></div>
    </div>
  )
}

export default DashboardPage

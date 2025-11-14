"use client"

import { useState, useEffect } from 'react';


const MainDashboard = () => {
     const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => setTotal(data.totalPenduduk))
      .catch((err) => console.error(err));
  }, []);


  return (
    
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
      <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-slate-100">
        <h2 className="text-sm font-medium text-gray-500">Total Penduduk</h2>
        <p className="text-xl font-bold text-blue-700 mt-2">{total}</p>
      </div>
    </div>
    
  )
}

export default MainDashboard

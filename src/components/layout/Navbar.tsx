"use client";

import Image from "next/image";
import Link from "next/link";
import { LogoImage } from "@/components";
import { auth } from "auth";
import {Bell, Filter, Menu, Plus, Settings} from 'lucide-react';
import { Search } from "lucide-react";
import { Session } from "next-auth";
import ThemeToggle from "./ThemeToogle";
import { useNavbar } from "@/app/context/NavbarContext";

 

 interface NavbarProps {
  isCollapsed: boolean;
  setIsCollapsed: (v: boolean) => void;
  session: Session | null ;
}



const Navbar =({ isCollapsed, setIsCollapsed, session }: NavbarProps) => {
  
 const { config } = useNavbar();
 

  return (
    <header className= {`h-16 transition-all duration-300
    bg-white dark:bg-slate-900/80 shadow-md z-10
    ${isCollapsed ? "left-16" : "left-48"}`}>
      <div className="flex items-center justify-between w-full h-full px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <Menu className='w-5 h-5'/>
                </button>
                    <div className="hidden md:block">
                    <h1 className='text-xl font-outfit text-slate-800 font-bold dark:text-white'> {config.title}
                    </h1>
                    <h2 className="text-sm text-gray-500 font-outfit dark:text-gray-300 ">Selamat Datang, <span className="font-bold text-gray-950 dark:text-gray-300">{session?.user?.name} !</span></h2>
                </div>       
        </div>

        <div className=" w-64 mx-2">
          <div className="relative">
           
            <Search className=" w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"/> 
             {config.showSearch && <input
            type="text"
            placeholder="Cari...../"
            className="w-full pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200
            dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none
            focus:ring-blue-500 focus:border-transparent transition-all"
            />
             }
           

            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400
            hover:text-slate-600 dark:hover:text-slate-300">
              <Filter/>

            </button>

          

          </div>
        </div>

        {/* Right */}

        <div className="flex items-center space-x-3">
          {config.showAdd && 
          (<button 
           onClick={config.onAdd} 
          className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r
          from-blue-400 to-purple-600 text-white rounded-xl hover:shadow transition-all">
          <Plus className="w-4 h-4"/>
          <span className="text-sm font-medium">Tambah</span>
          </button>)}
          
           <ThemeToggle />


          {/*Notifikasi*/}
          <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800
          transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3

            </span>
          </button>


          {/*pengaturan*/}
          <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Settings  className=" w-5 h5"/>
            </button>
        </div>




        {/* Profil */}
                <Link href="/profile">
            <div className="flex gap-3 items-center p-4 border-t border-slate-200/50 dark:border-slate-700/50">
              <div className="flex flex-col justify-center -space-y-1 text-right">
                <span className="font-outfit text-md text-slate-800 dark:text-white truncate capitalize">
                  {session?.user?.name || "Guest"}
                </span>
                <span className="font-outfit text-xs text-gray-400 capitalize">
                  {session?.user?.role || "User"}
                </span>
              </div>
              <button
                type="button"
                className="ring-2 ring-gray-200 bg-gray-100 rounded-full"
              >
                <Image
                  src={session?.user?.image || LogoImage}
                  alt="Foto"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full cursor-pointer"
                />
              </button>
            </div>
          </Link>

      </div>
    </header>
  );
};

export default Navbar;

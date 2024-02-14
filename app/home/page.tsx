"use client";
import React from 'react';
import logo from './img.png'
import ProfileDropdown from './profile';
import Addtask from "./Addtask";
import { getAllTodos } from '../api';
import Recipelist from './recipelist';

const page=async () => {
  const tasks=await getAllTodos();
  console.log(tasks);
  return (
    <>
    <div className='bg-yellow-300 h-screen'>
    <div className='nav-bar bg-black'>
        <nav className='justify-end h-auto flex pt-1 pl-5'>
            <a className="relative pt-5 pb-5  pr-7 pl-5 mt-2 mr-5">
              {/* <button className='text-white border border-red-500 rounded-lg p-5 hover:bg-red-400'>Add a item</button> */}
              <Addtask/>
            </a>
            <a className="relative pt-5 pb-5  pr-7 pl-5 mr-7" >
            {/* <img alt="helo" className="h-20 mx-auto object-cover rounded-full w-20" src={logo.src}/> */}
            <ProfileDropdown/>
            </a>
        </nav>
    </div>
    <Recipelist tasks={tasks}/>
    </div>
    </>
  )
}
export default page
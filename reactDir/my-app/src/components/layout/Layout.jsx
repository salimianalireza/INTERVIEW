import React from 'react';
import { Navbar } from '../design/navbar';

export const Layout = ({ children }) => {
  return (
    <div className='m-8'>
      <div className='text-3xl font-bold undrline bg-sky-600 p-4 rounded-lg mb-2'><Navbar/></div>
      <div className='bg-gray-200 p-4  rounded-lg h-80  mb-2'>{children}</div>
      <div className='bg-sky-800 p-4 rounded-lg'>footer</div>
    </div>
  );
};

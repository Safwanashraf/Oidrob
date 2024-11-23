import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const SidebarOrganization = () => {
  // Define the tittle elements
  const Teams = <h2 className='p-2 font-sans font-normal text-custom-gray text-[14px] leading-[21px]'>Teams</h2>;
  const Projects = <h2 className='p-2 font-sans font-normal text-custom-gray text-[14px] leading-[21px]'>Projects</h2>;
  const Folder = <h2 className='p-2 font-sans font-normal text-custom-gray text-[14px] leading-[21px]'>Folder</h2>;

  return (
    <div className='w-56 m-0 p-0 h-screen bg-custom-b text-white flex flex-col'>
      <div className='mx-2 pl-2 my-3 flex flex-row'>
        <div class='p-3 w-4 h-4 rounded-full bg-white' />
        <h1 className='ml-2 font-sans font-medium hover:text-custom-text-b text-[18px] leading-normal'>Oidrob</h1>
        {/* Dropdown Icon */}
      </div>
      <hr className='border-t border-custom-b-f border-opacity-100' />
      <div className='h-screen gap-2 mx-2 my-3 flex flex-col'>
        {/* Search Icon */}
        <input
          type='text'
          placeholder='Search'
          className='p-2 pl-4 rounded bg-custom-b hover:bg-custom-b-f 
                font-sans font-normal text-white text-[14px] leading-normal focus:outline-none'
        />
        <div className='grid grid-flow-col-3 gap-2'>
          <div className='ml-2 flex items-center  mb-2 flex-row'>
            <div class='p-3 w-4 h-4 rounded-full bg-white' />
            <h1 className='ml-2 text-center font-sans font-normal text-white text-[14px] leading-[21px]'>My Work</h1>
          </div>
          <Dropdown titleComponent={Teams} >
            <div className='flex flex-col'>
              <Link className='p-2 pl-4 whitespace-nowrap hover:bg-custom-b-f hover:rounded-md font-sans font-normal text-white text-[14px] leading-[21px]'>
                Marketing
              </Link>
              <Link className='p-2 pl-4 whitespace-nowrap hover:bg-custom-b-f hover:rounded-md font-sans font-normal text-white text-[14px] leading-[21px]'>
                Design
              </Link>
              <Link className='p-2 pl-4 whitespace-nowrap hover:bg-custom-b-f hover:rounded-md font-sans font-normal text-white text-[14px] leading-[21px]'>
                Development
              </Link>
            </div>
          </Dropdown>
          <Dropdown titleComponent={Projects} >
            <div className='flex flex-col'>
              <Link className='p-2 pl-4 whitespace-nowrap  hover:bg-custom-b-f hover:rounded-md font-sans font-normal text-white text-[14px] leading-[21px]'>
                Blog Post
              </Link>
              <Link className='p-2 pl-4 whitespace-nowrap  hover:bg-custom-b-f hover:rounded-md font-sans font-normal text-white text-[14px] leading-[21px]'>
                Employee Training
              </Link>
              <Link className='p-2 pl-4 whitespace-nowrap hover:bg-custom-b-f hover:rounded-md font-sans font-normal text-white text-[14px] leading-[21px]'>
                Video Production
              </Link>
              <Dropdown titleComponent={Folder}>
                <div className='flex flex-col'>
                    <Link className='p-2 pl-4 hover:bg-custom-b-f hover:rounded-md font-sans font-normal text-white text-[14px] leading-[21px]'>
                    Website Development
                    </Link>
                    <Link className='p-2 pl-4 hover:bg-custom-b-f hover:rounded-md font-sans font-normal text-white text-[14px] leading-[21px]'>
                    Website Translation
                    </Link>
                </div>
              </Dropdown>
              <Link className='p-2 pl-4 whitespace-nowrap hover:bg-custom-b-f hover:rounded-md font-sans font-normal text-white text-[14px] leading-[21px]'>
                Sales Funnel
              </Link>
            </div>
          </Dropdown>
          <div className='mt-4'>
            <button className='bg-custom-b-500 px-4 py-2 rounded text-white'>Invite People</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarOrganization;

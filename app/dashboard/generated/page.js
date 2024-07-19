'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { FiHome, FiPlus, FiSettings, FiUsers, FiMail, FiPhoneCall, FiShare2, FiCopy, FiDownload } from 'react-icons/fi';
const MenuItem = ({ icon, name, href }) => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push(href);
    };
  
    return (
      <div 
        onClick={handleClick}
        className="flex items-center space-x-4 p-2 hover:underline hover:decoration-orange-500 decoration-2 cursor-pointer mb-4"
      >
        <div className="bg-white p-2 rounded-lg">
          {icon}
        </div>
        <span className='text-white ml-4'>{name}</span>
      </div>
    );
  };
  

const GeneratedInterviewPage = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <div className="flex items-center justify-between mb-8">
          <Image src="/logo.png" alt="Logo" width={75} height={75} />
        </div>
        
        <div className="flex-grow overflow-y-auto">
          <MenuItem icon={<FiHome size={20} />} name={menuCollapsed ? '' : 'Home'} href="/dashboard"/>
          <MenuItem icon={<FiPlus size={20} />} name={menuCollapsed ? '' : 'Create Interview'} href="/dashboard/create"/>
          <MenuItem icon={<FiSettings size={20} />} name={menuCollapsed ? '' : 'Job Board'} href="/dashboard/job_board"/>
          <MenuItem icon={<FiUsers size={20} />} name={menuCollapsed ? '' : 'Candidates'} href="/dashboard/candidates"/>
          <MenuItem icon={<FiMail size={20} />} name={menuCollapsed ? '' : 'Email'} href="/dashboard/emails"/>
          <MenuItem icon={<FiPhoneCall size={20} />} name={menuCollapsed ? '' : 'Support'} href="/dashboard/support" />
        </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-gradient-to-r from-[#EE6C4D] to-yellow-500 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">GENERATED INTERVIEW</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-lg mb-4">
            Your interview link and QR has been generated, share them with the candidates and track progress.
          </h2>

          <div className="border border-gray-300 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="w-1/2 border-r border-gray-300 pr-4">
                <h3 className="text-center font-semibold mb-2">Generated link</h3>
                <input 
                  type="text" 
                  value="https://example.com/interview/12345"
                  readOnly
                  className="w-full p-2 border rounded mb-2"
                />
                <div className="flex justify-end">
                  <button className="mr-2"><FiShare2 /></button>
                  <button><FiCopy /></button>
                </div>
              </div>
              <div className="w-1/2 pl-4">
                <h3 className="text-center font-semibold mb-2">Generated QR</h3>
                <div className="flex justify-center mb-2">
                  <Image src="/qr-code.png" alt="QR Code" width={70} height={70} />
                </div>
                <div className="flex justify-end">
                  <button className="mr-2"><FiShare2 /></button>
                  <button><FiDownload /></button>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <p>
              <strong>Test</strong> the generated interview by clicking{' '}
              <a href="#" className="text-[#EE6C4D] underline">here</a>
            </p>
            <p>
              Edit details of job and <strong>regenerate</strong> by clicking{' '}
              <a href="#" className="text-blue-400 underline">here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedInterviewPage;
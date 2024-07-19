'use client'

import { useState } from 'react';
import Image from 'next/image';
import { FiHome, FiPlus, FiSettings, FiUsers, FiMail, FiPhoneCall } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import FAQ from '@/components/FAQ';

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

export default function EmailForm() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
    <div className={`bg-[#424242] p-4 flex flex-col ${menuCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
        <div className="flex items-center justify-between mb-8">
            <Image src="/logo.png" alt="Logo" width={75} height={75} />
        </div>

        <div className="flex-grow overflow-y-auto">
            <MenuItem icon={<FiHome size={20} />} name={menuCollapsed ? '' : 'Home'}  href="/dashboard"/>
            <MenuItem icon={<FiPlus size={20} />} name={menuCollapsed ? '' : 'Create Interview'} href="/dashboard/create"/>
            <MenuItem icon={<FiSettings size={20} />} name={menuCollapsed ? '' : 'Job Board'} href="/dashboard/job_board"/>
            <MenuItem icon={<FiUsers size={20} />} name={menuCollapsed ? '' : 'Candidates'}  href="/dashboard/candidates"/>
            <MenuItem icon={<FiMail size={20} />} name={menuCollapsed ? '' : 'Email'} href="/dashboard/emails"/>
            <MenuItem icon={<FiPhoneCall size={20} />} name={menuCollapsed ? '' : 'Support'} href="/dashboard/support" />
        </div>

        <div className="flex items-center space-x-2 mt-auto">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            {!menuCollapsed && <span className='text-white ml-2'>Hi Username!</span>}
        </div>
    </div>

      {/* Main Email Form Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
      <div className="bg-gradient-to-r from-[#EE6C4D] to-yellow-500 text-white p-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Contact Form</h1>
      </div>
    <div className="flex-1 overflow-y-auto p-4">

        <div className="bg-white rounded-lg shadow flex-grow">
       
          <div className="flex">
            <div className="w-3/4 p-5 ">
            <h2 className="text-2xl font-bold mb-4 ">Contact us</h2>
          <h3 className="text-xl mb-6 text-[#828282]">Got questions? Reach out to our support team.</h3>
          
              <form>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-2">
                  <label htmlFor="firstName" className="block mb-1 font-semibold">First Name</label>
                    <input type="text" id="firstName" className="w-full p-2 border rounded-md" placeholder="Jane" />
                    
                  </div>
                  <div className="w-1/2 ml-2">
                    <label htmlFor="firstName" className="block mb-1 font-semibold">Last Name</label>
                    <input type="text" id="firstName" className="w-full p-2 border rounded-md" placeholder="Foster" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="userEmail" className="block mb-1 font-semibold">Your Email</label>
                  <input type="email" id="userEmail" className="w-full p-2 border rounded-md" placeholder="janefoster@gmail.com" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-1 font-semibold">Your message</label>
                  <textarea id="message" rows="5" className="w-full p-2 border rounded-md resize-y" placeholder="Enter your question or message"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#EE6C4D] text-white py-2 px-4 rounded-md hover:bg-[#424242] transition duration-300">
                  Submit
                </button>
              </form>
            </div>
            
            <div className="w-1/4 bg-[#FF994E] rounded-tr-md rounded-br-md  overflow-hidden">
            <div className="h-full relative p-12">
              <Image
                src="/support.png"
                width={300}
                height={300}
                alt="Emails"
              />
            </div>
          </div>
          </div>
        </div>
        <FAQ/>
        </div>
      </div>
    </div>
  );
}
'use client'

import { useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiHome, FiCalendar, FiUsers, FiSettings, FiSearch, FiArrowLeftCircle, FiArrowLeft, FiPhoneCall, FiPlus, FiMail } from 'react-icons/fi';
import { AiFillWechat } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

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

export default function Dashboard() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const cardDeets = [
    { title: 'No. of current openings', content: '03'},
    { title: 'Interviews scheduled for today', content: '02' },
    { title: 'Average Interview Completion Rate', content: '70%'},
    { title: 'Feedback Submitted by candidates', content: 'Review Now'},
  ];

  const jobDeets = [
    { name: 'Job Title', postedOn: '09 July 2024', attempts:'2', description:'This is a sample job description.'},
    { name: 'Job Title', postedOn: '09 July 2024', attempts:'2', description:'This is a sample job description.'},
    { name: 'Job Title', postedOn: '09 July 2024', attempts:'2', description:'This is a sample job description.'},
    { name: 'Job Title', postedOn: '09 July 2024', attempts:'2', description:'This is a sample job description.'},
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Left Menu */}
      <div className={`bg-[#424242] p-4 flex flex-col ${menuCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
        <div className="flex items-center justify-between mb-8">
          <Image src="/logo.png" alt="Logo" width={75} height={75} />
        </div>

        <div className="flex-grow overflow-y-auto">
        <MenuItem icon={<FiHome size={20} />} name={menuCollapsed ? '' : 'Home'}  href="/dashboard"/>
        <MenuItem icon={<FiPlus size={20} />} name={menuCollapsed ? '' : 'Create Interview'}  href="/dashboard/create"/>
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

      {/* Main Dashboard */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-gradient-to-r from-[#EE6C4D] to-yellow-500 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">DASHBOARD</h1>
          <div className="relative w-120">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg text-gray-800"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {cardDeets.map((card,i) => (
              <div key={i} className="bg-white rounded-lg shadow flex flex-row h-[120px]">
                <div className='bg-[#EE6C4D] w-[12px] h-full rounded-lg'></div>
                <div className='flex-grow p-4 flex flex-col justify-between'> 
                  <h2 className="ml-2"> {card.title}</h2>
                  <p className={`text-right text-2xl font-semibold self-end mb-0 ml-4 ${i === 3 ? 'text-red-500 font-normal text-sm underline' : ''}`}>
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-6">
            <div className="bg-white p-6 rounded-lg shadow flex-grow">
              <h2 className="text-xl font-semibold mb-4">Current Openings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                {jobDeets.map((card,i) => (
                  <div key={i} className="bg-white rounded-lg shadow flex flex-row h-[160px]">
                    <div className='flex-grow p-4 flex flex-col justify-between'> 
                      <h2 className="ml-2 font-bold text-xl"> {card.name}</h2>
                      <p className={`ml-2 mb-0`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-64">
              <div className="bg-white rounded-lg shadow mb-4">
                <Image src="/sideAd.png" width={300} height={100} alt="Ad" />
              </div>
              <div className="relative">
                <button className="absolute bottom-0 right-0 bg-[#424242] text-white p-3 rounded-full shadow-lg">
                  <AiFillWechat size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
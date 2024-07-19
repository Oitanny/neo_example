'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaArrowRight, FaTrash } from 'react-icons/fa';
import { FiHome, FiUsers, FiSettings, FiPhoneCall, FiPlus, FiMail, FiSearch, FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';

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

const JobCard = ({ title, description, date, status }) => (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
        <div className={`absolute top-2 right-2 px-2 py-1 rounded text-white text-sm ${status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}>
            {status}
        </div>
        <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-500">Created on: {date}</p>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
            <button className="bg-[#EE6C4D] text-white px-4 py-2 rounded flex items-center">
                Check Details
                <FaArrowRight className="ml-2" />
            </button>
            <button className="bg-gray-200 p-2 rounded">
                <FaTrash className="text-gray-600" />
            </button>
        </div>
    </div>
);

const CollapsibleSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </button>
            </div>
            {isOpen && children}
        </div>
    );
};

const JobsBoard = () => {
    const [menuCollapsed, setMenuCollapsed] = useState(false);

    const recentJobs = [
        { id: 1, title: "Frontend Developer", description: "Experienced React developer needed", date: "2024-07-18" },
        { id: 2, title: "UX Designer", description: "Creative designer with 3+ years experience", date: "2024-07-17" },
        { id: 3, title: "Backend Developer", description: "Node.js expert required for scaling our services", date: "2024-07-16" },
        { id: 4, title: "Product Manager", description: "Lead our exciting new product line", date: "2024-07-15" },
    ];

    const previousJobs = [
        { id: 5, title: "Data Scientist", description: "AI/ML expert needed for our data team", date: "2024-06-30" },
        { id: 6, title: "DevOps Engineer", description: "Manage our cloud infrastructure", date: "2024-06-28" },
    ];

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

            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="bg-gradient-to-r from-[#EE6C4D] to-yellow-500 text-white p-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Jobs Board</h1>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search jobs..."
                                    className="pl-10 pr-4 py-2 border rounded-lg"
                                />
                                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                            </div>
                            <button className="ml-4 bg-white text-black px-4 py-2 rounded-lg flex items-center">
                                <FiFilter className="mr-2" /> Filter
                            </button>
                        </div>
                        <div>
                            <button className="mr-4 text-gray-700 border-[#]">Drafts</button>
                            <button className="text-gray-700">Trash</button>
                        </div>
                    </div>

                    <CollapsibleSection title="Recent">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {recentJobs.map(job => (
                                <JobCard key={job.id} {...job} status={"Active"} />
                            ))}
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="Previous">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {previousJobs.map(job => (
                                <JobCard key={job.id} {...job} status={"Archived"}/>
                            ))}
                        </div>
                    </CollapsibleSection>
                </div>
            </div>
        </div>
    );
};

export default JobsBoard;
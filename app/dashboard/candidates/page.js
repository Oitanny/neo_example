'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiMenu, FiHome, FiCalendar, FiUsers, FiSettings, FiSearch, FiArrowLeftCircle, FiArrowLeft, FiPhoneCall, FiPlus, FiMail } from 'react-icons/fi';
import { FaSearch, FaFilter, FaCalendarAlt, FaThLarge, FaList, FaEllipsisH } from 'react-icons/fa';
import CalendarIcon from '../../../public/calendar.svg';
import CardIcon from '../../../public/grid.svg';
import TableIcon from '../../../public/list.svg';

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

  const CandidateCard = ({ candidate, index, onCheckEvaluation }) => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push("/dashboard/candidates/evaluations");
    };
  
   return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 relative">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">#{index + 1}</span>
        <button className="text-gray-500 hover:text-gray-700">
          <FaEllipsisH />
        </button>
      </div>
      <h3 className="text-lg font-semibold mb-2">{candidate.name}</h3>
      <div className="mb-2">
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
          {candidate.position}
        </span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">Status:</span>
        <select className="border rounded-lg px-2 py-1 text-sm">
          <option value="pending">Pending</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="rejected">Rejected</option>
          <option value="hired">Hired</option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">Score:</span>
        <span className="font-semibold">{candidate.score}</span>
      </div>
      <div className="text-sm text-gray-500 text-right mb-8">{candidate.date}</div>
      <div className='p-4'></div>
      <button 
        onClick={() => handleClick}
       
        className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
      >
        Check Evaluation
      </button>
    </div>
    );
  }

const CandidatesPage = () => {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const [view, setView] = useState('table');

    const candidates = [
      { id: 1, name: 'John Doe', position: 'Frontend Developer', status: 'Pending', score: 85, date: '2024-07-18' },
      { id: 2, name: 'Jane Smith', position: 'Backend Developer', status: 'Rejected', score: 72, date: '2024-07-17' },
      { id: 3, name: 'Alice Johnson', position: 'UX Designer', status: 'Shortlisted', score: 95, date: '2024-07-16' },
    ];

    return (
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <div className={`bg-[#424242] p-4 flex flex-col ${menuCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
          {/* Menu content */}
          <div className="flex items-center justify-between mb-8">
            <Image src="/logo.png" alt="Logo" width={75} height={75} />
          </div>

          <div className="flex-grow overflow-y-auto">
            <MenuItem icon={<FiHome size={20} />} name={menuCollapsed ? '' : 'Home'}  href="/dashboard"/>
            <MenuItem icon={<FiPlus size={20} />} name={menuCollapsed ? '' : 'Create Interview'} href="/dashboard/create" />
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

        <div className="container mx-auto flex-1 flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-[#EE6C4D] to-yellow-500 text-white p-6 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Candidates</h1>
          </div>

          <div className='p-6'>
            <div className="my-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="pl-10 pr-4 py-2 border rounded-lg"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
                <button className="ml-4 bg-white text-black px-4 py-2 rounded-lg flex items-center">
                  <FaFilter className="mr-2" /> Filter
                </button>
              </div>
              <div className="bg-gray-200 p-1 rounded-lg">
                <button
                  className={`p-2 rounded-lg ${view === 'calendar' ? 'bg-white' : ''}`}
                  onClick={() => setView('calendar')}
                >
                  <Image src={CalendarIcon} alt="Calendar View" className="w-5 h-5" />

                </button>
                <button
                  className={`p-2 rounded-lg ${view === 'card' ? 'bg-white' : ''}`}
                  onClick={() => setView('card')}
                >
                  <Image src={CardIcon} alt="Calendar View" className="w-5 h-5" />
                  </button>
                <button
                  className={`p-2 rounded-lg ${view === 'table' ? 'bg-white' : ''}`}
                  onClick={() => setView('table')}
                >
                  <Image src={TableIcon} alt="Calendar View" className="w-5 h-5" />
                  </button>
              </div>
            </div>

            {view === 'table' ? (
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="py-2">S.No.</th>
                    <th className="py-2">Candidate Name</th>
                    <th className="py-2 pl-8">Applied for</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Score</th>
                    <th className="py-2">Date</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {candidates.map((candidate, index) => (
                    <tr key={candidate.id} className="border-b">
                      <td className="py-4">{index + 1}</td>
                      <td className="py-4">{candidate.name}</td>
                      <td className="py-4 pl-8">
                        <span className="bg-gray-200 px-3 py-1 rounded-full">
                          {candidate.position}
                        </span>
                      </td>
                      <td className="py-4">
                        <select className="border rounded-lg px-2 py-1">
                          <option value="pending">Pending</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="rejected">Rejected</option>
                          <option value="hired">Hired</option>
                        </select>
                      </td>
                      <td className="py-4">{candidate.score}</td>
                      <td className="py-4">{candidate.date}</td>
                      <td className="py-4">
                        <button className="text-gray-500 hover:text-gray-700">
                          <FaEllipsisH />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {candidates.map((candidate, index) => (
                  <CandidateCard key={candidate.id} candidate={candidate} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default CandidatesPage;
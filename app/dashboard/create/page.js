'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaUpload, FaTimes, FaCogs } from 'react-icons/fa';
import { FiHome, FiPlus, FiSettings, FiUsers, FiMail, FiPhoneCall } from 'react-icons/fi';

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

const CreateInterviewPage = () => {
  const [keywords, setKeywords] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const handleAddKeyword = (e) => {
    if (e.key === 'Enter' && currentKeyword.trim()) {
      setKeywords([...keywords, currentKeyword.trim()]);
      setCurrentKeyword('');
    }
  };

  const handleRemoveKeyword = (keyword) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

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

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-[#EE6C4D] to-yellow-500 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">CREATE INTERVIEW</h1>
        </div> 

        <div className="flex-1 overflow-y-auto p-4">
          <form className="space-y-6">
            <div className="p-4 border rounded-lg bg-white">
              <label className="block mb-2 font-semibold">
                Role name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                placeholder="Enter the role name here"
              />
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <label className="block mb-2 font-semibold">
                Job Description <span className="text-red-500">*</span>
              </label>
              <p className="text-orange-500 mb-2">Write/paste the job description related to the role below.</p>
              <textarea 
                className="w-full p-2 border rounded mb-2" 
                placeholder="Write/paste the job description related to the role below."
              />
              <div className="bg-[#424242] text-white p-4 rounded flex items-center justify-center">
                <FaUpload className="mr-2" />
                <span>OR</span>
                <button className="ml-2">Upload a JD document here. (doc/docx/pdf/txt)</button>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <label className="block mb-2 font-semibold">
                Criteria <span className="text-red-500">*</span>
              </label>
              <p className="text-orange-500 mb-2">Enter fit criteria of the candidate below.</p>
              <textarea 
                className="w-full p-2 border rounded mb-2" 
                placeholder="Enter fit criteria here."
              />
              <div className="bg-[#424242] text-white p-4 rounded flex items-center justify-center">
                <FaUpload className="mr-2" />
                <span>OR</span>
                <button className="ml-2">Upload a criteria document here. (doc/docx/pdf/txt)</button>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <label className="block mb-2 font-semibold">
                Instructions <span className="text-red-500">*</span>
              </label>
              <p className="text-orange-500 mb-2">Add instructions and extra details for AI to ensure effective and appropriate interactions.</p>
              <textarea 
                className="w-full p-2 border rounded" 
                placeholder="Enter the instructions for AI model."
              />
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <label className="block mb-2 font-semibold">
                Keywords <span className="text-gray-500">(optional)</span>
              </label>
              <p className="text-orange-500 mb-2">Identify skill keywords in responses that AI should look for during evaluation.</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {keywords.map((keyword, index) => (
                  <span key={index} className="bg-orange-500 text-white px-2 py-1 rounded-full flex items-center">
                    {keyword}
                    <FaTimes className="ml-2 cursor-pointer" onClick={() => handleRemoveKeyword(keyword)} />
                  </span>
                ))}
              </div>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={currentKeyword}
                onChange={(e) => setCurrentKeyword(e.target.value)}
                onKeyPress={handleAddKeyword}
                placeholder="Type a keyword and press Enter"
              />
            </div>

            <button 
              type="submit" 
              className="bg-[#EE6C4D] text-white px-6 py-2 rounded flex items-center mx-auto"
            >
              <FaCogs className="mr-2" />
              Generate Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateInterviewPage;

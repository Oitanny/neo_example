'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiHome, FiUsers, FiSettings, FiPhoneCall, FiPlus, FiMail } from 'react-icons/fi';

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

const EvaluationPage = () => {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const [note, setNote] = useState('');
    const [isShortlisted, setIsShortlisted] = useState(false);

    const candidateInfo = {
        name: "John Doe",
        position: "Frontend Developer",
        date: "2024-07-18",
        score: 85,
        feedback: "Strong technical skills, good communication. Needs improvement in system design."
    };

    const transcript = [
        { speaker: "AI", message: "Hello! Welcome to the interview. Can you tell me about your experience with React?" },
        { speaker: "Candidate", message: "Certainly! I've been working with React for 3 years now. I've built several large-scale applications and I'm comfortable with hooks, context, and Redux." },
        { speaker: "AI", message: "That's great. Can you explain the concept of virtual DOM in React?" },
        { speaker: "Candidate", message: "Sure! The virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by minimizing direct manipulation of the DOM..." },
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
                    <h1 className="text-xl font-semibold">Evaluation</h1>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="flex justify-between mb-6">
                        <div className="bg-[#424242] text-white p-4 rounded-lg w-1/2 mr-4">
                            <h2 className="text-lg font-semibold mb-2">{candidateInfo.name}</h2>
                            <p>Position: {candidateInfo.position}</p>
                            <p>Interview Date: {candidateInfo.date}</p>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <div className="bg-orange-500 text-white p-4 rounded-lg mb-4">
                                <h2 className="text-lg font-semibold mb-2">Score Achieved</h2>
                                <p className="text-3xl font-bold">{candidateInfo.score}/100</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <h2 className="text-lg font-semibold mb-2">Summarized Feedback</h2>
                                <p>{candidateInfo.feedback}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mb-6">
                        <div className="w-1/2 mr-4">
                            <label className="block mb-2 font-semibold">Add a note</label>
                            <textarea 
                                className="w-full p-2 border rounded-lg" 
                                rows="4"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="w-1/2 flex items-center">
                            <label className="flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="form-checkbox h-5 w-5 text-orange-500"
                                    checked={isShortlisted}
                                    onChange={() => setIsShortlisted(!isShortlisted)}
                                />
                                <span className="ml-2 text-gray-700">Mark as shortlisted</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Transcript</h2>
                        <div className="border border-gray-300 rounded-lg p-4 bg-white">
                            <div className="space-y-4">
                                {transcript.map((entry, index) => (
                                    <div key={index} className={`flex ${entry.speaker === 'AI' ? 'justify-start' : 'justify-end'}`}>
                                        {entry.speaker === 'AI' && (
                                            <div className="w-10 h-10 rounded-full bg-orange-500 flex-shrink-0 mr-3 flex items-center justify-center text-white font-bold">
                                                AI
                                            </div>
                                        )}
                                        <div className={`max-w-3/4 p-3 rounded-lg ${entry.speaker === 'AI' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-white'}`}>
                                            <p className="font-semibold mb-1">{entry.speaker}</p>
                                            <p>{entry.message}</p>
                                        </div>
                                        {entry.speaker === 'Candidate' && (
                                            <div className="w-10 h-10 rounded-full bg-gray-800 flex-shrink-0 ml-3 flex items-center justify-center text-white font-bold">
                                                C
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvaluationPage;
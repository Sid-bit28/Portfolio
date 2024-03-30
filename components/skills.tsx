'use client';

import React from 'react';
import { skills } from '@/lib/data';
import { motion } from 'framer-motion';
import { SiJavascript } from 'react-icons/si';

const Skills = () => {
    return (
        <div className="text-2xl w-full sm:text-5xl my-[30px] left-[1.25rem] text-purple-800 px-12 font-[500]">
            Skills
            <hr className="mt-2 mb-4 border-t-2 border-purple-300" />
            <div className="w-full h-[150px] bg-purple-200 bg-opacity-80 px-7 py-3 rounded-[12px] border border-purple-100 border-opacity-40 shadow-lg shadow-black/[0.03]">
                <div className="text-xl sm:text-2xl uppercase text-purple-500">
                    &gt;{' '}
                    <span className="text-[600] mx-5 text-purple-900">
                        languages
                    </span>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-4 grid-flow-row gap-4 w-full">
                    {skills.map((skill) => (
                        <li
                            className="h-3/4 flex items-center justify-start text-[0.9rem] font-medium text-gray-600 sm:w-[initial] mt-6 mb-0 hover:text-gray-950 transition text-lg"
                            key={skill.icon}
                        >
                            <SiJavascript className="text-xl sm:text-2xl text-purple-800 m-3" />
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;

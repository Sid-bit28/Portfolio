'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import './style.css';

export default function Intro() {
    return (
        <section className="mb-15 max-w-full text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSksTuiRgR5rq6TmHyZsyhAGz86EtrhjP9Q&usqp=CAU"
                            alt="Siddarth"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.5,
                            duration: 0.7,
                        }}
                    >
                        😉
                    </motion.span>
                </div>
            </div>
            <motion.div
                className="mb-10 mt-4 px-4 font-normal !leading-[1.5] sm:text:4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="px-4 mb-2 mt-2 text-xl">
                    Hey there
                    <span className="emoji">👋</span>, my name is{' '}
                </span>
                <div className="text-2xl sm:text-6xl text-purple-800 px-4 mb-2 mt-2 font-[600]">
                    Siddarth Banerjee.
                </div>
                <div className="text-2xl sm:text-6xl my-4 font-[500]">
                    I "try" to make cool stuff for the web.
                </div>
                I'm from India,{' '}
                <span className="font-bold">
                    currently focused towards learning Next.js & TypeScript.
                </span>
            </motion.div>
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                >
                    {' '}
                    Contact me
                    <BsArrowRight className="opacity-70" />
                </Link>
                <a
                    className="bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer border border-black/10"
                    href="/Resume_Siddarth.pdf"
                    download
                >
                    Download CV{' '}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
                <div className="flex flex-row">
                    <a
                        href="https://www.linkedin.com/in/siddarth-banerjee-163101202/"
                        className="bg-transparent p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
                    >
                        <BsLinkedin
                            size={40}
                            className="focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
                        />
                    </a>
                    <a
                        className="bg-transparent p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
                        href="https://github.com/Sid-bit28"
                    >
                        <FaGithubSquare
                            size={44}
                            className="focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
                        />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

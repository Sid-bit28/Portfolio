'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import { IoSunny } from 'react-icons/io5';

const Header = () => {
    return (
        <header className="my-40 sm:my-5">
            <motion.div
                className="fixed top-[4%] left-[0%] -translate-x-3/4 py-5 sm:h-[initial] px-3 mx-10 text-purple-800 transition font-bold text-3xl"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                &#123;
            </motion.div>
            <motion.div
                className="fixed top-[4%] left-[1.4%] -translate-x-3/4 py-5 sm:h-[initial] px-3 hover:text-gray-950 transition font-bold text-3xl"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                S
            </motion.div>
            <motion.div
                className="fixed top-[4%] left-[5%] -translate-x-3/4 py-5 sm:h-[initial] px-3 hover:text-gray-950 transition font-bold text-3xl"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                &#125;
            </motion.div>
            <nav className="flex fixed top-[4%] left-[80%] -translate-x-1/2 py-2 sm:h-[initial]">
                <ul className="flex w-[22rem] items-center justify-center text-[0.9rem] font-medium text-gray-600 sm:w-[initial] flex-nowrap gap-5">
                    {links.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className="flex w-full items-center justify-center px-3 py-3 text-purple-800 hover:text-gray-950 transition font-bold text-lg"
                                href={link.hash}
                            >
                                {link.name}
                            </Link>
                        </motion.li>
                    ))}
                    <motion.li
                        className="h-3/4 flex items-center justify-center"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <IoSunny
                            size={30}
                            className="focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
                        />
                    </motion.li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

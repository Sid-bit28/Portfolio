'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="z-[999] relative">
            <nav className="flex fixed top-[0.15rem] left-3/4 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center text-[0.9rem] font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition font-bold text-lg"
                                href={link.hash}
                            >
                                {link.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

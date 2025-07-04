"use client"
import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid'
import React, { useState, useEffect } from 'react'
import Link from "next/link"

interface Props {
    openNav: () => void
}

const Navbar = ({ openNav }: Props) => {

    const [navSticky, setNavSticky] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true)
            } else {
                setNavSticky(false)
            }
        }
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, [])

    const stickyStyle = navSticky
        ? "bg-black bg-opacity-30 backdrop-blur-md shadow-md"
        : "bg-transparent"

    return (
        <div className={`fixed top-0 w-full ${stickyStyle} transition-all duration-300 z-[1000]`}>
            <div className="flex items-center h-[12vh] justify-between w-[90%] mr-5 ml-7 lg:mx-auto">
                <div className='flex gap-3 items-center'>
                    {/* Logo image removed as requested */}
                    <div className="font-logo text-white text-[18px]">
                        <span className="text-[30px] md:text-[40px] bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-800 bg-clip-text text-transparent">JK </span>
                        AI Engineer
                    </div>
                </div>
                <ul className="md:flex hidden items-center space-x-10">
                    <li><Link className="nav_link" href="#home">Home</Link></li>
                    <li><Link className="nav_link" href="#about">About</Link></li>
                    <li><Link className="nav_link" href="#services">Services</Link></li>
                    <li><Link className="nav_link" href="#projects">Projects</Link></li>
                    <li><Link className="nav_link" href="#contact">Contact</Link></li>
                </ul>
                <Bars3CenterLeftIcon
                    onClick={openNav}
                    className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-100 cursor-pointer"
                />
            </div>
        </div>
    )
}

export default Navbar

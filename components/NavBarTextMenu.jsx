import React from 'react'
import Link from 'next/link'
import {  AiOutlineMenu } from 'react-icons/ai'

const NavBarTextMenu = ({ linkColor, handleNav }) => {
    return (
        
        
        <div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
                <Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">Home</li>
                </Link>
                <Link href="/#about">
                    <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">About</li>
                </Link>
                <Link href="/#skills">
                    <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">Skills</li>
                </Link>
                <Link href="/#projects">
                    <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">Proyects</li>
                </Link>
                <Link href="/#contact">
                    <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer" >Contact</li>
                </Link>


            </ul>
            <div onClick={handleNav} className="md:hidden">
                <AiOutlineMenu size={25} />
            </div>
        </div>
    )
}

export default NavBarTextMenu
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'

const NavbarLeftContactIcons = () => {
    return (
        <div>
            <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]"> Let's Connect</p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <BsPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarLeftContactIcons
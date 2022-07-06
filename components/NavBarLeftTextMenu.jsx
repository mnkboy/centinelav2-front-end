import React from 'react'
import Link from 'next/link'

const NavBarLeftTextMenu = ({setNav}) => {
    return (
        <div>
            <ul className="uppercase">
                <Link href="/">
                    <li onClick={() => setNav(false)} className="py-4 text-sm cursor-pointer">Home</li>
                </Link>
                <Link href="/Personas">
                    <li onClick={() => setNav(false)} className="py-4 text-sm cursor-pointer">Personas</li>
                </Link>
                <Link href="/#about">
                    <li onClick={() => setNav(false)} className="py-4 text-sm cursor-pointer">About</li>
                </Link>
                <Link href="/#skills">
                    <li onClick={() => setNav(false)} className="py-4 text-sm cursor-pointer">Skills</li>
                </Link>
                <Link href="/#projects">
                    <li onClick={() => setNav(false)} className="py-4 text-sm cursor-pointer">Projects</li>
                </Link>
                <Link href="/#contact">
                    <li onClick={() => setNav(false)} className="py-4 text-sm cursor-pointer">Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBarLeftTextMenu
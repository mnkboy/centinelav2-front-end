import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import NavBarTextMenu from './NavBarTextMenu'
import NavBarLeftTextMenu from './NavBarLeftTextMenu'
import NavbarLeftContactIcons from './NavbarLeftContactIcons'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'



const Navbar = () => {
    //Arrange
    //------ States
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState("#ecf0f3")
    const [linkColor, setLinkColor] = useState("#1f2937")
    const router = useRouter()

    //------ Use EFFECT
    useEffect(() => {
        if (
            router.asPath === "/personas" ||
            router.asPath === "/personadetalle"
        ) {
            setNavBg("transparent")
            setLinkColor("#f8f8f8f8")
        } else {
            setNavBg("#ecf0f3")
            setLinkColor("#1f2937")
        }

    }, [router])

    useEffect(() => {
        const handleShadow = () => {
            if (window.screenY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, [])


    //------ Handlers
    const handleNav = () => {
        setNav(!nav)
    }

    //Act
    return (
        <div style={{ backgroundColor: `${navBg}` }}
            className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image
                        className="cursor-pointer"
                        src="/assets/simbolo-centinela.png"
                        alt="/"
                        width="75%"
                        height="75%"
                    />
                </Link>

                <NavBarTextMenu linkColor={linkColor} handleNav = {handleNav} />

                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>

            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image
                                src="/assets/simbolo-centinela.png"
                                alt="/"
                                width="65%"
                                height="65%"
                            />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Centinel Software</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        {/* //LeftText Menu */}
                        <NavBarLeftTextMenu setNav={setNav} />
                        {/* //LeftIcons Menu */}
                        <NavbarLeftContactIcons/>
                    </div>
                </div>

            </div>

        </div>
    )
    //Assert
}

export default Navbar
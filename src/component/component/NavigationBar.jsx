import React, { useState } from 'react'
import Logo from '../assets/Logo.png';
import {motion} from 'framer-motion'
import {
    LayoutDashboard,
    Clock3,
    BarChart,
    ArrowRightLeft,
    HelpCircleIcon
} from 'lucide-react';
import RightArrow from '../assets/icons/rightArrow.svg'


const NavLinks = [
    {
        name : 'Dashboard',
        icon : LayoutDashboard
    },
    {
        name : 'Activity',
        icon : Clock3
    },
    {
        name : 'Analytics',
        icon : BarChart
    },
    {
        name : 'Transactions',
        icon : ArrowRightLeft
    },
    {
        name : 'Help Center',
        icon : HelpCircleIcon
    }
]
// FFBCBC
const variants = {
    expanded: { width: "20%"},
    nonExpanded: {width: "5%"}
}

function NavigationBar() {

    const [active, setActive] = useState(true);
    const [isExpanded, setIsExpanded] = useState(true) 

  return (
        <motion.div
            animate = { isExpanded ? 'expanded': "nonExpanded" }
            variants={variants}
            className={'px-2 py-12 flex flex-col border border-r-1 w-1/5 h-screen relative -' }>
            <div className='logo-div flex space-x-3 items-center'>
                <img src={Logo} alt="" />
                <span className={isExpanded ? 'block' : 'hidden'}>Money Tracker</span>
            </div>

            <div onClick={() => setIsExpanded(!isExpanded)} className={'w-5 h-5 bg-[#ff8c8c] rounded-full flex items-center justify-center absolute ml-[185px] top-19.5' + (!isExpanded ? ' ml-[38px]' : ' ml-[192px]')}>
                <img src={RightArrow} className='w-[5px]' alt="" />
            </div>
 
            <div className='mt-10 flex flex-col space-y-8'>
                {NavLinks.map((item, index) => (
                    <div key={index} className={`flex space-x-3 rounded hover:bg-[#ff8c8c] hover:text-white cursor-pointer p-2 ${active == item.name ? 'bg-[#ff8c8c] text-white': ''}`
                } 
                onClick={() => setActive(item.name)}
                >
                        <span className={!isExpanded ? 'hidden': '' }>{item?.name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
  )
}

export default NavigationBar
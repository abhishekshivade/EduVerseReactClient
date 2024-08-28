import React from 'react'
import Logo from '../../assets/images/logo1.png'
import LinkedIn from '../../assets/images/social/linkedin.svg'
import Facebook from '../../assets/images/social/facebook.svg'
import X from "../../assets/images/social/x.svg"
import GitHub from '../../assets/images/social/gitHub.svg'

const Footer = () => {
    return (
        <div className='z-2 flex bg-[#66a9] items-center justify-evenly'>
            <img src={Logo} alt='EduVerse' className='h-48' />
            <div className='flex gap-5'>
                <div className='h-fit space-y-5'>
                    <img src={LinkedIn} className='w-10' alt='LinkedIn' />
                    <img src={Facebook} className='w-10' alt='Facebook' />
                </div>
                <div className='h-fit space-y-5'>
                    <img src={X} className='w-10' alt='LinkedIn' />
                    <img src={GitHub} className='w-10' alt='Facebook' />
                </div>
            </div>
        </div>
    )
}

export default Footer
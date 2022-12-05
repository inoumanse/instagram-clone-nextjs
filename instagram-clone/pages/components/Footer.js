import React from 'react'
import Link from 'next/Link'

const Footer = () => {
  return (
    <div>
        <div className='bg-gray-100 flex justify-center text-gray-500 text-sm mt-[-70px]'>
            <Link href=""><p className='pr-4'>Meta</p></Link>
            <Link href=""><p className='pr-4'>About</p></Link>
            <Link href=""><p className='pr-4'>Blog</p></Link>
            <Link href=""><p className='pr-4'>Jobs</p></Link>
            <Link href=""><p className='pr-4'>Help</p></Link>
            <Link href=""><p className='pr-4'>API</p></Link>
            <Link href=""><p className='pr-4'>Privacy</p></Link>
            <Link href=""><p className='pr-4'>Terms</p></Link>
            <Link href=""><p className='pr-4'>Top Accounts</p></Link>
            <Link href=""><p className='pr-4'>HashTags</p></Link>
            <Link href=""><p className='pr-4'>Locations</p></Link>
            <Link href=""><p className='pr-4'>instagram Lite</p></Link>
            <Link href=""><p className='pr-4'>Contact Uploading & Non-Users</p></Link>
        </div>
        <div className='flex justify-center text-sm pt-4 text-gray-500'>
            <p><span>&copy;</span>2022 Instagram from Meta</p>
        </div>
    </div>
  )
}

export default Footer

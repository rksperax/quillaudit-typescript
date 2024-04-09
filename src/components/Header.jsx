import { navItems } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-secondary flex items-center justify-between p-4 rounded'>
      <div className='ml-4 border-r pr-4 border-slate-700'>
        <Image src='/QuillShield-Logo.png' alt="qull-audit-logo" width={100} height={24} />
      </div>
      <div className='flex gap-y-4 gap-x-8 font-normal'>
        {navItems.map(nav => {
          const { id, label, url } = nav
          const active = id === 1
          return (
            <Link
              key={id}
              href={url}
              className={`${active ? 'text-primary border-b-2 border-customBorder-primary pb-1' : 'text-secondary'}`}>
              {label}
            </Link>
          )
        })}
        <div className='flex items-center mx-4 border-l pl-4 border-slate-700'>
          <Image src={"/DP.png"} alt="profile-picture" width={24} height={24} />
          <h1 className='text-white mx-4'>Johhny Doe</h1>
          <Image src={"/Arrow.png"} alt="profile-picture" width={12} height={12} />
        </div>
      </div>
    </div >
  )
}

export default Header
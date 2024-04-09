import Image from 'next/image'
import React from 'react'

export const AuditHeader = () => {
  return (
    <div className="flex items-center justify-between py-4 border-b-2 border-slate-700 mx-4">
      <div className='flex items-center'>
        <Image src="/Upload-Contract-Icon.png" alt="sample-project" width={30} height={24} />
        <h1 className='text-xl text-white ml-1'>
          Sample Project
        </h1>
      </div>
      <div>
        <button type='button' className='px-8 py-1.5 bg-button-primary text-white rounded-sm mr-4'>Audit Now</button>
        <button type='button' className='relative px-8 py-1.5 bg-button-primary bg-opacity-20 text-primary rounded-sm'>
          Options
          <div className='w-2.5 h-2.5 bg-orange-600 rounded-full absolute right-0 -top-1' />
        </button>
      </div>
    </div>
  )
}

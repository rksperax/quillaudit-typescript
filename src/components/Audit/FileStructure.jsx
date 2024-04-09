'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { selectFile, setFileContent } from '@/container/Audit/actions'

const FileStructure = ({ data }) => {
  const [expand, setExpand] = useState(false)
  const activeFile = useSelector((state) => state.activeFile) || ''


  const dispatch = useDispatch()

  const handleFileClick = (file) => {
    dispatch(selectFile(file.name))
    dispatch(setFileContent(file.name, file.code))
  }

  const toggleExpand = () => {
    setExpand(!expand)
  }

  if (data.isFolder) {
    return (
      <div className={`mt-2 ${expand ? 'text-explorer' : 'text-primary'} p-1 text-md font-normal ml-3`}>
        <div className='flex items-center'>
          <button button type='button' onClick={toggleExpand} className='flex items-center' >
            <Image
              src={expand ? '/Unselected-Arrow.png' : '/Selected-Arrow.png'}
              alt="folder icon"
              width={10}
              height={10}
              className='mr-4'
            />
            <Image className='mx-2' src={expand ? '/folder-Icon.png' : '/Selected-Folder-Icon.png'} alt="folder icon" width={20} height={10} />
            <span>{data.name}</span>
          </button >
        </div>
        <div className={expand ? 'hidden' : 'block pl-4'}>
          {data.items.map(item => {
            return <FileStructure data={item} key={item.id} />
          })}
        </div>
      </div>
    )
  } else {
    return (
      <button
        type="button"
        className='flex items-center p-1'
        onClick={() => handleFileClick(data)}
      >
        <Image src={expand ? '/Selected-File.png' : '/Unselected-File.png'} alt="file icon" width={12} height={10} />
        <span className={`ml-2 ${activeFile === data.name ? 'text-primary' : 'text-explorer'}`}>
          {data.name}
        </span>
      </button >
    )
  }
}

export default FileStructure

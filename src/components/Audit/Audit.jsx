'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Breadcrumb from '@/UI/Breadcrumb'
import { explorer, navBreadcrumb } from '@/lib/utils'
import { AuditHeader } from './AuditHeader'
import FileStructure from './FileStructure'
import CodeEditor from './CodeEditor'
import IssuesSidebar from './IssuesSidebar'

const Audit = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [toggleIssueSidebar, setToggleIssueSidebar] = useState(false)

  const toggleExplorer = () => {
    setToggleSidebar(!toggleSidebar)
  }

  const toggleIssue = () => {
    setToggleIssueSidebar(!toggleIssueSidebar)
  }

  const renderExplorerToggleBtn = () => {
    return (
      <button type='button' onClick={toggleExplorer}>
        <Image src={toggleSidebar ? "/expand-right.png" : '/expand-left.png'} alt="arrow" width={20} height={10} />
      </button>
    )
  }

  const renderIssueToggleBtn = () => {
    return (
      <button type='button' onClick={toggleIssue}>
        <Image src={toggleIssueSidebar ? "/expand-left.png" : '/expand-right.png'} alt="arrow" width={20} height={10} />
      </button>
    )
  }

  return (
    <>
      <Breadcrumb data={navBreadcrumb} />
      <div className='bg-secondary mt-2 h-full pb-4'>
        <AuditHeader />
        <div className='mt-4 px-4 flex relative'>
          <div className={`w-1/2 bg-tertiary ${toggleSidebar ? 'hidden' : 'block'} transition-all duration-300 ease-in-out`}>
            <h1 className='border-b-2 border-slate-700 mx-3 mb-2 py-2 text-explorer'>Folders & Files</h1>
            <FileStructure data={explorer} />
          </div>
          <CodeEditor
            explorerToggleBtn={renderExplorerToggleBtn}
            issueToggleBtn={renderIssueToggleBtn}
          />
          <IssuesSidebar className={`w-1/4 ${toggleIssueSidebar ? 'hidden' : 'block'} transition-all duration-300 ease-in-out`} />
        </div>
      </div>
    </>
  )
}

export default Audit
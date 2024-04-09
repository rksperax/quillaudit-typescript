'use client'

import Breadcrumb from '@/UI/Breadcrumb';
import Tab from '@/UI/Tab'
import { cn, issuesData } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react'

const tabs = [
  { index: 0, label: 'Current File' },
  { index: 1, label: 'Full Project' },
];

const IssuesSidebar = (props) => {
  const { className } = props
  const [currentScreen, setCurrentScreen] = useState('categories')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedIssue, setSelectedIssue] = useState(null)
  const [breadcrumbNav, setBreadcrumbNav] = useState([{ label: 'Count of Issue', url: '/' }])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setCurrentScreen('issues')
    const nav = {
      label: category.title,
      url: '/',
    }
    setBreadcrumbNav([...breadcrumbNav, nav]);
  }

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue)
    setCurrentScreen('issueDetails')
    const nav = {
      label: `Issue #${issue.id}`,
      url: '/'
    }
    setBreadcrumbNav((prevNav) => {
      const nav = {
        label: `Issue #${issue.id}`,
        url: '/'
      }
      return [...prevNav, nav]
    })
  }

  const handleBreadcrumbClick = (index) => {
    const updatedBreadcrumbNav = breadcrumbNav.slice(0, index + 1);
    setBreadcrumbNav(updatedBreadcrumbNav);

    if (index === 0) {
      setCurrentScreen('categories');
      setSelectedCategory(null);
      setSelectedIssue(null);
    } else if (index === 1) {
      setCurrentScreen('issues');
      setSelectedIssue(null);
    }
  };

  const bgColor = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    sky: 'bg-sky-500',
  }

  const IssuesCategoriesScreen = ({ issuesData, onCategoryClick }) => {

    return (
      <div>
        <h1 className='border-b p-2 border-slate-700 text-white'>Count of Issues</h1>
        <Tab tabs={tabs} />
        {issuesData.map(item => {
          const { total, title, color, id } = item
          return (
            <button
              key={id}
              button type="button"
              onClick={() => onCategoryClick(item)}
              className='flex items-center mt-4 mx-3 text-left capitalize bg-editor-header p-2' >
              <div className='flex items-center mx-4 w-24 border-slate-700 border-r pr-2'>
                <div className={`w-2 h-2 mr-2 rounded-full ${bgColor[color]}`} />
                <span className='text-2xl text-white'>{total}</span>
              </div>
              <h1 className='text-explorer'>{title}</h1>
              <span className='ml-8 mr-4 text-right text-2xl text-explorer'>&gt;</span>
            </button>
          )
        })}
      </div>
    )
  }

  const IssuesListScreen = ({ category, issues, onIssueClick }) => (
    <div className='p-3'>
      <div
        className='flex items-center mt-4 text-left capitalize p-3 bg-editor-header rounded-sm'>
        <div className='flex items-center mx-4 w-24 border-slate-700 border-r pr-2'>
          <div className={`w-2 h-2 mr-2 rounded-full ${bgColor[category.color]}`} />
          <span className='text-2xl text-white'>{category.total}</span>
        </div>
        <h1 className='text-explorer'>{category.title}</h1>
      </div>
      <h2 className='border-b mt-4 text-white border-slate-700 pb-3'>List of issues</h2>
      {issues.map((issue) => (
        <button key={issue.id} onClick={() => onIssueClick(issue)} className='flex text-left col pt-3 mt-4 p-3 w-full bg-editor-header rounded-sm text-explorer'>
          {`#${issue.id}. ${issue.issue_title}`}
          <span className='ml-6 mr-4 border-l border-slate-700 pl-5 text-right text-2xl text-explorer font-thin'>&gt;</span>
        </button>
      ))
      }
    </div >
  )

  const IssueDetailsScreen = ({ issue, category }) => (
    <div className='p-3 text-explorer'>
      <h1 className='flex items-center my-4 text-left capitalize p-3  bg-editor-header rounded-sm'>
        <div className={`w-2 h-2 mr-2 rounded-full ${bgColor[category.color]}`} />
        {`#${issue.id}. ${issue.issue_title}`}
      </h1>
      <div className='bg-editor-header p-2'>
        <span className='text-blue-500'>Description:</span>
        <p className='text-sm mt-2'>{issue.description}</p>
        <p className='text-blue-500 mt-5'>Remediation:</p>
        <p className='text-sm mt-2'>{issue.remediation}</p>
        <div className='border-t border-slate-700 text-right pt-5'>
          <button
            type="button"
            className='p-1 px-3 m-1 bg-button-primary text-white rounded-sm'
          >
            Auto Fix Code
          </button>
          <button
            className='p-2 px-3 m-1 border border-red-600 rounded-sm'
          >
            <Image src="/Flag.png" alt="flag" width={10} height={10} />
          </button>
        </div>
      </div>
      <p className='text-sm text-white mt-4 flex items-center'>
        <Image src="/Info-Icon.png" alt='info' width={12} height={12} className='mr-2' />
        Changes done in the code can be undone.</p>
    </div>
  )

  const renderScreen = () => {
    switch (currentScreen) {
      case 'categories':
        return <IssuesCategoriesScreen issuesData={issuesData} onCategoryClick={handleCategoryClick} />
      case 'issues':
        return <IssuesListScreen category={selectedCategory} issues={selectedCategory.list_of_issues} onIssueClick={handleIssueClick} />
      case 'issueDetails':
        return <IssueDetailsScreen issue={selectedIssue} category={selectedCategory} />
      default:
        return null;
    }
  }

  return (
    <div className={cn(className, 'bg-tertiary pb-10 w-1/2')}>
      {currentScreen !== 'categories' &&
        <div className='p-3 border-b border-slate-700'>
          <Breadcrumb data={breadcrumbNav} onBreadcrumbClick={handleBreadcrumbClick} />
        </div>
      }
      {renderScreen()}
    </div>
  )
}

export default IssuesSidebar
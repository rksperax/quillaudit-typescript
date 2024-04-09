import React, { useState } from 'react'

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  const TabButton = ({ label, active, onClick }) => {
    return (
      <button
        type="button"
        className={`w-1/2 p-2 px-3 m-1 ${active ? 'bg-button-primary text-white rounded-sm' : 'text-secondary'}`}
        onClick={onClick}
      >
        {label}
      </button>
    )
  }

  return (
    <div className="flex mt-4 mx-3 bg-editor-header p-1">
      {tabs.map((tab) => (
        <TabButton
          key={tab.index}
          label={tab.label}
          active={activeTab === tab.index}
          onClick={() => setActiveTab(tab.index)}
        />
      ))}
    </div>
  )
}

export default Tab

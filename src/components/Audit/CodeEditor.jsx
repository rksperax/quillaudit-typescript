'use client'

import React, { useEffect } from 'react'
import MonacoEditor, { monaco } from 'react-monaco-editor'
import { useDispatch, useSelector } from 'react-redux'
import { removeFile, selectFile, setFileContent } from '@/container/Audit/actions'

const CodeEditor = (props) => {
  const { explorerToggleBtn, issueToggleBtn } = props
  const openedFiles = useSelector((state) => state.openedFiles) || []
  const activeFile = useSelector((state) => state.activeFile) || ''
  const fileContents = useSelector((state) => state.fileContents)

  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined' && monaco) {
      monaco.editor.defineTheme('my-theme', {
        base: 'vs',
        inherit: false,
        rules: [],
        colors: {
          'editor.background': '#13161A',
          'editor.foreground': '#ffffff',
        },
      })
    }
  }, [])

  const handleChangeTab = (fileName) => {
    dispatch(selectFile(fileName))
  }

  const code = fileContents[activeFile] || '' // get active file content

  const findFileType = activeFile?.split('.')[1] // get active file extension

  const fileTypeMap = {
    js: 'javscript',
    html: 'html',
    css: 'css',
  }

  const options = {
    selectOnLineNumbers: true,
    fontSize: 18,
    wordWrap: "on",
  }

  const onCodeChange = (newValue, e) => {
    dispatch(setFileContent(activeFile, newValue))
  }

  const closeFile = (e, file) => {
    e.stopPropagation()
    const index = openedFiles.findIndex(f => f.name === file)

    if (openedFiles.length === 1) {
      dispatch(removeFile(file))
      dispatch(selectFile(''))
    } else if (index !== -1) {
      let nextIndex
      if (index === 0 && openedFiles.length > 1) {
        nextIndex = 1 // Set the second file as active if closing the first file
      } else if (index > 0) {
        nextIndex = index - 1 // Set the adjacent left file as active if not the first file
      }
      dispatch(removeFile(file))
      if (typeof nextIndex !== 'undefined') {
        dispatch(selectFile(openedFiles[nextIndex].name))
      }
    }
  }

  return (
    <div className='mx-2 w-full relative' style={{ height: '81vh' }}>
      <div className="tabs flex bg-editor-header">
        {openedFiles?.filter(item => item.name !== '').map((file) => (
          <div
            key={file.name}
            className={`tab p-2 cursor-pointer ${file.name === activeFile ? 'bg-button-primary' : 'text-secondary border-r border-slate-700 pr-1'}`}
            onClick={() => handleChangeTab(file.name)}
          >
            {file.name}
            <button type='button' className='mx-2' onClick={(e) => closeFile(e, file.name)}>x</button>
          </div>
        ))}
      </div>
      {activeFile && typeof window !== 'undefined' ? (
        <MonacoEditor
          language={fileTypeMap[findFileType]}
          theme="my-theme"
          value={code}
          options={options}
          onChange={onCodeChange}
          height='76vh'
          width='100%'
        />
      ) : <div className='bg-tertiary h-full text-white p-3 text-center'>No files are opened, choose from file explorer</div>}
      <div className='absolute bottom-16 -left-1'>
        {explorerToggleBtn()}
      </div>
      <div className='absolute bottom-16 -right-1'>
        {issueToggleBtn()}
      </div>
    </div >
  )
}

export default CodeEditor
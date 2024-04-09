import { REMOVE_FILE, SELECT_FILE, SET_FILE_CONTENT } from "./actionTypes"

const initialState = {
  activeFile: null,
  fileContents: {},
  openedFiles: [],
}

const audit = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FILE:
      // Check if file is already opened
      if (!state.openedFiles.some(file => file.name === action.payload)) {
        // Add file to openedFiles array
        const newFile = {
          name: action.payload,
          content: state.fileContents[action.payload] || '',
        }
        return {
          ...state,
          activeFile: action.payload,
          openedFiles: [...state.openedFiles, newFile],
        }
      }

      return {
        ...state,
        activeFile: action.payload,
      }

    case SET_FILE_CONTENT:
      return {
        ...state,
        fileContents: {
          ...state.fileContents,
          [action.payload.filePath]: action.payload.content,
        },
      }

    case REMOVE_FILE:
      // Remove the file from openedFiles and fileContents
      const { openedFiles, fileContents } = state
      const updatedOpenedFiles = openedFiles.filter(file => file.name !== action.payload)
      const updatedFileContents = { ...fileContents }
      delete updatedFileContents[action.payload]
      return {
        ...state,
        openedFiles: updatedOpenedFiles,
        fileContents: updatedFileContents,
      }

    default:
      return state
  }
}

export default audit
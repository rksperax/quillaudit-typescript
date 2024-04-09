import { REMOVE_FILE, SELECT_FILE, SET_FILE_CONTENT } from "./actionTypes"

export const selectFile = (filePath) => ({
  type: SELECT_FILE,
  payload: filePath,
})

export const setFileContent = (filePath, content) => ({
  type: SET_FILE_CONTENT,
  payload: { filePath, content },
})

export const removeFile = (fileName) => ({
  type: REMOVE_FILE,
  payload: fileName,
})

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {
  const dispatch = useDispatch()

  const { active } = useSelector(state => state.notes)

  const handleSave = () => {
    dispatch(startSaveNote(active))
  }

  const handlePictureClick = () => {
    console.log('pictures')
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = (e) => {
    console.log(e.target.files)
  }

  return (
    <div className="notes__appbar">
      <span>28 de agosto 2021</span>

      <input 
        id="fileSelector"
        type="file" 
        name="file"
        style={{display: 'none'}} 
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}

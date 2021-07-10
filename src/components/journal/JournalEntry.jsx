import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, title, body, date, url }) => {
  const dispatch = useDispatch()

  const noteDate = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, { title, body, date, url }))
  }

  return (
    <div
      className="journal__entry"
      onClick={handleEntryClick}
    >

      {
        url &&
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5-CODz3KwTsOwMg0drfKK2G3FwVCQy2tUQ&usqp=CAU)'
          }}
        ></div>
      }

      <div className="journal__entry-body">
        <p className="journal__entry-title">
          {title}
        </p>
        <p className="journal__entry-content">
          {body}
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('Do')}</h4>
      </div>

    </div>
  )
}

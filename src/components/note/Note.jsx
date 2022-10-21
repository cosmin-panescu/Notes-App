import React from 'react';
import './Note.scss';
import { TiDeleteOutline } from 'react-icons/ti';

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className='note'>
            <span contentEditable="true">{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <TiDeleteOutline
                    onClick={() => handleDeleteNote(id)}
                    className='delete-note'
                    size='1.3em'
                />
            </div>
        </div>
    );
};

export default Note;
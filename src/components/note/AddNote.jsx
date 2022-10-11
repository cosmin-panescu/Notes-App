import React, { useState } from 'react'
import './Note.scss'

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const characterLimit = 1000;

    const handleChange = e => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    }

    const handleSaveNote = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return (
        <div className="note new">
            <textarea
                cols="10"
                rows="8"
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            />
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button
                    className="btn"
                    onClick={handleSaveNote}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default AddNote
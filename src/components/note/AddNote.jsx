import React, { useState } from 'react'
import './Note.scss'
import Swal from 'sweetalert2'

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const characterLimit = 1000;

    const handleChange = e => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    }

    // error message for no saving note without content
    const Error = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    // succesful message for creating a note
    const Succes = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleSaveNote = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');

            Succes.fire({ // succesful note creation
                icon: 'success',
                title: 'Your note has been created successfully!'
            })
        } else {
            Error.fire({ // no text error message
                icon: 'error',
                title: 'You cannot create an empty note!',
            })
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
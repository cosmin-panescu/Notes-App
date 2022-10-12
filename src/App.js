import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import NotesList from './components/notesList/NotesList';
import Search from './components/search/Search';

function App() {
  // Store all notes
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false)

  // GET FROM LOCAL STORAGE
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // SET TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  // ADD NEW NOTE
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // DELETE A NOTE
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`container ${darkMode && 'dark-mode'}`}>
      <div className="app">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLocaleLowerCase()))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;

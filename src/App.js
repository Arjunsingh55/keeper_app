import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddNote from "./components/AddNote";
import { useState } from "react";
import Notes from "./components/Notes";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

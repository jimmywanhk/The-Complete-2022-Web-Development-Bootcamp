import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevItems) => {
      return [
        ...prevItems,
        {
          key: notes.length + 1,
          title: newNote.title,
          content: newNote.content,
        },
      ];
    });
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((items, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

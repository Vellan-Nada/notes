import React, { useState } from "react";
import Create from "./Create";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function handleCreate(param) {
    setNotes((prev) => {
      return [...prev, param];
    });
  }

  function handleDelete(id) {
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Create onCreate={handleCreate} />
      <div className="notes-container">
        {notes.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            id={index}
            onDelete={handleDelete}
          />
          );
        })}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

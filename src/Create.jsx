import React, { useState } from "react";

function Create(props) {
  const [note, setNotes] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setNotes((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleClick(event) {
    props.onCreate(note);
    setNotes({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title..."
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Content..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default Create;

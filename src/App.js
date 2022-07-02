import React from "react";
import Form from "./components/Form";
import Button from "./components/Button";
import Note from "./components/Note";
import { useState } from "react";
import { nanoid } from "nanoid";
import '../src/sass/app.scss';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function App() {
  const [animationParent] = useAutoAnimate();
  const [notes, setNotes] = useState([]);

  function handleSubmit(note) {
    let task = document.getElementById("task");
    let datetime = document.getElementById("daytime");

    if (task.value === "" || datetime.value === "") {
      alert("Please fill all fields");
      task.value === "" ? task.focus() : datetime.focus();
    } else {
    setNotes([{  ...note, id: nanoid() }, ...notes]);
    }
  }

  function handleButtonClick() {
    document.querySelector(".tog-btn").classList.toggle("active-btn");

    if (document.querySelector(".tog-btn").classList.contains("active-btn")) {
      document.querySelector(".tog-btn").textContent = "Hide Add Task Bar";
      document.querySelector(".tog-btn").style.color = "white";
      document.querySelector(".tog-btn").style.backgroundColor = "#FE0100";
      document.querySelector(".form").style.maxHeight = "500px";
    } else {
      document.querySelector(".tog-btn").textContent = "Show Add Task Bar";
      document.querySelector(".tog-btn").style.backgroundColor = "rgb(55, 227, 55)";
      document.querySelector(".tog-btn").style.color = "black";
      document.querySelector(".form").style.maxHeight = "0";
    }
  }
  
  function handleDelete(id) {
    setNotes(notes.filter(note => note.id !== id));
    console.log(id);
  }

  function handleLineThrough(e) {
    let style = e.target.closest("div").style;

    if (!e.target.classList.contains('delete')) {
    style.textDecoration === "line-through" ?
    style.textDecoration = "none" :
    style.textDecoration = "line-through";
    }
  }

  return (
    <div className="app" ref={animationParent}>
      <h1 className="header">Task Tracker</h1>
      <Button className="tog-btn" onClick={handleButtonClick}>Show Add Task Bar</Button>
      <Form onSubmit={handleSubmit}/>
      {notes.length !== 0 ?
        notes.map((note) => (
        <Note key={note.id} task={note.task} datetime={note.dateTime} onLineThrough={handleLineThrough} onDelete={() => handleDelete(note.id)} />)) :
      <p>No tasks yet</p>}
    </div>
  );
}

export default App;

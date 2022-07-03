import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function Form({ onSubmit }) {
    const [note, setNote] = useState({
        task: "",
        dateTime: "",
    });

    function handleSubmit(e) {
        let task = document.getElementById("task");
        let datetime = document.getElementById("daytime");
        if (task.value !== "" && datetime.value !== "") {
            onSubmit(note);
            setNote({
                task: "",
                dateTime: "",
            });
            e.preventDefault();
        }
    }
    
    return (
        <form className="form">
            <Input
                type="text"
                id="task"
                label="Task"
                placeholder="Add Task"
                value={note.task}
                onChange={(e) => setNote({ ...note, task: e.target.value })}
                required={true}
            />
            <Input
                type="datetime-local"
                id="daytime"
                label="Day&Time"
                placeholder="Add Day & Time"
                value={note.dateTime}
                onChange={(e) => setNote({ ...note, dateTime: e.target.value.split("T").join(" ")})}
                required={true}
            />
            <Button className="sub-btn" onClick={handleSubmit}>Save Task</Button>
        </form>
    );
  }
  
export default Form;
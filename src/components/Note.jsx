import { MdDeleteForever } from 'react-icons/md';

function Note({ task, datetime, onLineThrough, onDelete }) {
    return (
        <div className="note" onClick={onLineThrough}>
            <h2 className="task">{task}</h2>
            <h3 className="datetime">{datetime}</h3>
            <MdDeleteForever className="delete" onClick={onDelete}/>
        </div>    
    );
  }
  
export default Note;
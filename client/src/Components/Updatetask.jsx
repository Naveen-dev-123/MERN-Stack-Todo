import './Updatetask.css'
import React,{useState} from 'react';
import axios from 'axios';

function Updatetask(props) {
    const [task, setTask] = useState(props.task.todo);
    const updateTask =() => {
        if(task.trim() === '' || props.task.todo === task){
            return 
        }
        else{
            axios.put(`http://localhost:8000/api/tasks/${props.task._id}`,{
                _id : props._id,
                todo : task,
                isComplete : props.task.isComplete
            }).then(res => {
                props.removePopup()
                props.updatetask(res.data)
            }).catch(err => console.log(err))
        }
    }
  return (
    <div className='popup'>
        
        <div className="popup-content">
  
            <input type="text" placeholder='Update Task ...' 
                value={task} onChange={event => setTask(event.target.value)}
             /> 
            <button onClick={() => updateTask()}>Update</button>
            <button onClick={()=>props.removePopup()}>Cancel</button>
        </div>
    </div>
  )}

export default Updatetask;

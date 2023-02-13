const Task = ({task, onDelete, onUpdate}) => {
    console.log(task);
    return (
        <div className={`todo-item flex  justify-between align-center p-4 rounded shadow-xl my-4 border-l-4 ${(task.completed) ? "border-green-700" : "border-yellow-500"}`}  style={{height: "fit-content"}}>
            <div className="input-group flex  justify-start align-center gap-5 w-4/5">
                <input type="checkbox" name="" id="" checked={task.completed} onChange={() => onUpdate(task.id, task.todo, !task.completed)}/>
                <p className={((task.completed) ? "line-through" : "") + " p-2"} contentEditable="true" onBlur={(e) => { if(e.target.textContent.length > 0) {
                        onUpdate(task.id, e.target.textContent)
                    }else{
                        onDelete(task.id)
                    }
                }}>{task.todo}</p>                      
            </div>

            <div className="" onClick={() => { onDelete(task.id)}}>
                <i className="fa-solid fa-trash text-red-700"></i>
            </div>  
        </div>
    )
}

export default Task;
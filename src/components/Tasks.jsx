import Task from "./Task";

const Tasks = ({tasks, onDelete, onUpdate}) => {
    return (
        <div className="mt-10 p-4 lg:w-4/5 mx-auto ">
            <h3 className="text-3xl font-bold">My Todos</h3>
            

                {(tasks.length > 0) ? 
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        {tasks.map((task) =>
                            < Task task={task} onDelete={onDelete} onUpdate={onUpdate} />
                        )}
                    </div>
                    
                    : 
                
                    <div className="pt-10 pb-20">
                        <img src="/img/undraw_void_-3-ggu.svg" className="w-1/4 mx-auto mb-5" alt="" />
                        <h3 className="text-center text-3xl font-bold">What do you have to do today?</h3>
                    </div> 
                }   
            
        </div>
    )
}

export default Tasks;
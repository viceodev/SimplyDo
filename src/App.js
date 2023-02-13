import React from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import Tasks from "./components/Tasks";
import { useState } from "react";
import TasksJson from './data/tasks.json';

const App = () => {
    const [ tasks, setTasks ] = useState(TasksJson.todos);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
        console.log(id);
    }
    
    const updateTask = (id, todo, completed) => {
        setTasks(tasks.map((task) => {
            if(task.id === id){
                task.todo = todo;
                task.completed = completed
            }

            return task;
        }))
    }

    const addTask = (todo, completed) => {
        if(todo.length > 0){
            setTasks([{id: tasks.length, todo, completed}, ...tasks])
        }else{
            return ;
        }
        
    }
    
    return (
        <div className="flex flex-col min-h-screen text-gray-700">
            < Header />
            < AddTaskForm  onAdd={addTask}/>
            < Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updateTask}/>
            <footer className="text-center text-sm mt-auto">Designed with <span className="text-red-700">♥</span> by <a href="https://viceodev.tech">Viceodev</a></footer>
        </div>
    )
}

export default App;
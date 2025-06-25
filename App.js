import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [editTask, setEditTask] = useState(null);
    const [refresh, setRefresh] = useState(0);

    const refreshTasks = () => setRefresh(prev => prev + 1);

    return (
        <div>
            <h1>Shambhavi's To-Do List App</h1>
            <TaskForm editTask={editTask} setEditTask={setEditTask} refreshTasks={refreshTasks} />
            <TaskList setEditTask={setEditTask} refreshTrigger={refresh} />
        </div>
    );
}

export default App;
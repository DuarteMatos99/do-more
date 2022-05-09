import React from "react";

const TaskContext = React.createContext({});

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = React.useState([
        { to_be_done: [] },
        { done: [] },
    ]);
    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;

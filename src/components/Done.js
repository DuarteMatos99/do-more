import React from "react";
import useTasks from "../hooks/useTasks";
import "../styles/components/_done.scss";

const Done = () => {
    const { tasks, setTasks } = useTasks();

    function handleUnchecked(id) {
        const taskIndex = tasks[1].done.findIndex((obj) => obj.uuid === id);
        const checkedTask = tasks[1].done[taskIndex];

        setTasks([
            {
                to_be_done: [...tasks[0].to_be_done, checkedTask],
            },
            {
                done: tasks[1].done.filter(function (obj) {
                    return obj !== checkedTask;
                }),
            },
        ]);
    }

    return (
        <section className="done-area">
            <h3>Done</h3>
            <div className="tasks-unchecked">
                {tasks[1].done.map((obj) => {
                    return (
                        <div className="single-task" key={obj.uuid}>
                            <input
                                type="checkbox"
                                id={obj.uuid}
                                className="checkbox-round"
                                onChange={() => handleUnchecked(obj.uuid)}
                                checked
                            ></input>
                            <label htmlFor={obj.uuid}>{obj.content}</label>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Done;

import React from "react";
import "../styles/components/_to-do.scss";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import useTasks from "../hooks/useTasks.js";
import { v4 as uuidv4 } from "uuid";

const iconButtonStyles = {
    width: "32px",
    height: "32px",
    backgroundColor: "#C4C4C4",
    marginRight: "5px",
};

const ToDo = () => {
    const { tasks, setTasks } = useTasks();
    const [recentTask, setRecentTask] = React.useState("");

    function changeRecentTask(e) {
        setRecentTask(e.target.value);
    }

    function addNewTask(e) {
        let generated_uuid = uuidv4();
        setTasks([
            {
                to_be_done: [
                    ...tasks[0].to_be_done,
                    { uuid: generated_uuid, content: recentTask },
                ],
            },
            { done: [...tasks[1].done] },
        ]);
        setRecentTask("");
    }

    function handleChecked(id) {
        const taskIndex = tasks[0].to_be_done.findIndex(
            (obj) => obj.uuid === id
        );
        const checkedTask = tasks[0].to_be_done[taskIndex];

        setTasks([
            {
                to_be_done: tasks[0].to_be_done.filter(function (obj) {
                    return obj !== checkedTask;
                }),
            },
            { done: [...tasks[1].done, checkedTask] },
        ]);
    }

    return (
        <section className="to-do-area">
            <h3>To Do</h3>
            <div className="tasks-unchecked">
                {tasks[0].to_be_done.map((obj) => {
                    return (
                        <div className="single-task" key={obj.uuid}>
                            <input
                                type="checkbox"
                                id={obj.uuid}
                                className="checkbox-round"
                                onClick={() => handleChecked(obj.uuid)}
                            ></input>
                            <label htmlFor={obj.uuid}>{obj.content}</label>
                        </div>
                    );
                })}

                <div className="single-task">
                    <IconButton sx={iconButtonStyles} onClick={addNewTask}>
                        <AddIcon />
                    </IconButton>

                    <input
                        placeholder="Create Task"
                        onChange={changeRecentTask}
                        value={recentTask}
                    />
                </div>
            </div>
        </section>
    );
};

export default ToDo;

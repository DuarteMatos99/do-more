import React from "react";
import "../styles/components/_to-do.scss";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import useTasks from "../hooks/useTasks.js";

const iconButtonStyles = {
    width: "32px",
    height: "32px",
    backgroundColor: "#C4C4C4",
    marginRight: "5px",
};

const ToDo = () => {
    const { tasks, setTasks } = useTasks();

    return (
        <section className="to-do-area">
            <h3>To Do</h3>
            <div className="tasks-unchecked">
                <div className="single-task">
                    <input
                        type="checkbox"
                        id=""
                        className="checkbox-round"
                    ></input>
                    <label htmlFor="">First Task</label>
                </div>

                <div className="single-task">
                    <IconButton sx={iconButtonStyles}>
                        <AddIcon />
                    </IconButton>

                    <label>Create Note</label>
                </div>
            </div>
        </section>
    );
};

export default ToDo;

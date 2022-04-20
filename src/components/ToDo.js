import React from "react";
import "../styles/components/_to-do.scss";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const iconButtonStyles = {
    width: "32px",
    height: "32px",
    backgroundColor: "#C4C4C4",
    marginRight: "5px",
};

const ToDo = () => {
    return (
        <div className="toDo-area">
            <h3 className="title">To Do</h3>
            <div className="task-area">
                <div className="single-task">
                    <input
                        type="checkbox"
                        name="my-checkbox"
                        id="opt-in"
                        className="checkbox-round"
                    />
                    <label htmlFor="opt-in">Check me!</label>
                </div>
                <div className="single-task">
                    <input
                        type="checkbox"
                        name="my-checkbox"
                        id="opt-in"
                        className="checkbox-round"
                    />
                    <label htmlFor="opt-in">Check me!</label>
                </div>
                <div className="single-task">
                    <input
                        type="checkbox"
                        name="my-checkbox"
                        id="opt-in"
                        className="checkbox-round"
                    />
                    <label htmlFor="opt-in">Check me!</label>
                </div>
                <div className="single-task">
                    <input
                        type="checkbox"
                        name="my-checkbox"
                        id="opt-in"
                        className="checkbox-round"
                    />
                    <label htmlFor="opt-in">Check me!</label>
                </div>
                <div className="single-task">
                    <IconButton sx={iconButtonStyles}>
                        <AddIcon />
                    </IconButton>

                    <label for="task">Create Note</label>
                </div>
            </div>
        </div>
    );
};

export default ToDo;

import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "#styles/components/_single-task.scss";

const SingleTask = ({ checkedCondition, task, handleChecked }) => {
    return (
        <div className="single-task">
            <input
                className="checkbox-round"
                checked={checkedCondition}
                id={task.uuid}
                onChange={() => handleChecked(task.uuid)}
                type="checkbox"
            ></input>
            <label htmlFor={task.uuid}>{task.content}</label>

            <IconButton className="more-icon" sx={{ padding: 0.3 }}>
                <MoreVertIcon />
            </IconButton>
        </div>
    );
};

export default SingleTask;

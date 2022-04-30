import React from "react";

import "#styles/components/_tasks.scss";

const SingleTask = ({ checkedCondition, task, handleChecked }) => {
    return (
        <div className="single-task" key={task.uuid}>
            <input
                className="checkbox-round"
                checked={checkedCondition}
                id={task.uuid}
                onClick={() => handleChecked(task.uuid)}
                type="checkbox"
            ></input>
            <label htmlFor={task.uuid}>{task.content}</label>
        </div>
    );
};

export default SingleTask;

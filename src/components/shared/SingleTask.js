import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import useTasks from "#hooks/useTasks";
import "#styles/components/_single-task.scss";

const SingleTask = ({ checkedCondition, task, taskType, taskTypeIndex }) => {
    const { tasks, setTasks } = useTasks();

    const handleChecked = (task_uuid, taskType, taskTypeIndex, actionType) => {
        const taskIndex = tasks[taskTypeIndex][taskType].findIndex(
            (obj) => obj.uuid === task_uuid
        );
        const checkedTask = tasks[taskTypeIndex][taskType][taskIndex];

        if (taskType === "to_be_done") {
            setTasks([
                {
                    to_be_done: tasks[0].to_be_done.filter(function (obj) {
                        return obj !== checkedTask;
                    }),
                },
                {
                    done:
                        actionType === "delete"
                            ? [...tasks[1].done]
                            : [checkedTask, ...tasks[1].done],
                },
            ]);
        } else if (taskType === "done") {
            setTasks([
                {
                    to_be_done:
                        actionType === "delete"
                            ? [...tasks[0].to_be_done]
                            : [checkedTask, ...tasks[0].to_be_done],
                },
                {
                    done: tasks[1].done.filter(function (obj) {
                        return obj !== checkedTask;
                    }),
                },
            ]);
        }
    };

    return (
        <div className="single-task">
            <input
                className="checkbox-round"
                checked={checkedCondition}
                id={task.uuid}
                onChange={() =>
                    handleChecked(
                        task.uuid,
                        taskType,
                        taskTypeIndex,
                        "change_side"
                    )
                }
                type="checkbox"
            ></input>
            <label htmlFor={task.uuid}>{task.content}</label>

            <div className="more-icon">
                <IconButton
                    onClick={() =>
                        handleChecked(
                            task.uuid,
                            taskType,
                            taskTypeIndex,
                            "delete"
                        )
                    }
                    sx={{ padding: 0.3 }}
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default SingleTask;

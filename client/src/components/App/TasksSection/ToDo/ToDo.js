import React from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import "#styles/components/_tasks.scss";
import useTasks from "#hooks/useTasks";
import Pagination from "#shared/Pagination";
import SingleTask from "#shared/SingleTask";

const iconButtonStyles = {
    width: "32px",
    height: "32px",
    backgroundColor: "#C4C4C4",
    marginRight: "5px",
};

const ToDo = () => {
    const { tasks, setTasks } = useTasks();
    const [recentTask, setRecentTask] = React.useState("");
    const [pagination, setPagination] = React.useState({
        current_page: 1,
        tasks_per_page: 4,
        page_numbers: [],
    });
    const [tasksPaginated, setTasksPaginated] = React.useState([]);

    function updatePageNumbers() {
        let pageNumbers = [];
        const tasksLength = tasks[0].to_be_done.length;

        for (
            let i = 1;
            i <= Math.ceil(tasksLength / pagination.tasks_per_page);
            i++
        ) {
            pageNumbers.push(i);
        }

        if (pageNumbers.length === 0) pageNumbers = [1];

        setPagination({ ...pagination, page_numbers: pageNumbers });
    }

    // updates tasks by current current page
    function changeTasksPaginated() {
        const tasksLength = tasks[0].to_be_done.length;
        const indexOfLastPost =
            pagination.current_page * pagination.tasks_per_page;
        const indexOfFirstPost = indexOfLastPost - pagination.tasks_per_page;
        const correct_tasks = tasks[0].to_be_done.slice(
            indexOfFirstPost,
            indexOfLastPost
        );
        setTasksPaginated(correct_tasks);

        if (
            tasksLength % pagination.tasks_per_page === 0 + 1 ||
            tasksLength % pagination.tasks_per_page === 0 ||
            correct_tasks.length === 0
        ) {
            updatePageNumbers();
        }
    }

    function handleNextPage() {
        const nextPage = pagination.current_page + 1;
        const lastPagePagination = pagination.page_numbers.at(-1);
        if (nextPage <= lastPagePagination) {
            setPagination({ ...pagination, current_page: nextPage });
        }
    }

    function handlePreviousPage() {
        const previousPage = pagination.current_page - 1;
        const lastPagePagination = pagination.page_numbers.at(0);
        if (previousPage >= lastPagePagination) {
            setPagination({ ...pagination, current_page: previousPage });
        }
    }

    function changeRecentTask(e) {
        setRecentTask(e.target.value);
    }

    function addNewTask(e) {
        let generated_uuid = uuidv4();
        setTasks([
            {
                to_be_done: [
                    { uuid: generated_uuid, content: recentTask },
                    ...tasks[0].to_be_done,
                ],
            },
            { done: [...tasks[1].done] },
        ]);
        setRecentTask("");
    }

    React.useEffect(() => {
        changeTasksPaginated();
    }, [tasks, pagination.current_page]);

    React.useEffect(() => {
        if (tasksPaginated.length === 0) {
            handlePreviousPage();
        }
    }, [tasksPaginated]);

    return (
        <section className="to-do-area">
            <h3>To Do</h3>
            <div className="tasks-unchecked">
                {tasksPaginated.map((task) => {
                    return (
                        <SingleTask
                            checkedCondition={false}
                            key={task.uuid}
                            task={task}
                            taskType="to_be_done"
                            taskTypeIndex={0}
                        />
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

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                pagination={pagination}
            />
        </section>
    );
};

export default ToDo;

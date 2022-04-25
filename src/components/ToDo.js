import React from "react";
import "../styles/components/_to-do.scss";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import useTasks from "../hooks/useTasks.js";
import { v4 as uuidv4 } from "uuid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

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
            { done: [checkedTask, ...tasks[1].done] },
        ]);
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
                {tasksPaginated.map((obj) => {
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

            {/*Pagination*/}
            <div className="pagination">
                <IconButton onClick={handlePreviousPage}>
                    <ChevronLeftIcon />
                </IconButton>
                {`${pagination.current_page} - ${pagination.page_numbers.at(
                    -1
                )}`}
                <IconButton onClick={handleNextPage}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </section>
    );
};

export default ToDo;

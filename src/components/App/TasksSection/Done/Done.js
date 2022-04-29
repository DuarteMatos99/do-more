import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";

import "#styles/components/_tasks.scss";
import useTasks from "../../../../hooks/useTasks";

const Done = () => {
    const { tasks, setTasks } = useTasks();
    const [pagination, setPagination] = React.useState({
        current_page: 1,
        tasks_per_page: 4,
        page_numbers: [],
    });
    const [tasksPaginated, setTasksPaginated] = React.useState([]);

    function updatePageNumbers() {
        let pageNumbers = [];
        const tasksLength = tasks[1].done.length;

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
        const tasksLength = tasks[1].done.length;
        const indexOfLastPost =
            pagination.current_page * pagination.tasks_per_page;
        const indexOfFirstPost = indexOfLastPost - pagination.tasks_per_page;
        const correct_tasks = tasks[1].done.slice(
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

    function handleUnchecked(id) {
        const taskIndex = tasks[1].done.findIndex((obj) => obj.uuid === id);
        const checkedTask = tasks[1].done[taskIndex];

        setTasks([
            {
                to_be_done: [checkedTask, ...tasks[0].to_be_done],
            },
            {
                done: tasks[1].done.filter(function (obj) {
                    return obj !== checkedTask;
                }),
            },
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
        <section className="done-area">
            <h3>Done</h3>
            <div className="tasks-unchecked">
                {tasksPaginated.map((obj) => {
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
            {/*Pagination*/}
            <div className="pagination">
                <IconButton onClick={handlePreviousPage} sx={{ padding: 0.3 }}>
                    <ChevronLeftIcon />
                </IconButton>
                {`${pagination.current_page} - ${pagination.page_numbers.at(
                    -1
                )}`}
                <IconButton onClick={handleNextPage} sx={{ padding: 0.3 }}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </section>
    );
};

export default Done;

import React from "react";

import "#styles/components/_tasks.scss";
import useTasks from "#hooks/useTasks";
import SingleTask from "#shared/SingleTask";
import Pagination from "#shared/Pagination";

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
                {tasksPaginated.map((task) => {
                    return (
                        <SingleTask
                            checkedCondition={true}
                            key={task.uuid}
                            task={task}
                            taskType="done"
                            taskTypeIndex={1}
                        />
                    );
                })}
            </div>

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                pagination={pagination}
            />
        </section>
    );
};

export default Done;

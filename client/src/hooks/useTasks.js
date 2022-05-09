import { useContext } from "react";
import TaskContext from "../context/TasksProvider";

const useTasks = () => {
    return useContext(TaskContext);
};

export default useTasks;

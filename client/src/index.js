import React from "react";
import ReactDOM from "react-dom/client";
import "#styles/index.css";
import App from "./components/App";
import { TaskProvider } from "./context/TasksProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <TaskProvider>
            <App />
        </TaskProvider>
    </React.StrictMode>
);

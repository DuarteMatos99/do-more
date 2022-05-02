import React from "react";

import "#styles/components/_dashboard.scss";

import QuoteSection from "../QuoteSection/QuoteSection";
import HeaderSection from "../HeaderSection";
import TasksSection from "../TasksSection";

const Dashboard = () => {
    return (
        <section>
            <HeaderSection />
            <div className="main-area">
                <TasksSection />
            </div>
            <QuoteSection />
        </section>
    );
};

export default Dashboard;

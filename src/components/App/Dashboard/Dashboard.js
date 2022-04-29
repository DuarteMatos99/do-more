import React from "react";

import "#styles/components/_dashboard.scss";
import QuoteSection from "../QuoteSection/QuoteSection";
import SectionHeader from "../SectionHeader";
import TasksSection from "../TasksSection";

const Dashboard = () => {
    return (
        <section>
            <SectionHeader />
            <div className="main-area">
                <TasksSection />
                <QuoteSection />
            </div>
        </section>
    );
};

export default Dashboard;

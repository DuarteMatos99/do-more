import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";

const Pagination = ({ pagination, handleNextPage, handlePreviousPage }) => {
    return (
        <>
            {pagination.page_numbers.length > 1 && (
                <div className="pagination">
                    <IconButton
                        onClick={handlePreviousPage}
                        sx={{ padding: 0.3 }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                    {`${pagination.current_page} - ${pagination.page_numbers.at(
                        -1
                    )}`}
                    <IconButton onClick={handleNextPage} sx={{ padding: 0.3 }}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            )}
        </>
    );
};

export default Pagination;

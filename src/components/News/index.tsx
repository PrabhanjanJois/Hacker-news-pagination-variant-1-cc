import React from "react";
import { useNews } from "../../context/NewsContext";
import NewsBlock from "./Block";
import "./index.css";
import { Pagination, PaginationItem } from "@mui/material";

export default function News() {
  const { currentItems, handlePageClick, pageCount, currentPage } = useNews();

  return (
    <div data-testid="news-list" className="m-10 space-y-10">
      <p className="heading">Hacker News</p>

      {currentItems?.length !== 0 ? (
        <div className="space-y-5" data-testid="news-block">
          {currentItems && <NewsBlock newsArray={currentItems} />}

          <Pagination
            style={{ alignItems: "center" }}
            data-testid={"pagination"}
            color="primary"
            shape="rounded"
            variant="outlined"
            count={pageCount}
            showFirstButton
            showLastButton
            page={currentPage}
            onChange={handlePageClick}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

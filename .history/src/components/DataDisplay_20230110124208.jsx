import { React, useState, useEffect } from "react";
import Item2 from "./utils/Item2";
import Title from "./utils/Title";
import DummySkeleton from "./utils/skeleton";

import { Box, Button, Pagination } from "@mui/material";

const DataDisplay = ({ title, sneakTrends, sneakLoading }) => {
  // console.log(sales)
  useEffect(() => {
    const itemsPerPage = 20;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const displayedItems = sneakTrends?.slice(startIndex, endIndex);
  }, [page])
  
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const displayedItems = sneakTrends?.slice(startIndex, endIndex);

  const handlePagination = () => {
    if (page == 1) {
      setPage(page + 1);
    }    if (page == 2) {
      setPage(page - 1);
    }
  };

  console.log(displayedItems);
  return (
    <>
      <div className="nike-container">
        <Title title="Trending Shoes" />
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7  grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2`}
        >
          {sneakLoading && <DummySkeleton />}
          {sneakLoading && <DummySkeleton />}
          {sneakLoading && <DummySkeleton />}
          {sneakLoading && <DummySkeleton />}
          {sneakLoading && <DummySkeleton />}
          {sneakLoading && <DummySkeleton />}
          {sneakLoading && <DummySkeleton />}
          {sneakLoading && <DummySkeleton />}

          {displayedItems?.map((item, i) => (
            <Item2 {...item} key={i} />
          ))}
          {/* <Typography></Typography> */}
        </div>
        {/* <Box display="flex" justifyContent="space-evenly">
          <Button
            // disabled={page < 1}
            variant="outlinedas"
            // onClick={handleBackPage}
          >
            Back page{" "}
          </Button>
          <Button
            // disabled={searchedResult?.length < 13}
            variant="outlinedas"
            // onClick={handleNextPage}
          >
            Next page
          </Button>
        </Box> */}
        <Box my={4} display="flex" justifyContent="center">
          <Pagination
            variant="outlined"
            count={2}
            onChange={handlePagination}
          />
        </Box>
      </div>
    </>
  );
};

export default DataDisplay;

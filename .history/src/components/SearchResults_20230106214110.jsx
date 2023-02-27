import { React, useState, useEffect } from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";
import { useParams } from "react-router-dom";
import { searchProducts } from "./API";
import Item2 from "./utils/Item2";
import DummySkeleton from "./utils/skeleton";
import { Typography, Box, Button } from "@mui/material";
// import LazyLoad from 'react-lazyload';

const SearchResults = ({ ifExists, endpoint }) => {
  // console.log(endpoint)
  const { query } = useParams();
  const [loading, setLoading] = useState(true);
  const [searchedResult, setSearchedResult] = useState([]);
  const [page, setPage] = useState(1);
  const handleNextPage = () => {
    setPage(page + 1);
    console.log(page)
  };
  const handleBackPage = () => {
    setPage(page - 1);
    console.log(page)
  };

  useEffect(() => {
    const searchedResults = async () => {
      setLoading(true);
      // console.log(loading);
      searchProducts(query, page).then((data) => {
        // console.log(data);
        setSearchedResult(data);
        setLoading(false);
      });
    };
    searchedResults();
    console.log(searchedResult);
  }, [query, page]);

  return (
    <>
      <div
        className="nike-container"
        style={{
          marginTop: "10vh",
          height: `${loading} ? "auto" :"100vh" `,
          marginBottom: "10vh",
        }}
      >
        <Title title={`search Results for "${query}"`} />
        <div
          style={{ height: `${loading} ? "auto" :"100vh" ` }}
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-5  grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2`}
        >
          {loading && <DummySkeleton />}
          {loading && <DummySkeleton />}
          {loading && <DummySkeleton />}
          {loading && <DummySkeleton />}
          {loading && <DummySkeleton />}
          {loading && <DummySkeleton />}
          {loading && <DummySkeleton />}
          {loading && <DummySkeleton />}
          {searchedResult?.map((item, i) => (
            <>{loading ? <DummySkeleton /> : <Item2 {...item} />}</>
          ))}
        </div>
        {searchedResult?.length>1 }<Box display="flex" justifyContent="space-between">
          <Button disabled={page<1} variant="outlinedas" onClick={handleBackPage}>
            Back page{" "}
          </Button>
          <Button disabled = {searchedResult?.length<13}  variant="outlinedas" onClick={handleNextPage}>
            Next page 
          </Button>
        </Box>
      </div>
      {searchedResult?.length <= 1 ? (
        <center>
          <div style={{ height: "40vh" }}>
            <center>
              <Typography variant="subtitle" fontSize="20px">
                No results Found
              </Typography>
            </center>{" "}
          </div>
        </center>
      ) : (
        " "
      )}
    </>
  );
};

export default SearchResults;

import { React, useState, useEffect } from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";
import { useParams } from "react-router-dom";
import { searchProducts } from "./API";
import Item2 from "./utils/Item2";
import DummySkeleton from "./utils/skeleton";




const SearchResults = ({ ifExists, endpoint }) => {
  // console.log(endpoint)
  const { query } = useParams();
  const [loading, setLoading] = useState(true);
  const [searchedResult, setSearchedResult] = useState([]);

  useEffect(() => {
    const searchedResults = async () => {
      setLoading(true);
      console.log(loading);
      searchProducts(query).then((data) => {
        // console.log(data);
        setSearchedResult(data);
        setLoading(false);
      });
    };
    searchedResults();
    console.log(loading);
  }, [query]);

  return (
    <>
      {loading ? "W" : "L"}
      <div className="nike-container" height = "100vh" style={{height :`${loading} ? "auto" :"100vh" `}} >
        <Title title="search Results" />
        <div
          height = "100vh"
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7  grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2`}
        >
          {(loading) &&  <DummySkeleton /> }
          {(loading) &&  <DummySkeleton /> }
          {(loading) &&  <DummySkeleton /> }
          {(loading) &&  <DummySkeleton /> }
          {(loading) &&  <DummySkeleton /> }
          {(loading) &&  <DummySkeleton /> }
          {(loading) &&  <DummySkeleton /> }
          {(loading) &&  <DummySkeleton /> }
          {searchedResult?.filter(()=>{}).map((item, i) => (
            <>
              {loading ? <DummySkeleton /> : <Item2 {...item} />}
            </>
          ))}
          {/* <DummySkeleton /> */}
          {/* <Typography></Typography> */}
        </div>
      </div>
    </>
  );
};

export default SearchResults;

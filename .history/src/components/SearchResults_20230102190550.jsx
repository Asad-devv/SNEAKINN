import { React, useState, useEffect } from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";
import { useParams } from "react-router-dom";
import { searchProducts } from "./API";

const SearchResults = ({ ifExists, endpoint }) => {
  // console.log(endpoint)
  const { query } = useParams();
  
  
  const [searchedResult, setSearchedResult] = useState([]);
  console.log(endpoint);

  useEffect(() => {
    const results= async ()=>{
    const searchProducts(query).then((data) => {
      
      setSearchedResult(data)
      console.log(searchedResult)
    })}
  }, []);

  return (
    <>
      <div className="nike-container" style={{ height: "auto" }}>
        <Title title="search results" />
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 px-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2"
          }`}
        >
          {endpoint?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResults;

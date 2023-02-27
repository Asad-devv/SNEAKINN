import { React, useState, useEffect } from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";
import { useParams } from "react-router-dom";
import { searchProducts } from "./API";

const SearchResults = ({ ifExists, endpoint }) => {
  // console.log(endpoint)
  const { query } = useParams();

  const [searchedResult, setSearchedResult] = useState([]);

  useEffect(() => {
    const searchedResults = async () => {
      searchProducts(query)
      .then((data) => {
        console.log(data);
        setSearchedResult(data);
        // setloading(false);
      })

    };
    searchedResults();
  }, []);

  return (
    <>
    <div className='nike-container'>
      <Title title={title}  />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7  grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2`}>
        {checkData?.map((item, i) => (
          <Item2 {...item}   key={i}  />
        ))}
        {/* <Typography></Typography> */}
      </div>
    </div>
 </>
  );
};

export default SearchResults;

import {React,useState,useEffect} from 'react'
import Item from './utils/Item'
import Title from './utils/Title' 








const SearchResults = ({ ifExists, endpoint}) => {

  // console.log(endpoint)
  const [sales,setSales] = useState(false)

  console.log()
  
  return (
   <>
{/*    
      <div className='nike-container'>
        <Title title="search results"  />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 px-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'}`}>
          {items?.map((item, i) => (
            <Item {...item}  key={i} ifExists={ifExists} />
          ))}

        </div>
      </div> */}

   </>
  )
}

export default SearchResults
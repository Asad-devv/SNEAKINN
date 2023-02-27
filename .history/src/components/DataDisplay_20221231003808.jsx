import {React,useState,useEffect} from 'react'
import Item2 from './utils/Item2'
import Title from './utils/Title' 











const DataDisplay = ({ title,checkData}) => {


  // console.log(endpoint)
  const [sales,setSales] = useState(false)

  
  console.log(sales)
  return (
   <>
      <div className='nike-container'>
        <Title title={title}  />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 px-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'}`}>
          {checkData?.map((item, i) => (
            <Item2 {...item}   key={i}  />
          ))}
          {/* <Typography></Typography> */}
        </div>
      </div>
   </>
  )
}

export default DataDisplay
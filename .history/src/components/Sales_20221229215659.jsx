import {React,useState,useEffect} from 'react'
import Item from './utils/Item'
import Title from './utils/Title' 
import getDa







const Sales = ({ ifExists, endpoint: { title, items } }) => {

  function Loader() {
    return (
      <div sx={{height : "90vh"}}>
      {(!sales &&
      <h1>
        Sales</h1>)}
      </div>
    )
  }
  // console.log(endpoint)
  const [sales,setSales] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setSales(true)
    }, 3000);

  }, [])
  
  console.log(sales)
  return (
   <>
   {(<Loader/> &&
      <div className='nike-container'>
        <Title title={title}  />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 px-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'}`}>
          {items?.map((item, i) => (
            <Item {...item}  key={i} ifExists={ifExists} />
          ))}
          {/* <Typography></Typography> */}
        </div>
      </div>
)}
   </>
  )
}

export default Sales
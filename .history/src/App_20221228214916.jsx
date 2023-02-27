import React,{useState} from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
import ProductPage from './components/ProductPage';
import { Route,Routes } from 'react-router-dom';
import Products from './components/Products/Products';


const App = () => {
  const [seeMore, setSeeMore] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
   <>
      <Navbar filteredProducts={filteredProducts} = setSeeMore={setSeeMore} />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
      

        <Routes>
          <Route path="/" element={
          <>

        <Hero heroapi={heroapi} />
        <Sales  endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales  endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
          </>} />
        <Route path="/" />
        <Route path="*" element={<h1 sx={{fontSize:"90px"}}>Not found</h1>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductPage/>} />
        <Route path="/products/search/:query" element={<Sales />} />

      </Routes>
        
      </main>
      <Footer footerAPI={footerAPI} />

   </>
  )
}

export default App;
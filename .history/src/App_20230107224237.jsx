import React,{useEffect, useState} from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
import ProductPage from './components/ProductPage';
import { Route,Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Error from "./components/Error"
import SearchResults from './components/SearchResults';
import { getSneakers,getProductsBySlug,searchProducts } from './components/API';
import DataDisplay from "./components/DataDisplay"
import DummySkeleton from './components/utils/skeleton';



const App = () => {


  const [sneaker, setsneaker] = useState([])
  const [seeMore, setSeeMore] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searcResults, setSearcResults] = useState([])
  useEffect(() => {

    getSneakers()
    .then((data) => {
      console.log(data);
      setsneaker(data);
      // setloading(false);
    })
  }, []);
  
  console.log(sneaker)
  return (
   <>
      <Navbar setSearcResults={setSearcResults} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} setSeeMore={setSeeMore} />
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
        <Route path="*" element={<Error/>}/>
        <Route path="/products" element={<Products sneaker={}/>} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/products/search/:query" element={<SearchResults endpoint={searcResults} />} />

      </Routes>
        
      </main>
      <Footer footerAPI={footerAPI} />
      {/* <DataDisplay sneaker={sneaker} title="check Data" /> */}

   </>
  )
}

export default App;
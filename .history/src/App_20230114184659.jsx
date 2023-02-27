import React,{useEffect, useState,useRef} from 'react';
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
import Blog from "./components/blog/blog.jsx"
import AboutUs from "./components/AboutUs"

const App = () => {

  const searchRef = useRef(null);
  const [sneakTrends, setSneakTrends] = useState([])
  const [seeMore, setSeeMore] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sneakLoading, setSneakLoading] = useState(true);

  const [searcResults, setSearcResults] = useState([])
  useEffect(() => {
    setSneakLoading(true)
    getSneakers()
    .then((data) => {
      console.log(data);
      setSneakTrends(data);
      setSneakLoading(false)
    })
  }, []);
  const handleClearSearch=() =>{

  }
  
  console.log(sneakTrends)
  return (
   <>
   <div onClick={handleClearSearch}>
      <Navbar searchRef={searchRef} setSearcResults={setSearcResults} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} setSeeMore={setSeeMore} />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
      

        <Routes>
          <Route path="/Home" element={
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
        <Route path="/products" element={<Products sneakLoading={sneakLoading} sneakTrends={sneakTrends}/>} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/products/search/:query" element={<SearchResults endpoint={searcResults} />} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/About us" element={<AboutUs/>} />
      </Routes>
        
      </main>
      <Footer footerAPI={footerAPI} />
      {/* <DataDisplay SneakTrends={SneakTrends} title="check Data" /> */}
      </div>
   </>
  )
}

export default App;
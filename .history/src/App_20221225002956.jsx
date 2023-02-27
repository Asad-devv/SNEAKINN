import React from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
import ProductPage from './components/ProductPage';
import { Route,Routes } from 'react-router-dom';


const App = () => {
  return (
   <>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative'>
      

        {/* <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} /> */}
        <Routes>
        <Route path="*" element={<h1 >Not fond</h1>}/>
      </Routes>
        
      </main>
      <Footer footerAPI={footerAPI} />
      <ProductPage/>
   </>
  )
}

export default App;
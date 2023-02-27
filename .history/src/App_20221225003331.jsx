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
      

        <Routes>
          <Route path="/" element={
          <>

          </>} />
        <Route path="*" element={<h1 sx={{fontSize:"90px"}}>Not fond</h1>}/>
      </Routes>
        
      </main>
      <Footer footerAPI={footerAPI} />
      <ProductPage/>
   </>
  )
}

export default App;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import Store from './app/Store.js';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material';
import {styles} from "./components/navbarStyle"
import {
  createBrowserRouter,
  RouterProvider,BrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={styles}>
    <Browser
    <Provider store={Store}>
    <Toaster position='top-center' reverseOrder={false} />
      <App/>
    </Provider>
    </ThemeProvider>
  </>
)

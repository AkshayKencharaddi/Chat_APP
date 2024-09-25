import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  </BrowserRouter>
)

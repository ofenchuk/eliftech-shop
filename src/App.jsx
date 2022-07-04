import { useState, createContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Router from './components/Router'

export const ShopContext = createContext()

export default function App() {
  const [shopState, setShop] = useState({
    order: {},
    products: {},
  })

  return (
    <div className="App">
      <ShopContext.Provider value={{ shopState, setShop }}>
   
        <Router></Router>
      </ShopContext.Provider>
    </div>
  )
}

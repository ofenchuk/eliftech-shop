import { createContext } from 'react'
import { Navigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import History from './History'
import NotFound from './NotFound'
import Shop from './Shop'
import ShoppingCart from './ShoppingCart'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/shop/mcdonalds" replace />} />
        <Route
          path="/shop"
          element={<Navigate to="/shop/mcdonalds" replace />}
        />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/shop/mcdonalds" element={<Shop />} />
        <Route path="/shop/:shopId" element={<Shop />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}

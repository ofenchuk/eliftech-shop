import { useContext } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { ShopContext } from '../App'
import Header from './Header'
import Products from './Products'
import ShopList from './ShopList'

export default function Shop() {
  return (
    <div className="main">
      <ShopList></ShopList>
      <Products></Products>
    </div>
  )
}

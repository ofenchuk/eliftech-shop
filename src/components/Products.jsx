import React from 'react'
import { useContext } from 'react'
import Product from './Product'
import { ShopContext } from '../App'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { child, get, getDatabase, ref } from 'firebase/database'

export default function Products() {
  const { shopState, setShop } = useContext(ShopContext)
  const shopName = useLocation().pathname.replace('/shop/', '')
  const localStorageRef = JSON.parse(window.localStorage.getItem('order'))
  const dbRef = ref(getDatabase())
  useEffect(() => {
    get(child(dbRef, `products/${shopName}`)).then((snapshot) => {
      setShop({ order: localStorageRef, products: snapshot.val() })
    })
  }, [shopName])

  if (!shopState.products) {
    return null
  }

  return (
    <ul className="products-list">
      {Object.keys(shopState.products).map((key) => (
        <Product
          product={shopState.products[key]}
          index={key}
          key={key}
        ></Product>
      ))}
    </ul>
  )
}

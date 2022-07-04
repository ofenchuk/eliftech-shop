import React from 'react'
import { useContext } from 'react'
import OrderItem from './OrderItem'
import { ShopContext } from '../App'
import { useEffect } from 'react'

export default function OrderCart(props) {
  const { shopState, setShop } = useContext(ShopContext)
  const localStorageCart = JSON.parse(localStorage.getItem('order'))
  useEffect(() => {
    setShop({ order: localStorageCart })
  }, [])

  const totalPrice = () => {
    let total = 0
    Object.keys(shopState.order).forEach((key) => {
      total += shopState.order[key].price * shopState.order[key].quantity
    })
    return total.toFixed(2)
  }

  if (!shopState.order) {
    return null
  }
  return (
    <ul className="order-cart">
      <p>Total Price: {totalPrice()}$</p>
      {Object.keys(shopState.order).map((key) => (
        <OrderItem database={props.database} index={key} key={key} />
      ))}
    </ul>
  )
}

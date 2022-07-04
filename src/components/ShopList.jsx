import React from 'react'
import { Link } from 'react-router-dom'
import ShopButton from './ShopButton'

export default function ShopList() {
  const shops = ['McDonalds', 'Burger King', 'Subway', 'KFC', 'Taco Bell']
  return (
    <div className="shopList">
      <ul className="shops">
      <h2>Shops:</h2>
        {shops.map((key) => (
          <ShopButton key={key} shop={key} />
        ))}
      </ul>
    </div>
  )
}

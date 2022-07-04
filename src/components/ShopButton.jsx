import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ShopButton(props) {
  const shop = props.shop
  const navigate = useNavigate()

  const goToShop = (e) => {
    e.preventDefault()
    const name = props.shop.split(' ').join('').toLowerCase()
    navigate(`/shop/${name}`)
  }

  return (
    <li className="shopButton">
      <button onClick={goToShop} className="goToShop">
        {shop}
      </button>
    </li>
  )
}

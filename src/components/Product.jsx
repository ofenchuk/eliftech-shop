import { useEffect } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../App'

export default function Product(props) {
  const { shopState, setShop } = useContext(ShopContext)
  const { name, price, image } = props.product
  const addToOrder = () => {
    const order = { ...shopState.order }
    const quantity = order[props.index] ? order[props.index].quantity + 1 : 1
    order[props.index] = {
      name,
      quantity,
      price,
      image,
    }
    setShop({ ...shopState, order })
  }


  useEffect(() => {
    if (localStorage) {
      window.localStorage.setItem('order', JSON.stringify(shopState.order))
    }
  }, [shopState.order])

  return (
    <li className="product-item">
      <img className="product-image" src={image} alt="" srcset="" />
      <div>
        <p className="product-name">
          {name} - ${price}
        </p>
        <button className='product-button' onClick={addToOrder}>Add to Cart </button>
      </div>
    </li>
  )
}

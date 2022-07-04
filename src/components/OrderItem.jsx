import { useEffect } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../App'
import base from '../firebase'

export default function OrderItem(props) {
  const { shopState, setShop } = useContext(ShopContext)

  const ref = shopState.order[props.index]

  const number = ref.quantity

  const updateNumber = (e) => {
    const order = { ...shopState.order }
    order[props.index].quantity = parseInt(e.target.value)
    setShop({ order })
  }
  const totalPrice = (ref.price * number).toFixed(2)

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(shopState.order))
  }, [shopState])

  const removeFromOrder = () => {
    const order = { ...shopState.order }
    delete order[props.index]

    // if order is empty, remove it from localStorage, because for some reason useEffect doesn't work on last item
    if (Object.keys(order).length === 0) {
      return (
        setShop({ order }), localStorage.setItem('order', JSON.stringify(order))
      )
    }
    setShop({ order })
  }

  return (
    <li className="order-item">
      <img src={`${ref.image}`} alt={ref.name} />
      <div className="order-item-info">
        <p>{ref.name}</p>
        <input
          onChange={(e) => updateNumber(e)}
          type="number"
          min={1}
          value={number}
          name="counter"
          id="counter"
        ></input>
        <button onClick={() => removeFromOrder(props.index)}>&times;</button>
        <p>{totalPrice}$</p>
      </div>
    </li>
  )
}

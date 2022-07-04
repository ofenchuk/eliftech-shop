import { useContext } from 'react'
import { ShopContext } from '../App'

export default function HistoryItem(props) {
  const { shopState, setShop } = useContext(ShopContext)
  const product = shopState.order[props.product.id]
  

  const image = product ? product.image : ''
  return (
    <li className="history-item" key={props.index}>
      <img src={image} alt="" />
      Name: {props.product.mealName}
      Quantity: {props.product.quantity}
      Price: {props.product.price * props.product.quantity}
    </li>
  )
}

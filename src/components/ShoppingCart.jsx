
import OrderCart from './OrderCart'
import UserInfo from './UserInfo'

export default function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <UserInfo />
      <OrderCart />
    </div>
  )
}

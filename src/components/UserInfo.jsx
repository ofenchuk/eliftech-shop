import { child, get, getDatabase, ref, set } from 'firebase/database'
import React, { useContext } from 'react'
import { ShopContext } from '../App'
import base from '../firebase'

export default function UserInfo(props) {
  const { shopState, setShop } = useContext(ShopContext)
  let nameRef = React.createRef()
  let emailRef = React.createRef()
  let phoneRef = React.createRef()
  let addressRef = React.createRef()

  const sendOrder = async () => {
    const order = { ...shopState.order }
    const refState = shopState.order
    const length = Object.keys(order).length
    if (length === 0) {
      return alert('Your order is empty')
    }

    const completeOrder = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      orderList: Object.keys(order).map((key) => {
        const shopName = key.replace(/[0-9]/g, '')
        console.log(ref[key])
        return {
          mealName: refState[key].name,
          shopName: shopName,
          id: key,
          quantity: refState[key].quantity,
          price: refState[key].price * refState[key].quantity,
        }
      }),
    }

    const dbRef = ref(getDatabase())

    get(child(dbRef, `userOrders/${completeOrder.phone}`)).then((snapshot) => {
      const id = snapshot.val() ? snapshot.val().length : 1
      const newPostRef = child(
        ref(base),
        `userOrders/${completeOrder.phone}/${id}`
      )
      console.log(id)
      set(newPostRef, completeOrder)
    })

    return completeOrder
  }
  return (
    <form
      className="user-info"
      onSubmit={(e) => {
        e.preventDefault()
        sendOrder()
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        placeholder="Name"
        ref={nameRef}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        placeholder="Email"
        ref={emailRef}
        required
      />
      <label htmlFor="phone">Phone</label>
      <input
        name="phone"
        type="tel"
        pattern="^-?[0-9]\d*\.?\d*$"
        placeholder="Phone"
        ref={phoneRef}
        required
      />
      <label htmlFor="address">Address</label>
      <input
        name="address"
        type="text"
        placeholder="Address"
        ref={addressRef}
        required
      />
      <button type="submit">Click to order</button>
    </form>
  )
}

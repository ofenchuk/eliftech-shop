import { child, get, getDatabase, ref } from 'firebase/database'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { ShopContext } from '../App'
import base from '../firebase'
import HistoryItem from './HistoryItem'

export default function History() {
  const [dataState, setDataState] = React.useState({ history: {} })
  const { shopState, setShop } = useContext(ShopContext)

  const localStorageCart = JSON.parse(localStorage.getItem('order'))
  useEffect(() => {
    setShop({ order: localStorageCart })
  }, [])
  let phoneRef = React.createRef()

  const data = useRef(0)

  const showOrders = async () => {
    const dbRef = ref(getDatabase())
    await get(child(dbRef, `userOrders/${phoneRef.current.value}`)).then(
      (snapshot) => {
        const orders = snapshot.val()
        setDataState({ history: orders })
        data.current = orders
      }
    )
  }

  return (
    <div className="history">
      <form
        onSubmit={(e) => {
          e.preventDefault(), showOrders()
        }}
      >
        <label htmlFor="phone">Phone</label>
        <input type="tel" ref={phoneRef} id="phone" required />
        <button type="submit">Show orders</button>
      </form>
      <ul className="history-lists">
        {Object.keys(data.current).map((key) => (
          <ul className="history-list" key={key}>
            {Object.keys(data.current[key].orderList).map((key2) => (
              <HistoryItem
                product={data.current[key].orderList[key2]}
                index={key2}
                key={key2}
              />
            ))}
            Order: {key}
          </ul>
        ))}
      </ul>
    </div>
  )
}

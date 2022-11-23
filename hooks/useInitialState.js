import { useState } from "react"
import initialState from "@database/data"

const useInitialState = () => {

  const [state, setState] = useState(initialState)

  const addToCart = (payload, quantity) => {
    const existingCartItem = state.cart[payload.id]
    const qtyToAdd = quantity
    if (existingCartItem != undefined) {
      const quantity = existingCartItem.quantity + qtyToAdd
      setState({
        ...state,
        cart:{
          ...state.cart,
          [payload.id]: {
              ...existingCartItem,
              quantity,
            },
          }
      })
    } else {
      setState({
        ...state,
        cart:{
          ...state.cart,
          [payload.id]: {
            ...payload,
            quantity: qtyToAdd,
          },
        }
      })
    }
  }

  const removeFromCart = (payload) => {

    const existingCartItem = state.cart[payload.id]
  
    if (existingCartItem == undefined) {
        return state
    }

    const quantity = existingCartItem.quantity - 1
      if (quantity > 0) {
        setState({
          ...state,
          cart: { ...state.cart, [payload.id]: {
            ...existingCartItem,
            quantity,
            },
          }
        })
      } else {
        const newCart = state.cart
        delete newCart[payload.id]
        setState({
          ...state,
          cart: newCart
        })
      }
  }
  
  const getCartSubTotal = (sum, payload) => {
    sum += payload.price * payload.quantity
    return sum
  }
  const getCartCount = (sum, payload) => sum + payload.quantity
 
  const useCart = () => {
    const items = Object.values(state.cart)
    const count = items.reduce(getCartCount, 0)
    const subTotal = (Math.round(items.reduce(getCartSubTotal, 0)*100)/100)
  
    return {
      items,
      count,
      subTotal,
    }
  }

  return {
    addToCart,
    removeFromCart,
    state,
    useCart
  }
}

export default useInitialState
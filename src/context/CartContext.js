import React from 'react'

const CartContext = React.createContext({
  list: [],
  dark: false,
  addVideo: () => {},
  changeTheme: () => {},
})

export default CartContext

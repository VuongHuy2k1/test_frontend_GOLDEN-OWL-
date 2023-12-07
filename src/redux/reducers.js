const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.find(
        (product) => product.id === action.payload.id,
      )

      if (existingProduct) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        )
      } else {
        return [...state, { ...action.payload, quantity: 1 }]
      }

    case 'INCREASE_QUANTITY':
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      )
    case 'DECREASE_QUANTITY':
      const updatedCart = state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      )

      const filteredCart = updatedCart.filter((product) => product.quantity > 0)

      return filteredCart
    case 'REMOVE_PRODUCT':
      const updatedCartRemove = state.filter(
        (product) => product.id !== action.payload,
      )
      return updatedCartRemove
    default:
      return state
  }
}

export default cartReducer

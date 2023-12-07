export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  }
}

export const increaseQuantity = (productId) => {
  return {
    type: 'INCREASE_QUANTITY',
    payload: productId,
  }
}

export const decreaseQuantity = (productId) => {
  return {
    type: 'DECREASE_QUANTITY',
    payload: productId,
  }
}

export const removeProduct = (productId) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: productId,
  }
}

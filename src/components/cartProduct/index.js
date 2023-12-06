import classNames from 'classnames/bind'
import styles from './cartProduct.module.scss'
import { useSelector, useDispatch } from 'react-redux'

import { useEffect, useState } from 'react'
const cx = classNames.bind(styles)
const CartProductComponent = ({ data }) => {
  const myStyles = {
    backgroundColor: `${data.color}`,
  }
  const cart = useSelector((state) => state)
  const dispatch = useDispatch()
  const handleIncreaseQuantity = (productId) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: productId })
    localStorage.setItem('shoppingCart', JSON.stringify(cart))
  }
  const handleDecreaseQuantity = (productId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: productId })
    localStorage.setItem('shoppingCart', JSON.stringify(cart))
  }

  const handleRemoveProduct = (productId) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: productId })
    localStorage.setItem('shoppingCart', JSON.stringify(cart))
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('imager')} style={myStyles}>
        <img src={data?.image} alt=""></img>
      </div>
      <div className={cx('container')}>
        <div className={cx('name')}>{data.name}</div>
        <div className={cx('price')}> ${data.price}</div>
        <div className={cx('cart-btn')}>
          <div className={cx('cart-btn-num')}>
            <button
              className={cx('btn', 'gray')}
              onClick={handleDecreaseQuantity(data.id)}
            >
              <img src="minus.png" alt=""></img>
            </button>

            <p className={cx('num')}>{data.quantity}</p>
            <button
              className={cx('btn', 'gray')}
              onClick={handleIncreaseQuantity(data.id)}
            >
              <img src="/plus.png" alt=""></img>
            </button>
          </div>
          <div className={cx('cart-btn-dele')}>
            <button
              className={cx('btn', 'yellow')}
              onClick={handleRemoveProduct(data.id)}
            >
              <img src="/trash.png" alt=""></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProductComponent

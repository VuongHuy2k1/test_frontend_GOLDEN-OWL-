import classNames from 'classnames/bind'
import styles from './CartPage.module.scss'
import { useState, useEffect, useM } from 'react'
import { useSelector } from 'react-redux'
import CartProductComponent from '../../components/cartProduct'
const cx = classNames.bind(styles)

function CartPage() {
  const [cartData, setCartData] = useState([])
  const cart = useSelector((state) => state)

  useEffect(() => {
    setCartData(cart)
  }, [cart])
  const Card = cartData.map((item, index) => {
    return <CartProductComponent data={item} key={index} />
  })

  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <img src="/nike.png" alt=""></img>
      </div>
      <div className={cx('content')}>
        <p>Your cart</p>
      </div>
      <div className={cx('products')}>
        {cartData.length <= 0 ? (
          <div className={cx('noti')}>Your cart is empty</div>
        ) : (
          <>{Card}</>
        )}
      </div>
    </div>
  )
}

export default CartPage

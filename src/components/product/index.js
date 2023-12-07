import classNames from 'classnames/bind'
import styles from './product.module.scss'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/action'
const cx = classNames.bind(styles)
const ProductComponent = ({ data }) => {
  const myStyles = {
    backgroundColor: `${data.color}`,
  }
  const dispatch = useDispatch()
  const [addCart, setAddCart] = useState(true)

  const [cartData, setCartData] = useState([])
  const cart = useSelector((state) => state)

  useEffect(() => {
    setCartData(cart)
  }, [cart])

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === data.id) {
        setAddCart(false)
        break
      }
    }
  }, [cart])

  const clickBuy = () => {
    dispatch(
      addToCart({
        id: data.id,
        image: data.image,
        name: data.name,
        price: data.price,
        quantity: 1,
      }),
    )
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('imager')} style={myStyles}>
        <img src={data?.image} alt=""></img>
      </div>
      <div className={cx('name')}>{data.name}</div>
      <div className={cx('description')}>{data.description}</div>
      <div className={cx('price-container')}>
        <div className={cx('price')}> ${data.price}</div>
        {addCart ? (
          <button className={cx('btn', 'long')} onClick={clickBuy}>
            <p>ADD TO CARD</p>
          </button>
        ) : (
          <button className={cx('btn', 'round')}>
            <img src="/check.png" alt=""></img>
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductComponent

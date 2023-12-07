import classNames from 'classnames/bind'
import styles from './cartProduct.module.scss'
import { useDispatch } from 'react-redux'
import {
  removeProduct,
  decreaseQuantity,
  increaseQuantity,
} from '../../redux/action'
const cx = classNames.bind(styles)
const CartProductComponent = ({ data }) => {
  const myStyles = {
    backgroundColor: `${data.color}`,
  }
  const dispatch = useDispatch()
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
              onClick={() => dispatch(decreaseQuantity(data.id))}
            >
              <img src="minus.png" alt=""></img>
            </button>

            <p className={cx('num')}>{data.quantity}</p>
            <button
              className={cx('btn', 'gray')}
              onClick={() => dispatch(increaseQuantity(data.id))}
            >
              <img src="/plus.png" alt=""></img>
            </button>
          </div>
          <div className={cx('cart-btn-dele')}>
            <button
              className={cx('btn', 'yellow')}
              onClick={() => dispatch(removeProduct(data.id))}
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

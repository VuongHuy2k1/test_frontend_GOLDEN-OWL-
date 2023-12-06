import classNames from 'classnames/bind'
import styles from './ProductsPage.module.scss'
import Data from '../../data/shoes.json'
import ProductComponent from '../../components/product'
const cx = classNames.bind(styles)

function ProductsPage() {
  const shoesData = Data.shoes
  const Card = shoesData.map((item, index) => {
    return <ProductComponent data={item} key={index} />
  })
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <img src="/nike.png" alt=""></img>
      </div>
      <div className={cx('content')}>
        <p>Our Products</p>
      </div>
      <div className={cx('products')}>{Card}</div>
    </div>
  )
}

export default ProductsPage

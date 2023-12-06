import React from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import CartPage from './pages/CartPage'
import ProductsPage from './pages/Products'
const cx = classNames.bind(styles)

function App() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('products')}>
        <ProductsPage />
      </div>
      <div className={cx('cart')}>
        <CartPage />
      </div>
    </div>
  )
}

export default App

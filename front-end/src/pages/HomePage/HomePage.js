import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProductsContainer } from '../../containers';

import style from './HomePage.css';

import { getProducts } from '../../states/products/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(getProducts(1));
  }

  render() {
    const { products, pagination } =this.props;

    return (
      <div className={style.wrapper}>
        <ProductsContainer products={products} pagination={pagination} />
      </div>
    );
  }
}

const connectToRedux = connect(state => ({
  products: state.products.data,
  pagination: state.products.pagination
}));

export default connectToRedux(HomePage);

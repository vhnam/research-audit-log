import React, { Component } from 'react';

import productImage from '../../assets/img/product.png';

import { Card } from '../../components';

import style from './ProductPage.css';

import axios from '../../utils/axios';
import ProductContainer from '../../containers/ProductContainer/ProductContainer';

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
    };

    this.getProduct();
  }

  getProduct = () => {
    const { id } = this.props.match.params;

    axios
      .get(`http://localhost:3002/api/v1/products/${id}`)
      .then(response => {
        this.setState({
          product: response.data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { product } = this.state;

    return (
      <div className={style.wrapper}>
        <Card>
          <div className={style.container}>
            <div className={style.row}>
              <div className={style.column}>
                <img src={productImage} className={style.image} alt="Product" />
              </div>
              <div className={style.column}>
                {product ? (
                  <ProductContainer product={product} />
                ) : (
                  <div className={style.loader}>Loading</div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default ProductPage;

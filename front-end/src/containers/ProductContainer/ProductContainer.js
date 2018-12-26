import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Button, TextField } from '../../components';

import style from './ProductContainer.css';

import { addToOrder } from '../../states/order/actions';

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
    };
  }

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  addToCart = () => {
    const { product, order } = this.props;
    let credentials = {
      product: {
        id: product.id,
        price: product.price,
        quantity: this.state.quantity,
      },
    };

    if (order) {
      credentials.order = order;
    }

    this.props
      .dispatch(addToOrder(credentials))
      .then(() => {
        this.props.history.replace({
          pathname: '/',
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { product } = this.props;

    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>{product.name}</h1>
        <table className={style.table}>
          <colgroup>
            <col width="20%" />
            <col width="80%" />
          </colgroup>
          <tbody>
            <tr>
              <td className={style.text_semibold}>Adjective</td>
              <td>{product.adjective}</td>
            </tr>
            <tr>
              <td className={style.text_semibold}>Color</td>
              <td>{product.color}</td>
            </tr>
            <tr>
              <td className={style.text_semibold}>Department</td>
              <td>{product.department}</td>
            </tr>
            <tr>
              <td className={style.text_semibold}>Material</td>
              <td>{product.material}</td>
            </tr>
            <tr>
              <td className={style.text_semibold}>Product</td>
              <td>{product.product}</td>
            </tr>
            <tr>
              <td className={style.text_semibold}>Price</td>
              <td>${product.price}</td>
            </tr>
          </tbody>
        </table>
        <div className={style.footer}>
          <TextField
            label="Quantity"
            type="number"
            placeholder="Enter quantity"
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}
          />
          <Button
            type="button"
            styles="primary"
            size="block"
            onClick={this.addToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order.data,
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(ProductContainer);

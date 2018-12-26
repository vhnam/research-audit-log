import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import bindClassnames from 'classnames/bind';

import { Button, Card } from '../../components';

import style from './ProductsContainer.css';

import { getProducts } from '../../states/products/actions';

const cx = bindClassnames.bind(style);

class ProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      prevY: 0,
    };

    this.fetchData();
  }

  componentDidMount() {
    // Options
    let options = {
      root: null, // Page as root
      rootMargin: '0px',
      threshold: 1.0,
    };

    // Create an observer
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this), //callback
      options
    );

    //Observ the `loadingRef`
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;

    if (this.state.prevY > y) {
      this.fetchData();
    }

    this.setState({ prevY: y });
  }

  fetchData = () => {
    if (!this.props.pagination) {
      return;
    }

    const { current_page, last_page } = this.props.pagination;

    if (current_page <= last_page) {
      const page = parseInt(current_page) + 1;

      this.setState({ isLoading: true }, () => {
        this.props.dispatch(getProducts(page)).then(() => {
          this.setState({ isLoading: false });
        });
      });
    }
  };

  showDetails = id => {
    this.props.history.push(`/products/${id}`);
  };

  renderList = products => {
    if (products && products.length > 0) {
      return products.map(product => (
        <tr key={product.id}>
          <td className={classnames(style.text_right, style.text_ellipsis)}>
            {product.id}
          </td>
          <td className={style.text_left}>{product.name}</td>
          <td className={style.text_right}>{product.price}</td>
          <td className={style.text_left}>{product.department}</td>
          <td className={style.text_left}>{product.color}</td>
          <td className={style.text_left}>{product.adjective}</td>
          <td className={style.text_left}>{product.material}</td>
          <td className={style.text_left}>{product.product}</td>
          <td className={style.text_center}>
            <Button
              type="button"
              styles="primary"
              onClick={() => {
                this.showDetails(product.id);
              }}
            >
              Details
            </Button>
          </td>
        </tr>
      ));
    }

    return (
      <tr>
        <td colSpan="9" className={style.text_center}>
          No product
        </td>
      </tr>
    );
  };

  render() {
    const { products } = this.props;
    const { isLoading } = this.state;

    const loadingState = cx({
      visible: !isLoading,
      invisible: isLoading,
    });

    const dividerState = cx({
      visible: isLoading,
      invisible: !isLoading,
    });

    return (
      <Card>
        <table className={classnames(style.table, style.table_header)}>
          <colgroup>
            <col width="10%" />
            <col width="20%" />
            <col width="5%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th className={style.text_right}>No.</th>
              <th className={style.text_left}>Name</th>
              <th className={style.text_right}>Price</th>
              <th className={style.text_left}>Department</th>
              <th className={style.text_left}>Color</th>
              <th className={style.text_left}>Adjective</th>
              <th className={style.text_left}>Material</th>
              <th className={style.text_left}>Product</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
        </table>
        <div className={classnames(style.divider, loadingState)} />
        <div className={classnames(style.progress, dividerState)}>
          <div className={style.indeterminate} />
        </div>
        <div className={style.scrollable}>
          <table className={classnames(style.table, style.table_body)}>
            <colgroup>
              <col width="10%" />
              <col width="20%" />
              <col width="5%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="15%" />
            </colgroup>
            <tbody>{this.renderList(products)}</tbody>
          </table>
          <div ref={loadingRef => (this.loadingRef = loadingRef)} />
        </div>
      </Card>
    );
  }
}

export default compose(
  withRouter,
  connect(state => ({}))
)(ProductsContainer);

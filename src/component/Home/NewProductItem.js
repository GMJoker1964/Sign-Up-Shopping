import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actAddToCart, actBuyProduct } from '../../actions'

class HotProductItem extends Component {



    render() {
        let { product } = this.props
        return (
            <div className="item">
                {this.onListProduct(product)}

            </div>
        );
    }
    onAddTocart(product) {
        this.props.onAddToCart(product)
    }
    onBuy(product) {
        this.props.onBuy(product)
    }
    onListProduct(product) {
        return (
            <div className="glry-w3agile-grids agileits">
                <div className="new-tag"><h6>{product.sale}</h6></div>
                <Link to={`/detail-product?id=${product._id}`} ><img src={product.image} className="img-responsive" alt={product.title} /></Link>
                <div className="view-caption agileits-w3layouts">
                    <h4><Link to={`/detail-product?id=${product._id}`}>{product.title}</Link></h4>
                    <h5>{product.price}$</h5>
                    <button onClick={() => this.onAddTocart(product)} className="w3ls-cart" ><i className="fa fa-cart-plus" aria-hidden="true"></i> Thêm vào giỏ</button><br />
                    <Link to="/buy-product"><button onClick={() => this.onBuy(product)} className="w3ls-cart" ><i className="fa fa-cart-plus" aria-hidden="true"></i> Mua ngay</button></Link>
                </div>
            </div>
        )
    }
}



// const mapStateToProp = state => {
//     return {
//         // products: state.products.carts,

//     }
// }

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onBuy: (product) => {
            dispatch(actBuyProduct(product, 1))
        }
    }
}

export default connect(null, mapDispatchToProps)(HotProductItem);



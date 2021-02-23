import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductItem extends Component {

    render() {
        let { product } = this.props
        return (
            <div className="col-md-3 product-grids">
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
    onListProduct = (product) => {
        return (
            <div className="agile-products">
                <div className="new-tag"><h6>{product.sale}</h6></div>
                <Link to={`/detail-product?id=${product._id}`}><img src={product.image} className="img-responsive" alt={product.title} /></Link>
                <div className="agile-product-text">
                    <h5><Link to={`/detail-product?id=${product._id}`}>{product.title}</Link></h5>
                    <h6><del>{product.price_old}$</del>{product.price}$</h6>
                    <button onClick={() => this.onAddTocart(product)} className="w3ls-cart pw3ls-cart"><i className="fa fa-cart-plus"></i> Thêm vào giỏ</button>
                    <Link to="/buy-product"><button onClick={() => this.onBuy(product)} className="w3ls-cart pw3ls-buy" ><i className="fa fa-cart-plus" aria-hidden="true"></i> Mua ngay</button></Link>
                </div>
            </div>

        )
    }
}

export default (ProductItem);

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { findManyProduct } from '../../API'
import { actSearchProduct, actAddToCart,actBuyProduct } from '../../actions'
import { connect } from 'react-redux'


class SearchContent extends Component {
    componentDidMount() {
        let search = new URLSearchParams(window.location.search).get('search')
        findManyProduct('', search)
            .then(listProducts => {
                this.props.onSearch(listProducts)
            })
    }

    render() {
        let { products } = this.props
        return (
            <div className="container">
                Tìm kiếm sản phẩm
                <div className="row">
                    {this.onSearchProduct(products)}
                </div>
            </div>
        );
    }
    onSearchProduct = (products) => {
        let result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <div className="col-md-2 product-grids" key={index}>
                        <div className="agile-products">
                            <div className="new-tag"><h6>{product.sale}</h6></div>
                            <Link to={`/detail-product?id=${product._id}`}><img src={product.image} className="img-responsive" alt={product.title} /></Link>
                            <div className="agile-product-text">
                                <h5><Link to={`/detail-product?id=${product._id}`}>{product.title}</Link></h5>
                                <h6><del>{product.price_old}$</del>{product.price}$</h6>
                                <button onClick={() => this.onAddTocart(product)} className="w3ls-cart pw3ls-cart"><i className="fa fa-cart-plus"></i> Add to cart</button>
                                <Link to="/buy-product"><button onClick={() => this.onBuy(product)} className="w3ls-cart pw3ls-buy" ><i className="fa fa-cart-plus" aria-hidden="true"></i> Mua ngay</button></Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return result
    }
    onAddTocart(product) {
        this.props.onAddToCart(product)
    }
    onBuy(product) {
        this.props.onBuy(product)
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (products) => {
            dispatch(actSearchProduct(products))
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onBuy: (product) => {
            dispatch(actBuyProduct(product, 1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContent);


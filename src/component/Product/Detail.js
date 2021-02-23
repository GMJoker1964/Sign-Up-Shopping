import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actAddToCart, actDetailProduct,actBuyProduct } from '../../actions'
import { findOneProduct } from '../../API'
import { Link } from 'react-router-dom'


class Detail extends Component {

    componentDidMount() {

        let id = new URLSearchParams(window.location.search).get('id')
        if (!id) return
        findOneProduct(id)
            .then(detailProduct => {
                this.props.onDetailProduct(detailProduct)
                let $ = window.$
                $('.flexslider').flexslider({
                    animation: "slide",
                    controlNav: "thumbnails"
                });
            })
    }
    render() {
        let { product } = this.props
        return (
            <div className="single-page">
                {this.detailProduct(product)}
                <div className="single-page-icons social-icons">
                    <ul>
                        <li><h4>Share on</h4></li>
                        <li><a href="#/" className="fa fa-facebook icon facebook"> </a></li>
                        <li><a href="#/" className="fa fa-twitter icon twitter"> </a></li>
                        <li><a href="#/" className="fa fa-google-plus icon googleplus"> </a></li>
                        <li><a href="#/" className="fa fa-dribbble icon dribbble"> </a></li>
                        <li><a href="#/" className="fa fa-rss icon rss"> </a></li>
                    </ul>
                </div>
            </div>
        );
    }
  
    detailProduct(product) {
        return (
            <div className="single-page-row" id="detail-21">
                <ol className="breadcrumb breadcrumb1">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Single Page</li>
                </ol>
                <div className="col-md-6 single-top-left">
                    <div className="flexslider">
                        <ul className="slides">
                            <li data-thumb={product.image}>
                                <div className="thumb-image detail_images" style={{display:"flex", justifyContent:"center"}}>
                                    <img src={product.image} data-imagezoom="true" className="img-responsive" alt="" /> </div>
                            </li>
                            {
                                product.imgDes
                                ?   product.imgDes.map((link, i) => (
                                        <li data-thumb={link} key={i} >
                                            <div className="thumb-image"> <img src={link} data-imagezoom="true" className="img-responsive" alt="" /> </div>
                                        </li>
                                    ))
                                : ''
                            }
                       
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 single-top-right">
                    <h3 className="item_name"> {product.title} </h3>
                    <hr />
                    <div className="single-price">
                        <ul>
                            <li> {product.price}$ </li>
                            <li><del>{product.price_old}$</del></li>
                            <li><span className="w3off">{product.sale}</span></li>
                            <li><a href="#/"><i className="fa fa-gift" aria-hidden="true"></i> Coupon</a></li>
                        </ul>
                    </div>
                    <p className="single-price-text">{product.description} </p>
                    <p className="single-price-text">Kho: {product.inventory} </p>
                    <button onClick={() => this.onAddToCart(product)} className="w3ls-cart" ><i className="fa fa-cart-plus" aria-hidden="true"></i> Thêm giỏ hàng</button>&nbsp;
                    <Link to="/buy-product"><button onClick={() => this.onBuy(product)} className="w3ls-cart" ><i className="fa fa-shopping-cart" aria-hidden="true"></i> Mua ngay</button></Link>

                </div>

                <div className="clearfix"> </div>
            </div>

        )
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
    }
    onBuy(product) {
        this.props.onBuy(product)
    }
}

const mapStateToProp = state => {
    return {
        products: state.products.carts,
        product: state.products.product

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onDetailProduct: (product) => {
            console.log(product);
            dispatch(actDetailProduct(product))
        },
        onBuy: (product) => {
            dispatch(actBuyProduct(product, 1))
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Detail);

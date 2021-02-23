import React, { Component } from 'react';
import CartItem from './CartItem'
import CartResult from './CartResult'
import { connect } from 'react-redux'
import { actChangeQuantity, actDeleteProductInCart } from '../../actions'

class CartContent extends Component {
    // constructor(props){
    //     super(props)

    // }
    render() {
        let { cart } = this.props
        return (
            <section className="container">
                <div className="table-responsive">
                    <table className="table product-table table-bordered">
                        <thead>
                            <tr className="row">
                                <th className="col-md-3">Hình ảnh sản phẩm</th>
                                <th scope="col">Sản Phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Số Lượng</th>
                                <th scope="col">Tổng Cộng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showCartItem(cart)}
                            {this.showTotalAmount(cart)}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
    showCartItem = (cart) => {
        let { onChangeQuantityInCart, onDeleteProduct } = this.props
        let result = null
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onChangeQuantityInCart={onChangeQuantityInCart}
                        onDeleteProduct={onDeleteProduct}
                    />
                )
            })
        }
        return result
    }
    showTotalAmount(cart) {
        let result = null
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeQuantityInCart: (product, quantity) => {
            dispatch(actChangeQuantity(product, quantity))
        },
        onDeleteProduct: (product) => {
            dispatch(actDeleteProductInCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContent);


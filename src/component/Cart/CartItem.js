import React, { Component } from 'react';


class CartItem extends Component {

    render() {
        let { item } = this.props
        let quantity = (item && item.quantity) ? item.quantity : 0
        return (
            <tr className="row">
                <td>
                    <img className="img-responsive col-md-8" src={item.product.image} alt={item.title} />
                </td>
                <td >
                    <h5>
                        <strong> {item.product.title} </strong>
                    </h5>
                </td>
                <td> {item.product.price} $</td>
                <td className="center-on-small-only">
                    <div className="input-group ">
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-danger btn-number" onClick={() => this.changeQuantity(item.product, item.quantity - 1)} >
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                        </span>
                        <input type="text" className="form-control input-number" value={quantity} onChange={e => this.inputQuantityOnChange(item.product, e.target.value)} />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-success btn-number" onClick={() => this.changeQuantity(item.product, item.quantity + 1)} >
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </span>
                    </div>
                </td>
                <td> {this.showSubToTal(item.product.price, item.quantity)} $</td>
                <td>
                    <button type="button" onClick={() => { this.onDelete(item.product) }} className="btn btn-sm btn-primary ">x</button>
                </td>
            </tr>

        );
    }
    showSubToTal = (price, quantity) => {
        return price * quantity
    }
    changeQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.setState({
                quantity: quantity
            })
            this.props.onChangeQuantityInCart(product, quantity)
        }
    }
    inputQuantityOnChange(product, quantityString) {
        let quantity = parseInt(quantityString)
        if (quantity > 0) {
            this.changeQuantity(product, quantity)
        }
    }
    onDelete(product) {
        let { onDeleteProduct } = this.props
        onDeleteProduct(product)
    }
}
export default CartItem;

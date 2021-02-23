import React, { Component } from 'react';

class PurchaseItem extends Component {

    render() {
        let { product, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img className="img-responsive" src={product.image} alt="img"></img></td>
                <td>{product.sdt}</td>
                <td>{product.address}</td>
                <td>{product.city}</td>
                <td>{product.note}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}
export default PurchaseItem;

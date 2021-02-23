import React, { Component } from 'react';

class OderItem extends Component {

    render() {
        let { product, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.title}</td>
                <td> 
                    <div className="img-product">
                        <img className="img-responsive productAdd" src={product.image}  alt="img"></img>&nbsp;
                      
                    </div>
                </td>
                <td>{product.sdt}</td>
                <td>{product.address}</td>
                <td>{product.city}</td>
                <td>{product.note}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}
export default OderItem;

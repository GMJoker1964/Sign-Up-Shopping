import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { findManyProduct } from '../../API'

class ProductItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        findManyProduct().then(res => {
            console.log(res);
            this.setState({
                categories: res
            })
        })

    }

    render() {
        let { product, index } = this.props
        let { categories } = this.state

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product._id}</td>
                <td>
                    <div className="img-product">
                        <img className="img-responsive productAdd" src={product.image}  alt="img"></img>&nbsp;
                        {
                            product.imgDes.map((link, i) => (
                                <div  key={i}> <img className="img-responsive productAdd" src={link}  alt="img" />&nbsp; </div>
                            ))
                        }
                    </div>
                </td>
                <td>{product.title}</td>
                <td>{categories.title}</td>
                <td>{product.description}</td>
                <td>{product.sale}</td>
                <td>{product.inventory}</td>
                <td>{product.price_old}</td>
                <td>{product.price}</td>
                <td>
                    <Link to={`/product/${product._id}/edit`}> <button type="button" className="btn btn-success">Sửa</button></Link> &nbsp;
                    <button type="button" className="btn btn-danger"
                        onClick={() => this.onDelete(product._id)}>Xóa</button>
                </td>
            </tr>
        );
    }
    onDelete = (_id) => {
        if (confirm('Bạn chắc chắn muốn xóa')) { //eslint-disable-line
            this.props.onDelete(_id)
        }
    }
}
export default ProductItem;

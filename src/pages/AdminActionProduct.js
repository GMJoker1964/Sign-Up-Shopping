import React, { Component } from 'react';
import MainLayout from '../component/MainLayout'
import {Link } from 'react-router-dom'
import ActionProduct from '../component/Admin/ActionProduct'

class AdminActionProduct extends Component {

    render() {
        return (
            <MainLayout>
                <div className="navbar navbar-default">
                    <a className="navbar-brand" href="#/">ADMIN</a>
                    <ul className="nav navbar-nav">
                        <li>
                           <Link to="/admin">Quản lý sản phẩm</Link>
                        </li>
             
                        <li>
                            <a href="#/">Quản lý người mua hàng</a>
                        </li>
                    </ul>
                </div><br />
                <ActionProduct />
            </MainLayout>
        );
    }
}
export default AdminActionProduct;
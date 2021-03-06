import React, { Component } from 'react';
import MainLayout from '../component/MainLayout'
import {Link } from 'react-router-dom'
import PurchaseManager from '../component/Admin/PurchaseManager'

class AdminPurchaseMange extends Component {
    // constructor(props){
    //     super(props)

    // }
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
                            <Link to="/purchase-manage">Quản lý người mua hàng</Link>
                        </li>
                    </ul>
                </div><br />
                <PurchaseManager />
            </MainLayout>
        );
    }
}
export default AdminPurchaseMange;
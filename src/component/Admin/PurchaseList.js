import React, { Component } from 'react';

class PurchaseList extends Component {

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="panel-title">
                        <h3>Danh sách sản phẩm</h3>
                    </div>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã hàng</th>
                                <th>Họ và tên</th>
                                <th>ảnh sản phẩm</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                <th>Thành phố</th>
                                <th>Ghi chú</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}
export default PurchaseList;

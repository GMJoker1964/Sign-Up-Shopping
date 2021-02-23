import React, { Component } from 'react';

class ProductList extends Component {

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
                                <th >STT</th>
                                <th className="col-md-1">Mã SP</th>
                                <th className="col-md-2">Hình ảnh sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th className="col-md-1.5">Thể loại</th>
                                <th className="col-md-2">Mô tả sản phẩm</th>
                                <th>Sale</th>
                                <th>Số lượng kho</th>
                                <th>Giá cũ</th>
                                <th>Giá</th>
                                <th className="col-md-1.5">Hành động</th>
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
export default ProductList;

import React, { Component } from 'react';
import { createProduct, getCategories,uploadApi,findOneProduct } from '../../API'
import { withRouter } from 'react-router-dom'
import { FormFile } from 'react-bootstrap';


class ActionProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            fileImg: '',
            txtName: '',
            txtInventory: '',
            txtDes: '',
            txtPriceOld: '',
            txtPrice: '',
            chkbStatus: true,
            sltSale: 0,
            sltCategory: 0,
            categories: []
        }
    }
    componentDidMount() {
        getCategories()
            .then(data => {
                this.setState({
                    categories: data
                })
            })
        uploadApi()
            .then(data => {
                this.setState({
                    fileImg:data
                })
            })


        // let { match } = this.props
        // if (match) {
        //     let id = match.params.id
        //     findOneProduct(id)
        //         .then(res =>{
        //             let data= res.data
        //             this.setState({
        //                 id: data.id,
        //                 title: data.txtName,
        //                 description: data.txtDes,
        //                 sale: data.sltSale,
        //                 inventory: data.txtInventory,
        //                 price: data.txtPrice,
        //                 price_old: data.txtPriceOld,
        //                 categories: data.sltCategory,
        //                 image: data.file || ""
        //             })
        //         }) 
        // }
    }
    onChange = (e) => {
        e.persist()
        let target = e.target
        let name = target.name
        let value = target.value
        if (name === 'chkbStatus') {
            value = target.value === 'true' ? true : false
        }
        if (name === 'fileImg') {
            value = target.files[0]
        }
        this.setState({
            [name]: value
        })
    }
    onSelect = (sltSale, sltCategory) => {
        // sltSale = parseInt(sltSale)
        sltCategory = parseInt(sltCategory)
        this.setState({
            // sltSale: sltSale,
            sltCategory: sltCategory
        })
    }
    onSave = (e) => {
        e.preventDefault()
        let { txtName, txtInventory, txtPrice, txtPriceOld, sltSale, chkbStatus, sltCategory, txtDes } = this.state
        let {history} =this.props

        this.uploadFile().then(res => {
            let file = res.file
            return createProduct({
                title: txtName,
                description: txtDes,
                sale: sltSale,
                inventory: txtInventory,
                price: txtPrice,
                price_old: txtPriceOld,
                categories: sltCategory,
                image: file || ""
            })
        }).then(res => {
            console.log(res);
            // history.goBack()
        })
    }
    uploadFile= () =>{
        let { fileImg } =this.state
        const formData = new FormData()
        formData.append('files', fileImg)
        return uploadApi(formData)
    }
    render() {
        let { txtName, txtInventory, txtPrice, txtPriceOld, sltSale, sltCategory, txtDes } = this.state
        return (
            <div className="container m-0">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form action="http://localhost:3000/upload" method="POST" encType="multipart/form-data"  onSubmit={this.onSave} >
                        <div className="form-group">
                            <label>Hình ảnh sản phẩm</label>
                            <FormFile action="http://localhost:3000/upload" method="POST" encType="multipart/form-data"> <input type="file" className="form-control-file" name="fileImg" onChange={this.onChange} /></FormFile>
                        </div>
                        <div className="form-group">
                            <label>Tên sản phẩm</label>
                            <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Thể loại</label>
                            <div className="form-group">
                                <select className="form-control" name="sltCategory" value={sltCategory} onChange={this.onChange} onSelect={this.onSelect} >
                                    {this.state.categories.map((item, index) => (
                                        <option key={index} value={item._id}>{item.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Mô tả</label>
                            <textarea className="form-control" name="txtDes" value={txtDes} onChange={this.onChange} id="" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Số lượng kho</label>
                            <input type="number" className="form-control" name="txtInventory" value={txtInventory} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Sale</label>
                            <div className="form-group">
                                <select className="form-control" name="sltSale" value={sltSale} onChange={this.onChange} onSelect={this.onSelect} >
                                    <option value="New">New</option>
                                    <option value={10}>10%</option>
                                    <option value={20}>20%</option>
                                    <option value={30}>30%</option>
                                    <option value={40}>40%</option>
                                    <option value={50}>50%</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Giá cũ</label>
                            <input type="number" className="form-control" name="txtPriceOld" value={txtPriceOld} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Giá hiện tại</label>
                            <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                        </div>
                 
                        <button type="submit" className="btn btn-primary">Lưu lại</button>
                    </form>
                    <br />
                </div>
            </div>
        );
    }
}
export default withRouter(ActionProduct);

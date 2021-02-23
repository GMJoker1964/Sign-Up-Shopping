import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actChangeMessage } from '../../actions';
import {createProduct} from '../../API'
// import * as Message from '../../contants/Message'
class BuyProductContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtName: '',
            numberSdt: '',
            txtAddress: '',
            sltCity: '',
            txtNote: ''
        }
        this.formInfoPurchaseRef = React.createRef();
    }
    onChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
    }
    onValidateInfo(e) {
        console.log('validate')
        e.preventDefault()
    }
    onSelect = ( sltCity) => {
        sltCity = parseInt(sltCity)
        this.setState({
            sltCity: sltCity
        })
    }
    buyFinish =(e) =>{
        e.preventDefault()
        let formInfo = this.formInfoPurchaseRef.current
        let { txtName, numberSdt, txtAddress,sltCity, txtNote } = this.state
        let formInfoValid = formInfo.checkValidity()
        if(!formInfoValid) {
            alert('Vui lòng điền đầy đủ thông tin!')
            return
        }
        createProduct({
            name : txtName,
            sdt: numberSdt,
            address: txtAddress,
            city: sltCity,
            note: txtNote
        }).then(res =>{
            console.log(res)
        })

    }
    render() {
        let { txtName, numberSdt, txtAddress, sltCity, txtNote } = this.state
        let { cart, message } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Thông tin mua hàng</h4>
                        <br />
                        <form className="needs-validation" ref={this.formInfoPurchaseRef}>
                            <div className="row">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Họ và tên" name="txtName" value={txtName} onChange={this.onChange} required />
                                    {/* <div className="invalid-feedback"> Valid first name is required. </div> */}
                                </div>
                                <br />
                                <div className="mb-3">
                                    <input type="number" className="form-control" placeholder="Số điện thoại" name="numberSdt" value={numberSdt} onChange={this.onChange} />
                                    {/* <div className="invalid-feedback"> Valid last name is required. </div> */}
                                </div>
                                <br />
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Địa chỉ" name="txtAddress" value={txtAddress} onChange={this.onChange} />
                                    {/* <div className="invalid-feedback"> Please enter your shipping address. </div> */}
                                </div>
                                <br />
                                <div className=" mb-3">
                                    <select className="form-control" name="sltCity" value={sltCity} onChange={this.onChange} onSelect={this.onSelect}>
                                        <option value="">Thành phố</option>
                                        <option value="01">Thành phố Hà Nội</option>                                        
                                        <option value="02">Tỉnh Hà Giang</option>                                        
                                        <option value="04">Tỉnh Cao Bằng</option>
                                        <option value="06">Tỉnh Bắc Kạn</option>
                                        <option value="08">Tỉnh Tuyên Quang</option>
                                        <option value="10">Tỉnh Lào Cai</option>
                                        <option value="11">Tỉnh Điện Biên</option>
                                        <option value="12">Tỉnh Lai Châu</option>
                                        <option value="14">Tỉnh Sơn La</option>
                                        <option value="15">Tỉnh Yên Bái</option>
                                        <option value="17">Tỉnh Hoà Bình</option>
                                        <option value="19">Tỉnh Thái Nguyên</option>
                                        <option value="20">Tỉnh Lạng Sơn</option>
                                        <option value="22">Tỉnh Quảng Ninh</option>
                                        <option value="24">Tỉnh Bắc Giang</option>
                                        <option value="25">Tỉnh Phú Thọ</option>
                                        <option value="26">Tỉnh Vĩnh Phúc</option>
                                        <option value="27">Tỉnh Bắc Ninh</option>
                                        <option value="30">Tỉnh Hải Dương</option>
                                        <option value="31">Thành phố Hải Phòng</option>
                                        <option value="33">Tỉnh Hưng Yên</option>
                                        <option value="34">Tỉnh Thái Bình</option>
                                        <option value="35">Tỉnh Hà Nam</option>
                                        <option value="36">Tỉnh Nam Định</option>
                                        <option value="37">Tỉnh Ninh Bình</option>
                                        <option value="38">Tỉnh Thanh Hóa</option>
                                        <option value="40">Tỉnh Nghệ An</option>
                                        <option value="42">Tỉnh Hà Tĩnh</option>
                                        <option value="44">Tỉnh Quảng Bình</option>
                                        <option value="45">Tỉnh Quảng Trị</option>
                                        <option value="46">Tỉnh Thừa Thiên Huế</option>
                                        <option value="48">Thành phố Đà Nẵng</option>
                                        <option value="49">Tỉnh Quảng Nam</option>
                                        <option value="51">Tỉnh Quảng Ngãi</option>
                                        <option value="52">Tỉnh Bình Định</option>
                                        <option value="54">Tỉnh Phú Yên</option>
                                        <option value="56">Tỉnh Khánh Hòa</option>
                                        <option value="58">Tỉnh Ninh Thuận</option>
                                        <option value="60">Tỉnh Bình Thuận</option>
                                        <option value="62">Tỉnh Kon Tum</option>
                                        <option value="64">Tỉnh Gia Lai</option>
                                        <option value="66">Tỉnh Đắk Lắk</option>
                                        <option value="67">Tỉnh Đắk Nông</option>
                                        <option value="68">Tỉnh Lâm Đồng</option>
                                        <option value="70">Tỉnh Bình Phước</option>
                                        <option value="72">Tỉnh Tây Ninh</option>
                                        <option value="74">Tỉnh Bình Dương</option>
                                        <option value="75">Tỉnh Đồng Nai</option>
                                        <option value="77">Tỉnh Bà Rịa - Vũng Tàu</option>
                                        <option value="79">Thành phố Hồ Chí Minh</option>
                                        <option value="80">Tỉnh Long An</option>
                                        <option value="82">Tỉnh Tiền Giang</option>
                                        <option value="83">Tỉnh Bến Tre</option>
                                        <option value="84">Tỉnh Trà Vinh</option>
                                        <option value="86">Tỉnh Vĩnh Long</option>
                                        <option value="87">Tỉnh Đồng Tháp</option>
                                        <option value="89">Tỉnh An Giang</option>
                                        <option value="91">Tỉnh Kiên Giang</option>
                                        <option value="92">Thành phố Cần Thơ</option>
                                        <option value="93">Tỉnh Hậu Giang</option>
                                        <option value="94">Tỉnh Sóc Trăng</option>
                                        <option value="95">Tỉnh Bạc Liêu</option>                                                                    
                                        <option value="96">Tỉnh Cà Mau</option>                               
                                    </select>
                                    {/* <div className="invalid-feedback"> Please select a valid country. </div> */}
                                </div>
                                <br />
                              
                                <div className="mb-3">
                                    <textarea className="form-control" name="txtNote" rows="3" value={txtNote} onChange={this.onChange} placeholder="Ghi chú"></textarea>
                                </div>
                                <br />
                            </div>
                        </form>
                    </div>
                    <form className="col-md-4 order-md-2 mb-4" onSubmit={(e) => this.buyFinish(e)} >
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Đơn hàng</span>&nbsp;
                            <span className="label label-warning badge-pill"> {this.showToTalQuantity(cart)}</span>
                            <hr />
                        </h4>
                        <ul className="list-group mb-3 sticky-top">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                {this.showBuyProduct(cart)}
                            </li>


                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tổng tiền (USD)</span>&nbsp;
                                <strong>{this.showTotalAmount(cart)}$</strong>
                            </li>
                        </ul>
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Mua ngay</button>
                        <br />
                        <h2>
                            <span className="label label-warning">{message}</span>
                        </h2>
                        <br/><br/><br/>
                    </form>
                </div>
            </div>
        );
    }

    showBuyProduct = (cart) => {
        let result = null
        if (cart.length > 0) {
            result = cart.map((item, index) => {

                return (
                    <div className="row" key={index}>
                        <div className="col-md-4">
                            <img src={item.product.image} alt={item.product.title} className="img-responsive"></img>
                        </div>
                        <div className="col-md-5">
                            <h6 className="my-0">{item.product.title}</h6><br />
                            <h6 className="my-0">x {item.quantity}</h6>
                        </div>
                        <span className="text-muted col-md-2">{this.showSubToTal(item.product.price, item.quantity)}$</span>
                    </div>
                )
            })
        }
        return result
    }
    showSubToTal = (price, quantity) => {
        return price * quantity
    }
    showTotalAmount(cart) {
        let total = 0
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity
            }
        }
        return total
    }
    showToTalQuantity = (cart) => {
        let total = 0
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].quantity
            }
        }
        return total
    }
}



const mapStateToProps = state => {
    return {
        cart: state.cart,
        message: state.message
    }
}

const mapDispatchToProps =(dispatch, props) =>{
    return{
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BuyProductContent);



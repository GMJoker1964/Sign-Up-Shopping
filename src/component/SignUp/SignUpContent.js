
import React, {Component, useState} from 'react';
import { SignUpUser } from '../../API';
import MyModal from '../Modal'
// Bước 1: tạo cái formError 
export function FormError(props) { 
    
    // cách 1:
    // Props gom 2 cai:
    // 1. isHidden: la khi nao se hien thi message loi
    // 2. errorMessage: noi dung loi hien thi la gi`

    // cách 2:
    // props chi co errorMessage thoi

    if (!props.errorMessage) { return null;} // khi errorMessage = '' thi return null (khong co loi) đung ko a

    return ( <div className="error__message">{props.errorMessage}</div>) 
}



class SignUpContent extends Component {
    constructor(props) {
        super(props);

        this.state = { // gio thi ko can phai firstnam: {} ma chi can firstnameError
       
            firstnameErrorMessage: '',
            lastnameErrorMessage: '',
            emailErrorMessage: '',
            passwordErrorMessage: '',
            confirmPasswordErrorMessage: '', // tất cả chô xnafy mà bằng rỗng thì nghĩa là ko có lỗi, => nghĩa là validdate = true 
        }
    }

    
    

    handleSubmit = async (event) => { // Buoc 2: Check cac input khi submit
        event.preventDefault();
        const {
            firstnameErrorMessage,
            lastnameErrorMessage,
            emailErrorMessage,
            passwordErrorMessage,
            confirmPasswordErrorMessage
        } = this.state
        const form = event.target;// anh goi no ntn co dc khong
        // lay du lieu email, last name, first nam, password, confirm password
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.comfirmPassword.value;
        // 1. check cac dieu kien cua luc dang ky
        // 1.1 password trung voi confirm password

        if(confirmPassword !== password) this.setState({ confirmPasswordErrorMessage: 'Not correct'})
        if(confirmPassword === '') this.setState({ confirmPasswordErrorMessage: 'Confirm password must not be empty'})
        if(confirmPassword === password && confirmPassword) this.setState({confirmPasswordErrorMessage: ''})
       
        // 1.2 cac o phai co du lieu
        this.validateInput('firstname', firstname);
        this.validateInput('lastname', lastname);
        this.validateInput('email', email);
        this.validateInput('password',password);


        // 2. neu cac dieu kien du thi chay gui request len sever
        // if (!firstnameErrorMessage &&
        //     !lastnameErrorMessage &&
        //     !emailErrorMessage &&
        //     !passwordErrorMessage &&
        //     !confirmPasswordErrorMessage) { 
        //     // ban api tao use
            const dataRequest = {
                email: email,
                password: password,
                fullname: firstname + ' ' + lastname
            }

            try {
                await SignUpUser(dataRequest)
                this.show()
            } catch (error) {
                alert(error);
            }    
            
        
    }

    validateInput = (name, checkingText) => { // cái này đã bao trọn đoạn check ơr trên rồi. Chỉ cần 1 ddieeuef kiện nhỏ thôi.
       
        let regexpName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/; // regex name nay chua dung lam
        let regexpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regexpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 
        
        // regex password nay yeu cau 8 ky tu va co ky tu dac biet 1 kytu viet hoa nwa thi phai oh dung the
        // (?=.*\d) : có số  0 -> 9
        // (?=.*[a-z]) : có ký tự thường a -> z
        // (?=.*[A-Z]) : có ký tự Hoa A -> Z
        // (?=.*[a-zA-Z]) : giông 2 cái trên 
        // {8,} : có 8 ký tự trở lên
     
        if(name === 'firstname'){
            const checkingResult = regexpName.exec(checkingText); // check first name
           
            if (checkingResult !== null) {
                this.setState({ firstnameErrorMessage: ''})
            } else {
                this.setState({firstnameErrorMessage: 'First name must not be empty'})
            }
        }
       
         if(name === 'lastname'){
            const checkingResult = regexpName.exec(checkingText);
            if (checkingResult !== null) {
                this.setState({ lastnameErrorMessage: '' })
            } else {  
                this.setState({ lastnameErrorMessage: 'Last name must not be empty'})
            }
         }


         if(name === 'email'){
             const checkingResult = regexpEmail.exec(checkingText);
             if (checkingResult !== null) {
                 this.setState({emailErrorMessage: ''})
            } else {
                this.setState({ emailErrorMessage: 'Email must not be empty' })
            }
         }
         if(name === 'password'){
            const checkingResult = regexpPassword.exec(checkingText)
            if (checkingResult !== null) {
                this.setState({ passwordErrorMessage: ''})
            } else if (checkingText.length === 0){ 
                this.setState({ passwordErrorMessage:'Password must not be empty' })
            } else if(checkingText.length < 8){ // oek rồi 
                this.setState({ passwordErrorMessage:'Password must contain more than 8 letters' }) 
            } else {
                this.setState({ passwordErrorMessage:'Password must contain a letter, a number and an uppercase letter' })
            }
         }
    }


    show() {
        // this.modalRef.current.show('hello')
        console.log(window.modalShow())
    }
    
    render() {
        return (
            <div className="login-page">
                <MyModal />
                <div className="container"> 
                    <h3 className="w3ls-title w3ls-title1">Create your account</h3>  
                        <form 
                            action="#" 
                            method="post" 
                            className="login-body" 
                            onSubmit={(event) => this.handleSubmit(event)}
                        >
                            <input 
                                name="firstname"
                                type="text" 
                                className="user"
                                placeholder="First Name"/> 
                            
                            {/* ------------------------------------------ Buoc 1: Xep cac o Form Error nay duoi Input   */}
                            <FormError errorMessage={this.state.firstnameErrorMessage} /> 
                            <input 
                                name="lastname" 
                                type="text" 
                                className="user"
                                placeholder="Last Name"/>
                            <FormError errorMessage={this.state.lastnameErrorMessage} />
                            <input 
                                name="email" 
                                type="text" 
                                className="user" 
                                placeholder="Enter your email"
                                />
                            <FormError errorMessage={this.state.emailErrorMessage}/>    
                            <input 
                                name="password" 
                                type="password" 
                                placeholder="Password" />
                            <FormError errorMessage={this.state.passwordErrorMessage}/>    
                            <input 
                                name="comfirmPassword"  
                                type="password" 
                                placeholder="Comfirm Password"
                            />
                            <FormError errorMessage={this.state.confirmPasswordErrorMessage}/>
                            {/* <div>Register Completed !!</div> */}
                            <input
                                type="submit" 
                                value="Sign Up">
                            </input>
                        </form>

                </div>
            </div>
        );
    }
}

export default SignUpContent;

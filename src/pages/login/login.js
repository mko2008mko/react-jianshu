import React, { Component } from 'react';
import "./style.less";
import { connect } from 'react-redux';
import { login } from "./store/login.redux";
import { Redirect } from "react-router-dom";




class Login extends Component {

    constructor(props) {
        super();
        this.state = {
            act: '',
            pwd: ''
        }
    }

    handleAccuntChange = (e) => {
        const value = e.target.value;
        this.setState({
            act: value
        })
    }

    handlePwdChange = (e) => {
        const value = e.target.value;
        this.setState({
            pwd: value
        })
    }

    loginClick = () => {
        this.props.login(this.state.act, this.state.pwd)
    }



    render() {
        return this.props.isLogin  ? <Redirect to={this.props.redirectTo}></Redirect>
            :
            (
                <div className="login-wrapper">
                    <div className="login-box">
                        <input placeholder='账号' value={this.state.act} onChange={this.handleAccuntChange} />
                        <input placeholder='密码' value={this.state.pwd} onChange={this.handlePwdChange} type="password" />
                        <div onClick={this.loginClick} className="login-btn">登陆</div>
                    </div>
                </div>
            );
    }
}

const mapStateToProp = (state) => {
    return {
        isLogin: state.getIn(['loginReducer', 'isLogin']),
        redirectTo:state.getIn(['loginReducer', 'redirectTo'])
    }
}

const mapDispathToProps = {
    login
}

export default connect(mapStateToProp, mapDispathToProps)(Login);

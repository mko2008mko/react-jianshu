import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect,withRouter } from "react-router-dom";
import { updateRedirect } from "../login/store/login.redux";

@connect(
  state => ({
    isLogin: state.getIn(['loginReducer', 'isLogin'])
  }),
  {updateRedirect}
)
@withRouter
class Writer extends Component {

  componentDidMount(){
   
    if(!this.props.isLogin){
      const pathname = this.props.location.pathname;
      this.props.updateRedirect(pathname)
    }
  }

  render() {
    // console.log(this.props);
    return this.props.isLogin ?
      (
      <div >
        <h1>写文章的页面</h1>
      </div>
      )
      :
      <Redirect to="/login"></Redirect>
      ;
  }
}

export default Writer;

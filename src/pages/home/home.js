import React, { Component } from 'react';
import Topic from "./components/topic";
import List from "./components/list";
import Recommend from "./components/recommend";
import Writer from "./components/writer";
import AppDownload from "./components/app-download";
import { connect } from "react-redux"
import { getHomeDate, backTopIsShow } from "./store/home.redux"

import "./style.less"

@connect(
    state => ({
        isShow: state.getIn(['homeReducer', 'isShow'])
    }),
    { getHomeDate, backTopIsShow }
)
class Home extends Component {

    componentDidMount() {
        this.props.getHomeDate();
        window.addEventListener('scroll', this.handleBackTopIsShow)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleBackTopIsShow);
    }
    
    handleBackTopIsShow =()=>{
        const backTopIsShow = this.props.backTopIsShow;
        document.documentElement.scrollTop > 100
        ? backTopIsShow(true)
        : backTopIsShow(false)
    }

    handleScroll = () => {
        window.scroll(0, 0);
    }

    render() {
        return (
            <div className="home-wrapper">
                <div className="home-left">
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4581/8cfb95afa4ac98683ce1b9ab0f835f425e6a7df5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt="s" />
                    <Topic />
                    <List />
                </div>
                <div className="home-right">
                    <Recommend />
                    <AppDownload/>
                    <Writer />
                </div>
                {this.props.isShow ? <div
                    className="back-top"
                    onClick={this.handleScroll}
                >回到顶部</div>
                    :
                    null}

            </div>
        );
    }
}

export default Home;

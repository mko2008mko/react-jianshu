import React, { Component } from 'react';
import { connect } from "react-redux";
import { getRWriterData } from "../store/rwiter.redux";
import { updateRedirect } from "../../login/store/login.redux"
import { withRouter } from "react-router-dom"

@connect(
    state => ({
        list: state.getIn(['rwriterReducer', 'rwriterList']),
        page: state.getIn(['rwriterReducer', 'page']),
        isLogin: state.getIn(['loginReducer', 'isLogin'])
    }),
    { getRWriterData,updateRedirect }
)
@withRouter
class RecommendWriterList extends Component {

    componentDidMount() {
        this.props.getRWriterData(this.props.page);
    }

    lodMore = () => {
        this.props.getRWriterData(this.props.page);
    }

    handleFallow = () => {
        if(!this.props.isLogin){
            const pathname = this.props.location.pathname;
            this.props.updateRedirect(pathname);
            this.props.history.push('/login');
          }
    }



    render() {
        const { list } = this.props;
        // console.log(list);
        return (
            <div>
                <div className="rw-grid clear">
                    {list.size ? list.map((item, index) => (
                        <GridItem item={item} key={index} follow={this.handleFallow} />
                    ))
                        :
                        null}
                </div>
                <RWLoadMore onClick={this.lodMore} />
            </div>
        )

    }
}

export default RecommendWriterList;

const RWLoadMore = (props) => {

    return (
        <div className="rw-load-more-btn" onClick={props.onClick}>
            加载更多
        </div>
    );
}

const GridItem = (props) => {

    const item = props.item;
    const news = item.get('new');

    return (

        <div className="rw-grid-item">
            <div className="item-wrapper">
                <img alt="" src={item.get('imgUrl')} />
                <h4>宇文欢</h4>
                <p className="item-desc">{item.get('desc')}</p>
                <div className="item-guanzhu" onClick={props.follow}>+关注</div>
                <hr />
                <span>最近更新</span>
                <div className="recent-update">
                    {news.size ? news.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                        :
                        null
                    }

                    {/* <p>一次被骗的经理</p>
                        <p>丝绸之路密码与Tina上的神秘经理啊啊啊</p> */}
                </div>
            </div>
        </div>

    );
}

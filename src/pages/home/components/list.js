import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMoreList } from "../store/home.redux";
import { Link } from "react-router-dom";


@connect(
    state => ({
        articleList: state.getIn(['homeReducer', 'articleList']),
        page: state.getIn(['homeReducer', 'page'])
    }),
    { getMoreList }
)
class List extends Component {

    loadMoreClick = () => {
        const page = this.props.page;
        this.props.getMoreList(page);
    }

    render() {
        const { articleList } = this.props;
        return (
            <div>
                {articleList.map((item,index) =>
                    (
                        
                        <div className="list-item" key={index}>
                        <Link to={`/detail/${item.get('id')}`}>
                            <img src={item.get('imgUrl')} alt="" />
                            <div className="item-info">
                                <h3>{item.get('title')}</h3>
                                <p>{item.get('desc')}</p>
                            </div>
                            </Link>
                        </div>
                       
                    ))}
                <div className="load-more" onClick={this.loadMoreClick}>更多文章</div>
            </div>
        );
    }
}

export default List;

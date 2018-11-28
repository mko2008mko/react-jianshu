import React, { Component } from 'react';
import "./style.less";
import { connect } from 'react-redux';
import { getDetailData } from "./store/detail.redux";
import { withRouter } from "react-router-dom";



class Detail extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log("111")
        this.props.getDetailData(id);
    }

    render() {
        return (
            <div className="detail-wrapper">
                <div className="detail-header">{this.props.title}</div>
                <div
                    className="detail-content"
                    dangerouslySetInnerHTML={{ __html: this.props.content }}
                />
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        title: state.getIn(['detailReducer', 'title']),
        content: state.getIn(['detailReducer', 'content'])
    }
}

const mapDispathToProps = {
    getDetailData
}

export default connect(mapStateToProp, mapDispathToProps)(withRouter(Detail));

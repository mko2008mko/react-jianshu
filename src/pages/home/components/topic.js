import React, { Component } from 'react';
import { connect } from "react-redux";

@connect(
    state => ({
        topicList: state.getIn(['homeReducer', 'topicList'])
    }),
    // null
)
class Topic extends Component {
    render() {
        const { topicList } = this.props;
        // console.log(topicList);
        return (
            <div className="topicwrapper">

                {topicList.map(item => (
                    <div className="topic-item" key={item.get('id')}>
                        <img className="topic-pic" src={item.get('imgUrl')} alt="img" />
                        <span>{item.get('title')}</span>
                    </div>
                ))}

            </div>
        );
    }
}

export default Topic;

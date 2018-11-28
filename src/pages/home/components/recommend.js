import React, { Component } from 'react';
import { connect } from "react-redux"

@connect(
    state => ({
        list: state.getIn(['homeReducer', 'recommendList'])
    })
)
class Recommend extends Component {
    render() {
        const { list } = this.props;
        return (
            <div className="recommend-wrapper">
                {
                    list.map(item => (
                        <img key={item.get('id')} src={item.get('imgUrl')} alt="" /> 
                ))}
            </div>
        );
    }
}

export default Recommend;

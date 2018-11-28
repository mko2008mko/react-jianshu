import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";



class Writer extends Component {
    render() {

        const { recommendWriter } = this.props;
        // console.log(recommendWriter)

        return (
            <div className="write-wrapper">
                <div className="r-write-title clear">
                    <p>推荐作者</p>
                    <span>换一批</span>
                </div>
                <ul>

                    {recommendWriter.size ? recommendWriter.map(item => (
                        <li key={item.get('id')}>
                            <img src={item.get('imgUrl')} alt="" />
                            <div>
                                <h4>{item.get('name')}</h4>
                                <p>{item.get('desc')}</p>
                            </div>
                            <span>+关注</span>
                        </li>
                    ))
                        : null
                    }

                </ul>
                <Link to={'/rwriter'}>
                    <div className="r-w-findall">
                        查看全部 >
                </div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        recommendWriter: state.getIn(['homeReducer', 'recommendWriter'])
    }
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Writer);

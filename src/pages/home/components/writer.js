import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changePage } from "../store/home.redux"
import RotateChange from "../../../components/rotatechange"



class Writer extends Component {

    handleChangePage = () => {
      
        this.props.changePage();
    }

    render() {

        const { recommendWriter, rwPage } = this.props;
        // console.log(recommendWriter)
        const rwList = recommendWriter.toJS();
        const pageList = [];
        // console.log(rwList);
        if (rwList.length) {
            for (let i = (rwPage - 1) * 5; i < rwPage * 5; i++) {
                pageList.push(
                    <li key={rwList[i].id}>
                        <img src={rwList[i].imgUrl} alt="" />
                        <div>
                            <h4>{rwList[i].name}</h4>
                            <p>{rwList[i].desc}</p>
                        </div>
                        <span>+关注</span>
                    </li>
                )
            }
        }


        return (
            <div className="write-wrapper">
                <div className="r-write-title clear">
                    <p>推荐作者</p>
                    <RotateChange handleChangePage={this.handleChangePage}/>

                </div>
                <ul>

                    {/* {recommendWriter.size ? recommendWriter.map(item => (
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
                    } */}
                    {pageList}

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
        recommendWriter: state.getIn(['homeReducer', 'recommendWriter']),
        rwPage: state.getIn(['homeReducer', 'rwPage']),
        rwTotalPage: state.getIn(['homeReducer', 'rwTotalPage'])
    }
}

const mapDispatchToProps = {
    changePage
}


export default connect(mapStateToProps, mapDispatchToProps)(Writer);

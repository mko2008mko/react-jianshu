import React, { Component } from 'react';

import RecommendWriterList from "./components/list";
import "./style.less";



class RecommendWriter extends Component {

   

    render() {
    
        return (
            <div className="rw-wrapper">
                <div className="rw-top-ad">
                    <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.jianshu.com/p/6df6dc693ab4">如何成为签约作者</a>
                </div>
                <RecommendWriterList/>
            </div>
        )

    }
}

export default RecommendWriter;

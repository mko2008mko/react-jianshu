import React from "react";

import "./style.less";

class RotateChange extends React.Component {

    handleClick=(spin)=>{
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        if (originAngle) {
            originAngle = parseInt(originAngle, 10);
        } else {
            originAngle = 0;
        }
        spin.style.transform = `rotate(${originAngle + 360}deg)`;
        this.props.handleChangePage();
    }

    render() {
        return (

            <span
                onClick={this.handleClick.bind(this,this.spinIcon)}
                style={{ marginLeft: 50 }}
            >
                <i
                    className="iconfont spin"
                    ref={(icon) => { this.spinIcon = icon }}
                >
                    &#59473;
                        </i>
                换一批
                    </span>

        );
    }
}

export default RotateChange;
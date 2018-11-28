import React from 'react';



class AppDownload extends React.PureComponent {

    constructor(props) {
        super();
        this.state = {
            isShow: false
        }
    }

    mouseInChange = () => {
        this.setState({ isShow: true })
    }

    mouseOutChange = () => {
        this.setState({ isShow: false })
    }

    render() {
        return (
            <div>
                {
                    this.state.isShow ? <div className="ad-pop-img">
                        <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
                    </div>
                        :
                        null}
                <div
                    className="ad-wrapper"
                    onMouseEnter={this.mouseInChange}
                    onMouseLeave={this.mouseOutChange}
                >
                    <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
                    <div>
                        <h4>下载简书手机App</h4>
                        <p>随时随地发现和创作内容</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppDownload;

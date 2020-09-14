import React from 'react';
import Dialog from '../Dialog';
import TextWrap from '../TextWrap';
import './index.scss'

class MyDemo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            str: '我的弹窗',
            textList: [
                {
                    id: 0,
                    text: '张三'
                },
                {
                    id: 1,
                    text: '李四'
                },
                {
                    id: 2,
                    text: '王五'
                },
                {
                    id: 3,
                    text: '啥课沙发和巴哈杜是你的减肥微积分购房人报告附件二个人'
                },
                {
                    id: 4,
                    text: '王五'
                },
                {
                    id: 5,
                    text: '啥课沙发和巴哈杜是你的减肥微积分购房人报告附件二个人'
                },
            ]
        }
        this.toggleDialog = this.toggleDialog.bind(this)
    }
    toggleDialog (status) {
        this.props.toggleDialog(status)
    }
    render() {
        return (
            <Dialog
            show={this.props.show}
            animateType="minx"
            toggleDialog={this.toggleDialog}
            // atBottom={true}
            >
                <div className="my-demo">
                    <div className="my-demo-title">
                        {this.state.str}    
                    </div>
                    <div className="my-demo-main">
                        <TextWrap textList={this.state.textList}/>
                    </div>
                </div>
            </Dialog>
        )
    }
}
export default MyDemo
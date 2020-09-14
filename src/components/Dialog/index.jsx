import React, { useEffect, useState } from 'react';
import './index.scss'

const Dialog = (props) => {
    const {children, show, animateType, toggleDialog, atBottom = false} = props;
    const [show_, setShow_] = useState(false);
    const [randomIndex, setRandomIndex] = useState(0);
    useEffect(() => {
        setRandomIndex(Math.floor(Math.random() * 4))
        console.log('show')
        setTimeout(() => {
            // 增加延时，保证关闭弹窗动画的展示，目前首次展示会比较慢，待解决；
            setShow_(show)
        }, 300)
        // return () => {
        //     setShow_(false)
        // }
    }, [show])
    /**
     * animateTypeList： 动画类型 
     *  fade: 淡入淡出
     *  move: 上下滑动
     *  zoom: 缩放
     *  rotate: 旋转
     *  minx: 随机动画
     */
    const animateTypeList = ['fade', 'move', 'zoom', 'rotate'];
    function animateClass (show, type = 'fade') {
        if (type === 'minx') {
            return show ? `${animateTypeList[randomIndex]}-in` : `${animateTypeList[randomIndex]}-out`
        }
        return show ? `${type}-in` : `${type}-out`
    }
    return (
        <div>
            {
                show_ &&
                (
                    <div className={`dialog ${show ? 'fade-in' : 'fade-out'}`}>
                        <div className={`dialog-mask ${show ? 'fade-in' : 'fade-out'}`}></div>
                        <div
                        className={`dialog-main ${atBottom && 'at-bottom'}`}
                        onClick={toggleDialog.bind(this, false)}
                        >
                            <div
                            className={`dialog-main-content ${animateClass(show, animateType)}`}
                            onClick={(e) => e.stopPropagation()}>{children}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Dialog
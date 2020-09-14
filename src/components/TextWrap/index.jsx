import React from 'react';
import './index.scss'

function textWrap (props) {
    const {textList} = props
    return (
        <div className="text-wrap">
            {
                textList.map(item => {
                    return (
                    <div className="text-val" key={item.id}>{item.text}</div>
                    )
                })
            }
        </div>
    )
}
export default textWrap
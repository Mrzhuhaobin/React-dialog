import React, { useRef } from 'react'

function RefUse () {
    const inputEI = useRef(null);
    return (
        <div>
            <input type="text" ref={inputEI}/>
            <button onClick={() => inputEI.current.focus()}>点击弹窗</button>
        </div>
    )
}
export default RefUse
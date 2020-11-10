// eslint-disable-next-line
import React, {useCallback, useState, useEffect, useMemo, useContext} from 'react';
import Store from '../../context'
import './index.scss';

function ShowPage () {
    return (
        <div>
            <Page1 num={0} />
            <Page2 num={100} />
        </div>
    )
}

function Page1 (props) {
    const [num, setNum] = useState(props.num);
    const test = useContext(Store);
    return (
        <div>
            <button onClick={() => setNum(num + 1)}>add</button>
            <div>{num}</div>
            <div>{test}</div>
        </div>
    )
}

function Page2 (props) {
    const [num, setNum] = useState(props.num);
    // const num2 = useCallback(() => {
    //     return num * 2
    // }, [num]);
    // const memo = useMemo(() => () => {
    //     console.log('1111')
    // }, []);
    // useEffect(() => {
    //     const a = num2();
    //     memo()
    //     console.log('测试callBack用法', a)
    // }, [num, memo, num2]);
    function timeFormate (date) {
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    const date = new Date();
    const initTime = timeFormate(date);
    const [currentTime, setTime] = useState(initTime);
    // const callBackTime = useCallback(() => {
    //     setInterval(() => {
    //         const date = new Date();
    //         setTime(timeFormate(date))
    //     }, 1000)
    // }, []);
    useEffect(() => {
        // console.log(Array.from(new Set([1,2,3,1])))
        // callBackTime();
        setInterval(() => {
            const date = new Date();
            setTime(timeFormate(date))
        }, 1000)
    })
    const callBack = useCallback(() => {
        return setNum(num - 1)
    }, [num]);
    return (
        <div>
            <button onClick={callBack}>add</button>
            <div>{num}</div>
            <div>{currentTime}</div>
        </div>
    )
}

export default ShowPage
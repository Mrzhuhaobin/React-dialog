import React, { useEffect } from 'react'
import { useState } from 'react'
import './index.scss'
function PageA () {
    const [str] = useState('pageA');
    const list = ['efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij','abc', 'efg', 'hij',]
    const [random, setRandom] = useState(2);
    useEffect(() => {
        setRandom(parseInt(Math.random() * 5) + 2);
    }, [])
    return (
        <div className="page page-a">
            {str}
            <div className="grid">
                {
                    list.map((item, i) => {
                        return (
                            <div className="grid-item" style={{height: i % random === 0 ? '350px' : '290px'}}>{item}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default PageA
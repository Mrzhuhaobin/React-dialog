import React from 'react'
import { useState } from 'react'
import './index.scss'
function PageA () {
    const [str] = useState('pageC')
    return (
        <div className="page page-c">
            {str}
        </div>
    )
}
export default PageA
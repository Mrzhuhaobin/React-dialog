import React from 'react'
import { useState } from 'react'
import './index.scss'
function PageA () {
    const [str] = useState('pageA')
    return (
        <div className="page page-a">
            {str}
        </div>
    )
}
export default PageA
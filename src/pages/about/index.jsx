import React from 'react'
import { useState } from 'react'
import './index.scss'
function PageA () {
    const [str] = useState('pageB')
    return (
        <div className="page page-b">
            {str}
        </div>
    )
}
export default PageA
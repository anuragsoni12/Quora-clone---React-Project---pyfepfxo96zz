import { Avatar } from '@mui/material'
import React from 'react'
import '../Component/css/quorabox.css'

export const QuoraBox = () => {
    return (
        <div className='quora-box'>
            <div className='quora-box-info'>
                <Avatar/>
            </div>
            <div className='quora-box-question'>
                <h5>What is your question or link</h5>
            </div>
        </div>

    )
}

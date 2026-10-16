import { useState } from 'react'
import './show.css'

function Show(props) {
    console.log(window.location.hash.split('/xcsb-show/')[1])
    const showHash = window.location.hash.split('/xcsb-show/')[1];
    const showName = showHash?.replace(/-/g, ' ')
    const showData = props.parsedData.find(i => i.SHOW_TITLE === showName) || {}
    return (
        <div>
            <h1>{showName}</h1>
            <h2>{showData['DJ NAME'] || null}</h2>
        </div>
    )
}

export default Show

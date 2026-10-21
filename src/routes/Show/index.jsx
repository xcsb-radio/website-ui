import { useState } from 'react'
import './show.css'
import { shows } from '../../assets/showData/shows.js'

function Show(props) {
    const showHash = window.location.hash.split('/xcsb-show/')[1];
    const showName = showHash?.replace(/-/g, ' ')
    const showData = props.parsedData.find(i => i.SHOW_TITLE === showName || i.SHOW_TITLE.includes(showName)) || {}
    return (
        <div className="show-container">
            <h1>{shows[showHash] ? shows[showHash].name : showName}</h1>
            <h2>{showData['DJ NAME'] || null}</h2>
            <div className="description-image-box">
                {shows[showHash] && shows[showHash].image
                    ? <img className="show-image" src={shows[showHash].image} alt={showName + '-image'} />
                    : null}
                <div className="show-description">
                    <div className="listenbutton"
                        style={{ fontWeight: 'bold' }}
                        onClick={() => props.playArchive(showData.SHOW_TITLE, showData.DAY, showData.START_TIME)}>
                        Listen to Most Recent Show
                    </div>
                    {shows[showHash] && shows[showHash].description ? <p>{shows[showHash].description}</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Show

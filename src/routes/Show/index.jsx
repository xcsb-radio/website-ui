import { useState, useEffect } from 'react'
import axios from 'axios';
import './show.css'
import { shows } from '../../assets/showData/shows.js'
import { API } from '../../constants.js';
import Loader from '../../components/Loading/index.jsx';

function Show(props) {
    const showHash = window.location.hash.split('/xcsb-show/')[1];
    const showName = showHash?.replace(/-/g, ' ')
    const showData = props.parsedData.find(i => i.SHOW_TITLE === showName || i.SHOW_TITLE.includes(showName)) || {}
    const [fetchedShowData, setFetchedShowData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShow = async () => {
            try {
                setLoading(true);
                const encodedTitle = encodeURIComponent(showName)
                const response = await axios.get(API + `/shows/title/${encodedTitle}`);
                setFetchedShowData(response.data[0]);
            } catch (err) {
                console.log('error::', err)
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchShow();
    }, []);
    return (
        <div className="show-container">
            {loading ? <Loader /> : null}
            <h1>{shows[showHash] ? shows[showHash].name : showName}</h1>
            <h2>{showData.DJ_NAME || null}</h2>
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

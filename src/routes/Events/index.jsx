import { useState, useEffect, useEffectEvent } from 'react'
import './events.css'
import Loader from '../../components/Loading';
import axios from 'axios';
import { API } from '../../constants';
// import { eventsList } from '../../assets/files/events'

function Events(props) {
  const [isExpanded, setIsExpanded] = useState({});
  const [isEventExpanded, setIsEventExpanded] = useState({});
  const [eventsList, setEventsList] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API + `/events`);
        const eventsByMonth = {}
        response.data.forEach(m => eventsByMonth[m.month] = [])
        response.data.forEach(m => eventsByMonth[m.month].push(m))
        setEventsList(eventsByMonth)
      } catch (err) {
        console.log('error::', err)
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleSetMonthExpanded = (month, expanded) => {
    setIsExpanded(prev => ({
      ...prev,
      [month]: expanded
    }));
  }

  const handleSetEventExpanded = (eventId, expanded) => {
    setIsEventExpanded(prev => ({
      ...prev,
      [eventId]: expanded
    }));
  }

  const handleSetMonths = useEffectEvent(() => {
    const updated = {}
    Object.keys(eventsList).forEach(i => updated[i] = true)
    setIsExpanded(updated)
  });

  const handleSetEvents = useEffectEvent(() => {
    const updated = {}
    console.log(Object.keys(eventsList).map(m => eventsList[m].map(event => event.eventId)))
    Object.keys(eventsList).forEach(m => eventsList[m].forEach(event => updated[event.eventId] = false))
    setIsEventExpanded(updated)
  });

  useEffect(() => {
    if (eventsList && Object.keys(eventsList).length && !Object.keys(isExpanded)?.length) {
      handleSetMonths()
      handleSetEvents()
    }
  }, []);

  return (
    <div className="events-container">
      {loading ? <Loader /> : null}
      {Object.keys(eventsList).map(month => <div className="inner-container">
        <h2 className="month-header" id={`${month}-toggle`}
          onClick={() => handleSetMonthExpanded(month, !isExpanded[month])}>{month}
          {!isExpanded[month] ? <i className="arrow right" id={`${month}-arrow-right`}></i> :
            <i className="arrow down" id={`${month}-arrow-down`}></i>}
        </h2>
        {isExpanded[month] ?
          <div className="month-section" id={`${month}-section`}>
            {eventsList[month].map(event => <div className="event-blurb"><div><span className="date">{event.date}</span>
              <p>{event.eventName}</p>
              <p>{event.location}</p>
              <p>{event.time}</p>
              <button className="more-btn" id={`${event.eventId}more`} onClick={() => handleSetEventExpanded(event.eventId, !isEventExpanded[event.eventId])}>More
                {!isEventExpanded[event.eventId] ? <i className="arrow-more right" id={`${event.eventId}-arrow-right`}></i> :
                  <i className="arrow-more down" id={`${event.eventId}-arrow-down`}></i>}
              </button>
              {isEventExpanded[event.eventId] ? <div className="event-description-box" id={`${event.eventId}-description-box`}>{event.description}</div>
                : null}
            </div>
              <img className={`flier-thumbnail ${event.image ? '' : "hidden"}`} src={event.image} alt={event.eventName + ' flier'} />
            </div>)}
          </div> : null}
      </div>)}
    </div>
  )
}

export default Events

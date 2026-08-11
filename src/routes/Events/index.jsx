import { useState, useEffect, useEffectEvent } from 'react'
import './events.css'
import { eventsList } from '../../assets/files/events'

function Events(props) {
  const [isExpanded, setIsExpanded] = useState({});
  const [isEventExpanded, setIsEventExpanded] = useState({});

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
      {Object.keys(eventsList).map(month => <div>
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

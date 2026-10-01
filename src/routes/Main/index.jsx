import { useState } from 'react'
import './main.css'
import Turntable from '../../assets/turntable.jpg'
import AppThumbnail from '../../assets/xcsbPhoneApp_200x381.png'
import {eventsList} from '../../assets/files/events'
import { NavLink } from 'react-router-dom'

function Main(props) {
  const today = new Date()
  const currentMonth = today.toLocaleString('default', {month: 'long'})
  const currentDay = today.toLocaleDateString('en-US', { weekday: 'long' })
  const currentHour = today.getHours()
  const currentShow = props.parsedData.find(i => (i.DAY === currentDay && i.START_TIME === `${currentHour}:00`) || (i.DAY === currentDay && i.START_TIME === `${currentHour - 1}:00`) || (i.DAY === currentDay && i.START_TIME === `${currentHour - 2}:00`) || (i.DAY === currentDay && i.START_TIME === `${currentHour - 3}:00`))
  const currentShow2 = () => {
    if (props.parsedData.find(i => (i.DAY === currentDay && i.START_TIME === `${currentHour}:00`))) {
      return props.parsedData.find(i => (i.DAY === currentDay && i.START_TIME === `${currentHour}:00`))
    } else if (props.parsedData.find(i => (i.DAY === currentDay && i.START_TIME === `${currentHour - 1}:00`))) {
      return props.parsedData.find(i => (i.DAY === currentDay && i.START_TIME === `${currentHour - 1}:00`))
    } else if (props.parsedData.find(i => (i.DAY === currentDay && i.START_TIME === `${currentHour - 2}:00`))) {
      return props.parsedData.find(i => (i.DAY === currentDay && i.START_TIME === `${currentHour - 2}:00`))
    }
  }
  return (
    <div className="main-container">
      <div className="main-lead">
        <div className="img-background">
          <h1 className="headline">Radio for the community,</h1>
          <h1 className="headline">by the community.</h1>
          <div className='now-playing-container special-elite-regular'>
            <p className="now-playing-text"><span style={{fontWeight: 'bold', color: '#444444'}}>Now playing:</span> {currentShow2()?.SHOW_TITLE}</p>
            <p className="now-playing-text">{currentShow2() ? currentShow2()['DJ NAME'] : null}</p>
            </div>
        </div>
        <div className="buttons-container">
          <h1>
            <a href="https://xcsb.live/public/xcsb-cleveland" target="_blank" className="buttonlinkwide">
              Listen Now!
            </a>
          </h1>
          <h1>
            <a href="https://square.link/u/Eu7UreAU" className="buttonlinkwide" target="_blank">
              Donate
            </a>
          </h1>
          <h1>
            <a href="https://www.soniceyeindustries.com/xcsb/landing" className="buttonlinkwide" target="_blank">
              Get the App!
            </a>
          </h1>
          <div className='events-teaser'>
            <NavLink to='/xcsb-events' style={{textDecoration: 'none'}}>
            <h2 className='events-teaser-header'>Come see us in person at our next community event!</h2>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <h3 className='events-teaser-blurb'>{eventsList[currentMonth][0].eventName}</h3>
              <p style={{margin: 0}} className='events-teaser-blurb'>{eventsList[currentMonth][0].date}</p>
              {eventsList[currentMonth][0].image ? 
              <img className='events-teaser-image' src={eventsList[currentMonth][0].image} /> : null}
            </div>
            <p className='events-teaser-blurb'>{eventsList[currentMonth][0].description}</p>
            <p className='events-teaser-blurb'>More happenings...</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main

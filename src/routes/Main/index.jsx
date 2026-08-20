import { useState } from 'react'
import './main.css'
import Turntable from '../../assets/turntable.jpg'

function Main(props) {
  return (
    <div className="main-container">
      <div className="main-lead">
        {/* <img classname="turntable-image" style={{maxWidth: '50%'}} src={Turntable} alt="turntable" /> */}
        <div className="img-background">
          <h1 className="headline">Radio for the community,</h1>
          <h1 className="headline">by the community.</h1>
        </div>
        <div className="buttons-container">
          <h1>
            <a href="https://xcsb.live/public/xcsb-cleveland" onclick="openPlayer(event, this.href)" className="buttonlinkwide">
              Listen Now!
            </a>
          </h1>
          <h1>
            <a href="https://square.link/u/Eu7UreAU" className="buttonlinkwide" target="_blank">
            Donate
            </a>
            </h1>
        </div>
      </div>
    </div>
  )
}

export default Main

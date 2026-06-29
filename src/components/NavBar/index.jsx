import { useState } from 'react'
import './navBar.css'
import {Link} from 'react-router-dom'

function NavBar(props) {
  return (
    <nav className="navbar-container" role="navigation">
            {/* <div class="menu-toggle">Menu</div> */}
            <ul className="srt-menu" id="menu-main-navigation">
                <li><Link to="/">Home page</Link></li>
                <li><Link to="xcsb-mediaCoverage">What Happened?</Link></li>
                <li><Link to="/#whatsThePlan">What's the Plan?</Link></li>
                <li><Link to="/#whatDoWeNeed">What Do We Need?</Link></li>
                <li><Link to="xcsb-WCSB50Years">WCSB - 50 Years!</Link></li>
                {/* <li><a href="xcsb-whatWillXCSB.html">XCSB - Listen Now</a></li> */}
                <li><Link to="/xcsb-donate">Donate</Link></li>
                <li className="current"><Link to="/xcsb-events">Events</Link></li>
                <li><a href="https://forms.gle/u4St1H9TxNngSe5H7" target="_blank">Stay in Touch!</a></li>
            </ul>
        </nav>
  )
}

export default NavBar

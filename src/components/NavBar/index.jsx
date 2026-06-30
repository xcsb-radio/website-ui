import { useState } from 'react'
import './navBar.css'
import { Link, useNavigate } from 'react-router-dom'

function NavBar(props) {
    const [scrolledEl, setScrolledEl] = useState('')
    const navigate = useNavigate();
    const handleScrollToPlace = (element, pathname) => {
        navigate(pathname)
        const el = document.getElementById(element)
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setScrolledEl(el)
    }
    return (
        <nav className="navbar-container" role="navigation">
            {/* <div class="menu-toggle">Menu</div> */}
            <ul className="srt-menu" id="menu-main-navigation">
                <li className={window.location.pathname === '/' && !scrolledEl ? "current" : ''}>
                    <Link to="/">Home page</Link></li>
                <li className={window.location.pathname.includes('/xcsb-mediaCoverage') ? "current" : ''}>
                    <Link to="xcsb-mediaCoverage">What Happened?</Link></li>
                <li className={window.location.pathname === '/' && scrolledEl === 'whatsThePlan' ? "current" : ''}>
                    <Link
                    onClick={() => handleScrollToPlace('whatsThePlan', '/')}
                // to="/#whatsThePlan"
                >What's the Plan?</Link></li>
                <li className={window.location.pathname === '/' && scrolledEl === 'whatDoWeNeed' ? "current" : ''}>
                    <Link
                    onClick={() => handleScrollToPlace('whatDoWeNeed', '/')}
                // to="/#whatDoWeNeed"
                >What Do We Need?</Link></li>
                <li className={window.location.pathname.includes('/xcsb-WCSB50Years') ? "current" : ''}>
                <Link to="xcsb-WCSB50Years">WCSB - 50 Years!</Link></li>
                {/* <li><a href="xcsb-whatWillXCSB.html">XCSB - Listen Now</a></li> */}
                <li className={window.location.pathname.includes('/xcsb-donate') ? "current" : ''}>
                <Link to="/xcsb-donate">Donate</Link></li>
                <li className={window.location.pathname.includes('/xcsb-events') ? "current" : ''}>
                <Link to="/xcsb-events">Events</Link></li>
                <li><a href="https://forms.gle/u4St1H9TxNngSe5H7" target="_blank">Stay in Touch!</a></li>
            </ul>
        </nav>
    )
}

export default NavBar

import { useState, useEffect } from 'react'
import './navBar.css'
import { Link, useNavigate } from 'react-router-dom'
import Burger from './burger.png'

function useWindowWidth() {
    // Initialize state with current window width if available (handles SSR check)
    const [windowWidth, setWindowWidth] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
}

function NavBar(props) {
    const width = useWindowWidth()
    const [scrolledEl, setScrolledEl] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

    const handleScrollToPlace = (element, pathname) => {
        setIsOpen(false)
        navigate(pathname)
        const el = document.getElementById(element)
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setScrolledEl(el)
    }
    const handleCloseAndNavigate = (link) => {
        setIsOpen(false);
        navigate(link);
    }
    console.log('width...', width)
    return width && width > 900 ? (
        <nav className="navbar-container" role="navigation">
            <ul className="srt-menu" id="menu-main-navigation">
                <li className={window.location.pathname.includes('/about') ? "current" : ''}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/about`)}>
                    About</li>
                <li className={window.location.pathname.includes('/xcsb-programDetail') ? "current" : ''}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/xcsb-programDetail`)}>
                    Our Programs</li>
                <li className={window.location.pathname.includes('/xcsb-donate') ? "current" : ''}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/xcsb-donate`)}>
                    Donate</li>
                <li className={window.location.pathname.includes('/xcsb-mediaCoverage') ? "current" : ''}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/xcsb-mediaCoverage`)}>
                    What Happened?</li>
                <li className={window.location.pathname.includes('/xcsb-WCSB50Years') ? "current" : ''}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/xcsb-WCSB50Years`)}>
                    WCSB - 50 Years!</li>
                <li className={window.location.pathname.includes('/xcsb-events') ? "current" : ''}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/xcsb-events`)}>
                    Events</li>
                <li><a href="https://forms.gle/u4St1H9TxNngSe5H7" target="_blank">Stay in Touch!</a></li>
            </ul>
        </nav>
    ) : (
        <div>
            <img style={{ width: '70px', height: '50px' }} src={Burger} onClick={() => setIsOpen(!isOpen)} />
            {isOpen ? <ul className="srt-menu-mobile" id="menu-main-navigation">
                <li className={window.location.pathname.includes('/about') ? "current nav-item" : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/about`)}>
                    About</li>
                <li className={window.location.pathname.includes('/xcsb-programDetail') ? "current nav-item" : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/xcsb-programDetail`)}>
                    Our Programs</li>
                <li className={window.location.pathname.includes('/xcsb-donate') ? "current nav-item" : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/xcsb-donate`)}>
                    Donate</li>
                <li className={window.location.pathname.includes('/xcsb-mediaCoverage') ? "current nav-item " : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/xcsb-mediaCoverage`)}>
                    What Happened?</li>
                <li className={window.location.pathname.includes('/xcsb-WCSB50Years') ? "current nav-item" : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/xcsb-WCSB50Years`)}>
                    WCSB - 50 Years!</li>
                <li className={window.location.pathname.includes('/xcsb-events') ? "current nav-item" : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`${import.meta.env.BASE_URL}/xcsb-events`)}>
                    Events</li>
                <li>
                    <div className="nav-item">
                        <a href="https://forms.gle/u4St1H9TxNngSe5H7" target="_blank">Stay in Touch!</a>
                    </div>
                </li>
            </ul> : null}
        </div>
    )
}

export default NavBar

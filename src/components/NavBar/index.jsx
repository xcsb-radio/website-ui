import { useState, useEffect } from 'react'
import './navBar.css'
import { NavLink, useNavigate } from 'react-router-dom'
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
    return width && width > 990 ? (
        <nav className="navbar-container" role="navigation">
            <ul className="srt-menu-new">
                <li className={window.location.pathname.includes('/about') ? "current" : 'nav-item'}
                    // onClick={() => handleCloseAndNavigate(`/about`)}
                    ><NavLink to='/about'>
                    About</NavLink>
                    </li>
                <li className={window.location.pathname.includes('/xcsb-programDetail') ? "current" : 'nav-item'}
                    // onClick={() => handleCloseAndNavigate(`/xcsb-programDetail`)}
                    ><NavLink to='/xcsb-programDetail'>
                    Our Programs</NavLink>
                    </li>
                <li className={window.location.pathname.includes('/xcsb-donate') ? "current" : 'nav-item'}
                    // onClick={() => handleCloseAndNavigate(`/xcsb-donate`)}
                    ><NavLink to='/xcsb-donate'>
                    Donate</NavLink></li>
                <li className={window.location.pathname.includes('/xcsb-mediaCoverage') ? "current" : 'nav-item'}
                    // onClick={() => handleCloseAndNavigate(`/xcsb-mediaCoverage`)}
                    ><NavLink to='/xcsb-mediaCoverage'>
                    What Happened?</NavLink></li>
                <li className={window.location.pathname.includes('/xcsb-WCSB50Years') ? "current" : 'nav-item'}
                    // onClick={() => handleCloseAndNavigate(`/xcsb-WCSB50Years`)}
                    ><NavLink to='/xcsb-WCSB50Years'>
                    WCSB - 50 Years!</NavLink></li>
                <li className={window.location.pathname.includes('/xcsb-events') ? "current" : 'nav-item'}
                    // onClick={() => handleCloseAndNavigate(`/xcsb-events`)}
                    ><NavLink to='/xcsb-events'>
                    Events</NavLink></li>
                <li className='nav-item'><a href="https://forms.gle/u4St1H9TxNngSe5H7" target="_blank">Stay in Touch!</a></li>
            </ul>
        </nav>
    ) : (
        <nav className='mobile-nav'>
            <img style={{ width: '40px', height: '30px', zIndex: '9999999999999' }} src={Burger} onClick={() => setIsOpen(!isOpen)} />
            {isOpen ? <ul className="srt-menu-mobile">
                <li className={window.location.pathname.includes('/about') ? "current" : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`/about`)}
                    ><NavLink to='/about'>
                    About</NavLink></li>
                <li className={window.location.pathname.includes('/xcsb-programDetail') ? "current" : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`/xcsb-programDetail`)}
                    ><NavLink to='/xcsb-programDetail'>
                    Our Programs</NavLink></li>
                <li className={window.location.pathname.includes('/xcsb-donate') ? "current" : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`/xcsb-donate`)}
                    ><NavLink to='/xcsb-donate'>
                    Donate</NavLink></li>
                <li className={window.location.pathname.includes('/xcsb-mediaCoverage') ? "current " : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`/xcsb-mediaCoverage`)}
                    ><NavLink to='/xcsb-mediaCoverage'>
                    What Happened?</NavLink></li>
                <li className={window.location.pathname.includes('/xcsb-WCSB50Years') ? "current" : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`/xcsb-WCSB50Years`)}
                    ><NavLink to='/xcsb-WCSB50Years'>
                    WCSB - 50 Years!</NavLink></li>
                <li className={window.location.pathname.includes('/xcsb-events') ? "current" : 'nav-item'}
                    onClick={() => handleCloseAndNavigate(`/xcsb-events`)}
                    ><NavLink to='/xcsb-events'>
                    Events</NavLink></li>
                <li>
                    <div className="nav-item">
                        <a href="https://forms.gle/u4St1H9TxNngSe5H7" target="_blank">Stay in Touch!</a>
                    </div>
                </li>
            </ul> : null}
        </nav>
    )
}

export default NavBar

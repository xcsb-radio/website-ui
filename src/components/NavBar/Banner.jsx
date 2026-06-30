import React, { useState, useEffect } from 'react';
import './navBar.css';
import FlyingV from '../../assets/IAmXcsb_flyingV.png'

export default function Banner() {
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Shrink the image if the user scrolls down more than 50 pixels
            if (window.scrollY > 50) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container">
            <img
                src={FlyingV}
                alt="banner image XCSB"
                className={`scroll-image ${isShrunk ? 'shrunk' : ''}`}
            />
        </div>
    );
}
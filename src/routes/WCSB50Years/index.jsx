import { useState } from 'react'
import './wcsb-50-years.css'

function WCSB50Years(props) {
    return (
        <div className="div-container">
            <section id="hero" className="clearfix">
                <div className="wrapper">
                    <div className="row">
                        <div className="grid_6">
                            <h1><em>Celebrating 50 Years of WCSB</em></h1>
                            <p>Despite the current situation, we continue to move forward with plans that had already been in the works to celebrate our 50-year anniversary.
                                We remain proud that since 1976, we as WCSB provided unparralleled programming to our community, and hands-on broadcast opportunities for close
                                to 1,000 students and community staff. Likewise, we remain grateful to the thousands of dedicated supporters who loyally listened, and generously
                                donated to WCSB, enabling us to outfit a top-notch studio that sadly now sits idle, impounded by CSU. </p>
                            <p>Here's a few things from our past, as we work to re-imagine our future...</p>
                            {/* <!-- <p><a href="#" className="buttonlink">CALL TO ACTION</a> <a href="#" className="buttonlink">ONE MORE</a></p> --> */}
                        </div>
                        <div className="grid_6 rightfloat">
                            <img src="images/WCSBGoesLive_cauldron_04191976.jpg" />
                        </div>
                    </div>
                </div>
            </section>

            <div id="main" className="wrapper">
                <section id="content" className="wide-content">
                    <div id="story" className="row">
                        <div className="grid_12">
                            <hr />
                            <h1>Shows from the Archives</h1>

                            <p>Courtesy of Archive Angel (Dave B.), a randomly selected show from the vaults. In his words: "A loyal listener's personal archive of select WCSB programming from 1983 to present. This archive includes some punk, ska, film, local and experimental music shows but the primary focus is WCSB's long running and very free-wheeling late night open phone talk shows featuring some of Cleveland's creatures of the night." &mdash;</p>
                            {/* <!--<div className="center">--> */}
                            <div id="app-container">
                                {/* <!--<h2>WCSB Random Archive Player</h2>
                            <p className="text-description">
                                Listen to a random MP3 file from the WCSB 1983-2012 archive.
                            </p> --> */}

                                <p id="statusMessage" className="text-status">Initializing...</p>

                                <div id="audioPlayerContainer">
                                    {/* <!-- Audio element and caption will be injected here --> */}
                                </div>

                                <button id="randomButton" onclick="displayRandomMp3()" disabled>
                                    Load Random Show
                                </button>

                                <p className="text-note">File list (4990 shows!) is fetched  automatically upon loading.  You can view and search the listing yourself to find specific shows on the <a href="https://archive.org/details/wcsb.archive.1983-2012" target="_blank">InterNet Archive site</a></p>


                                {/* <!-- </div> --> */}
                            </div>

                            <p>Dave hosts his own random player, drawing from an even larger collection of shows, on his <a href="https://glrc.on-air.fm" target="_blank">Great Lakes Radio Conspiracy site.</a></p>

                        </div>
                    </div>
                </section>

                <section id="content" className="wide-content">
                    <div id="story" className="row">
                        <div className="grid_12">
                            <hr />
                            <h1>Partial list of past WCSB Members (1982-2017)</h1>
                            <p>This list is based on scans of 54 program guides from 1982 to 2017 (not all program guides were available; many members were added or continued to be active after the 2017). We estimate that the 576 staff members listed here represent about half of all the memebers over our 49 years of existance. We're working on adding more names and correcting dates, stay tuned!</p>
                            <h3><em>(in process)</em></h3>

                            <iframe src="xcsb-whatWasWCSB_stafflist-iframe.html" width="100%" height="600" style={{border:"none"}}></iframe>

                        </div>
                    </div>
                </section>

                <section id="content" className="wide-content">
                    <div id="story" className="row">
                        <div className="grid_12">
                            <hr />
                            <h1>Coming soon: Program Guide scans</h1>

                        </div>

                    </div>
                </section>

                <section id="content" className="wide-content">
                    <div id="story" className="row">
                        <div className="grid_12">
                            <hr />
                            <h1>Coming soon: Past events &amp; flyers</h1>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default WCSB50Years
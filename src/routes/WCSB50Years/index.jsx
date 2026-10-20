import { useState } from 'react'
import './wcsb-50-years.css'
import Cauldron from '../../assets/WCSBGoesLive_cauldron_04191976.jpg'
import MediaCoverage from '../MediaCoverage'

function WCSB50Years(props) {
    return (
        <div className="div-container">
            <section id="hero" className="clearfix">
                <div className="wrapper">
                    <div className="row">
                        <div className="grid_6">
                            <h1><em>Celebrating 49 Years of WCSB</em></h1>
                            <p>XCSB is focused on the future - building a lively and vital source of quality programming,
                                and serving our community. We regret that Cleveland State University turned its back on
                                the diverse audience that WCSB served for 49 years... but we're seizing the opportunity
                                to not just continue but to strengthen our commitment to you, our audience.</p>
                            <p>At the same time, we honor and celebrate the 49-year legacy that preceded us. Many XCSB
                                staff are veterans of our predecessor station, and we remain proud that since 1976, we
                                as WCSB provided unparalleled programming to our community, and hands-on broadcast
                                opportunities for close to 1,000 students and community staff. Likewise, we remain
                                grateful to the thousands of dedicated supporters who loyally listened, and generously
                                donated to WCSB, enabling us to outfit a top-notch studio that sadly now sits idle,
                                impounded by CSU.</p>
                            <p>Here's a few things from our past, as we work to re-imagine our future...</p>
                            {/* <!-- <p><a href="#" className="buttonlink">CALL TO ACTION</a> <a href="#" className="buttonlink">ONE MORE</a></p> --> */}
                        </div>
                        <div className="grid_6 rightfloat">
                            <img src={Cauldron} />
                        </div>
                    </div>
                </div>
            </section>

            {/* <div id="main" className="wrapper"> */}
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

                            <button id="randomButton" onClick="displayRandomMp3()" disabled>
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
                        <h1>Program Guides</h1>
                        <p>
                            WCSB Program Guides were not just a way to distribute our air schedule, but were actual zines, with articles, artwork, and editorial commentary.  Here's a sampling (links to PDFs of scanned guides).
                        </p>
                        <div id="programGuides" className="row">


                            <section id="columnsdemo" style={{ marginBottom: '10px', width: '100%' }} className="clearfix">
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1983-MayProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1983-MayProgramGuide_thumb.png" /><br />May, 1983</a></div>
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1983-NovemberProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1983-NovemberProgramGuide_thumb.png" /><br />November, 1983</a></div>
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1984-MarchProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1984-MarchProgramGuide_thumb.png" /><br />March, 1984</a></div>
                            </section>

                            <section id="columnsdemo" style={{ marginBottom: '10px', width: '100%' }} className="clearfix">
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1984-OctoberProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1984-OctoberProgramGuide_thumb.png" /><br />October, 1984</a></div>
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1985-FallProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1985-FallProgramGuide_thumb.png" /><br />Fall, 1985</a></div>
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1989-WinterProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1989-WinterProgramGuide_thumb.png" /><br />Winter, 1989</a></div>
                            </section>

                            <section id="columnsdemo" style={{ marginBottom: '10px', width: '100%' }} className="clearfix">
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1990-SpringProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1990-SpringProgramGuide_thumb.png" /><br />Spring, 1990</a></div>
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1990-FallProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1990-FallProgramGuide_thumb.png" /><br />Fall, 1990</a></div>
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1990-WinterProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1990-WinterProgramGuide_thumb.png" /><br />Winter, 1990</a></div>
                            </section>

                            <section id="columnsdemo" style={{ marginBottom: '10px', width: '100%' }} className="clearfix">
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1991-FallProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1991-FallProgramGuide_thumb.png" /><br />Fall, 1991</a></div>
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_1992-WinterProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_1992-WinterProgramGuide_thumb.png" /><br />November, 1983</a></div>
                                <div className="grid_4"><a href="https://xcsb.org/WCSBProgramGuides/WCSB_2006-SpringProgramGuide.pdf"><img src="https://xcsb.org/WCSBProgramGuides/WCSB_2006-SpringProgramGuide_thumb.png" /><br />Spring, 2006</a></div>
                            </section>
                        </div >
                    </div>
                    <p>
                        These scans are from Cleveland College Radio Coalition/Mary Cipriani, via the Internet Archive.  We've got some more in our archives, we'll work on getting them digitized after the live studio launches...
                    </p>
                </div>
            </section >

            <section id="content" className="wide-content">
                <div id="story" className="row">
                    <div className="grid_12">
                        <MediaCoverage />
                    </div>

                </div>
            </section>


        </div >
    )
}

export default WCSB50Years
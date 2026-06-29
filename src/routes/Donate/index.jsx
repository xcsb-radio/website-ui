import { useState } from 'react'
import './donate.css'
import BuskerHat from '../../assets/XCSB_buskersHat.png'

function Donate(props) {
    return (
        <div className="donate-container">
            <section id="hero" className="clearfix">
                <div className="wrapper">
                    <div className="row">
                        <div className="grid_8">
                            <h1><em>Donate to support XCSB!</em></h1>
                            <p>THANK YOU for donating to XCSB!  Your donations will enable us to rent a studio space, rebuild our broadcast studio, pay for the numerous licensing fees required to for music broadcasting, and all the myriad of little things required to restore our programming services to the community.</p>

                            <h2><a href="https://square.link/u/Eu7UreAU" className="buttonlinkwide" target="_blank"> &#9654; &nbsp;DONATE NOW&nbsp; &#9664;</a></h2>

                            <p>You can also donate by check! Please make checks out to The Reading Room CLE, <i>with “XCSB2b” in the memo line</i> to designate it as a donation to the station.  Mail checks to:</p>

                            <p>The Reading Room CLE<br />
                                17021 Lorain Avenue<br />
                                Cleveland Ohio 44111
                            </p>
                            {/* <p>OR, via modern electronic payment methods (again, <i>be sure to add "XCSB2B"</i> in the memo/comments area of the transaction, so the money gets credited to our account) </p>
                    <ul>
                        <li><a href="https://id.venmo.com/signin#/lgn" target="_blank">Venmo</a>: payable to: @readingroomcle</li>
                        <li><a href="https://www.paypal.com/signin" target="_blank">Paypal</a>: payable to: books@readingroomcle.org</li>
                        <li><a href="https://cash.app/login" target="_blank">Cashapp</a>: payable to:  $thereadingroomcle</li>
                    </ul> */}

                        </div>
                        <div className="grid_4 rightfloat">
                            <img src={BuskerHat} />
                        </div>
                    </div>
                </div>
            </section>


            <div id="main" className="wrapper">

                <section id="content" className="wide-content">
                    <div id="story" className="row">
                        <div className="grid_12">

                            <p>XCSB is an independant non-profit organization, rising from the ashes of WCSB 89.3 - our mission is to launch a brand new alternative streaming station for our community!  With the fiscal sponsorship of Reading Room Cleveland, XCSB seeks donations from community members in Northeast Ohio and abroad in order to promote freeform, alternative radio in our area, and to again provide our community with the programming that was forcibly taken off air October 3rd by Cleveland State University and our local public media conglomerate, Ideastream.</p>

                            <p>By taking a couple minutes to click the donation link above, you will be helping XCSB in the completion of our short and long term goals for a new station to develop. The initial roadmap for our station to develop is as follows:</p>

                            <ul>
                                <li>By 3/1/2026 we seek to announce and program 24 hours of content 7 days a week</li>
                                <li>By 5/10/2026 we seek to have a fully outfitted streaming studio equipped for DJing live on air and post production.</li>
                            </ul>

                            <p>Additionally we will begin to introduce new members to the station at this time, and we will celebrate 50 years of the WCSB we knew and loved and continue the celebration on 5/16 with a Birthday Bash to be announced soon!</p>

                            <p>Your donation is tax deductible and can be executed using the "DONATE to XCSB" link above (which links to The Reading Room's Clover donation page), Venmo, Cashapp, or Paypal. In addition to donating, you can also sign up for email blasts for all your XCSB updates by clicking "Stay In Touch" and inputting your preferred communication methods. Thank you! - the XCSB Team.</p>

                            <a href="https://forms.gle/u4St1H9TxNngSe5H7" className="buttonlinkwide" target="_blank">Stay In Touch!</a>
                            <hr />
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Donate

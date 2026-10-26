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
                            <h1><em>HELP BUILD XCSB!</em></h1>
                            <p><strong>XCSB is building something new—and we need YOU to help make it happen.</strong></p>
                            <p>Reestablishing an independent, community-driven station means rebuilding from the ground up: our organization, our studio, our equipment, our volunteer base and more. It's a big undertaking, but we've never been afraid of doing things a little differently.</p>
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

                            <h3>Here are three ways you can help build the future of XCSB:</h3>

                            <h2>&#9654;  MAKE A FINANCIAL DONATION</h2>
                            <p>Every dollar helps us get closer to a fully equipped, fully operational XCSB. Your support can help fund our studio space, production and streaming equipment, operating expenses and the many startup costs that come with building a station from scratch.</p>
                            <p><a href="https://square.link/u/Eu7UreAU" target="_blank">Make a tax-deductible donation to XCSB</a> through our fiscal partner, The Reading Room. Online, Venmo and personal check options are available.</p>

                            <div>
                                <h2><a href="https://square.link/u/Eu7UreAU" className="buttonlinkwide" target="_blank"> &nbsp;DONATE NOW&nbsp; </a></h2> <br />
                            </div>
                            <p><strong>Your support helps keep independent, community-driven media alive. Thank you!</strong></p>

                            <hr />

                            <h2>&#9654;  MAKE AN IN-KIND DONATION</h2>
                            <p><strong>Money isn't the only way to make a difference.</strong></p>

                            <p>As we build and equip our studio, we're looking for furniture, carpeting, audio and computer equipment, office equipment and supplies, cleaning supplies&mdash;and yes, coffee!</p>

                            <p>Check out our <a href="files/XCSB_DonationsWishlist.pdf" target="_blank">XCSB Donation Wish List</a> to see what we currently need and learn how to coordinate an in-kind donation.</p>

                            <hr />

                            <h2>&#9654;  VOLUNTEER WITH XCSB</h2>
                            <p><strong>Have some time, talent or expertise to share? We want to hear from you.</strong></p>
                            <p>Building a community station takes a community. Whether you can lend a hand at an event, help behind the scenes, contribute professional skills, assist with fundraising and outreach, or just roll up your sleeves when we need some extra hands, there are plenty of ways to get involved.</p>

                            <p>You don't have to be on the air to be part of XCSB.</p>

                            <p><a href="javascript:void(0)">Volunteer with XCSB</a> <em>[volunteer form under revision, check back soon]</em></p>

                            <hr />
                            <h2>&#9654;  MONEY. STUFF. TIME.</h2>
                            <p>However you choose to contribute, <strong>you're helping build XCSB.</strong></p>
                            <h3><strong> Thank you for believing in independent programming, local voices and the power of community-supported media!</strong></h3>

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

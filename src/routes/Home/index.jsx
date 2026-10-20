import { useState } from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'
import FundraisingBanner from '../../assets/xcsbFundraisingBanner_1020x680.jpg'
import XcsbSchedule from '../../assets/XCSBSched_20260301_thumb.png'
import XcsbPamphlet from '../../assets/fliers/XCSB-Pamphlet_pg1Thumbnail.png'
import SaveWCSB from '../../assets/fliers/saveWCSB_thumbnail.png'
import TheyStoleIt from '../../assets/fliers/theyStoleIt_thumbnail.png'
import IdeaScam from '../../assets/fliers/ideaScam_thumbnail.png'

function Home(props) {
    return (
        <div className="home-container">
            {/* <!-- hero area (the grey one with a slider --> */}
            <section id="hero" className="clearfix">
                {/* <!-- responsive FlexSlider image slideshow --> */}
                <div className="wrapper">
                    <div className="row">
                        <div className="grid_6">
                            <h1><em>XCSB - WE ARE BACK!!</em></h1>

                            <p>WE, The volunteer community staff of XCSB ALTERNATIVE MEDIA, are beyond excited to tell you that WE ARE BACK! </p>

                            <h1>
                                <a href="https://xcsb.live/public/xcsb-cleveland" onclick="openPlayer(event, this.href)" className="buttonlinkwide">
                                    Listen Now!
                                </a>
                            </h1>

                            <p>Thanks to an outpouring of support from our listeners in the Greater Cleveland (and around the country),
                                and a monumental effort by our dedicated team of volunteers, we are now <a href="https://xcsb.live/public/xcsb-cleveland" onclick="openPlayer(event, this.href)">STREAMING AUDIO</a> with new shows from many of your favorite (former) WCSB DJs! </p>

                            <p>Here's our program schedule (click the thumbnail for full PDF - updated 9/11/26).</p>

                            <p style={{ textAlign: 'center' }}>
                                <a href="https://res.cloudinary.com/cheesecake/image/upload/v1790343891/xcsb/XCSB_Schedule-20260911.pdf" target="_blank">
                                <img src={XcsbSchedule} />
                                </a>
                            </p>
                        </div>

                        <div className="grid_6">
                            <NavLink to="/xcsb-donate"><img src={FundraisingBanner} /></NavLink>

                            <p>Of course this new effort is going require raising funds &ndash; for equipment, studio rental, broadcast rights licensing,
                                coffee... And we missed our annual Radiothon, so we have some catching up to do, financially.
                                &nbsp;<NavLink to="/xcsb-donate">PLEASE DONATE!</NavLink> We are grateful for your support!</p>

                            <h2><NavLink to="/xcsb-donate" className="buttonlinkwide">DONATE to XCSB</NavLink></h2>

                        </div>


                    </div>
                </div>
            </section>


            {/* <!-- main content area --> */}
            <div id="main" className="wrapper">


                {/* <!-- content area --> */}
                <section id="content" className="wide-content">
                    <div id="story" className="row">
                        <div id="whatsThePlan" className="grid_4">
                            <h1 className="first-header">What’s the latest?</h1>
                            <p><em>So proud of our volunteer staff! </em>&nbsp; Here's what we've accomplished, and what's next:</p>

                            <ul>
                                <li>Our non-profit corporation, <strong>XCSB Alternative Media.</strong>, is now set up. Our mission is <em>"to deliver publicly supported, community-based programming that celebrates northeast Ohio's diverse cultural landscape and offers an alternative to commercial media for the people of Cleveland and beyond."</em> We are establishing a governing board drawn from the community and ex-WCSB station members, and will be building out the organization as we grow.</li>
                                <li>Our Technical Committee has installed and configured the open-source streaming software that enables us to deliver our programs over the interwebs.</li>
                                <li>Our Programming Committee has assembled a team of about 50 volunteer programmers (most of them ex-WCSB'ers) who can produce their programs from home, and pieced together a <em>killer</em> <a href="files/XCSB_schedule.pdf" target="_blank">schedule</a> of fresh programming.</li>
                                <li><strong>WE BEGAN WEBCASTING ON MARCH 1st!</strong></li>
                                <li>We have located a physical space on Waterloo Rd., in the offices of <a href="https://clevelandrocksppf.org/" target="_blank">Cleveland Rocks Past Present &amp; Future</a>, and will be building out our studio there in the coming months.</li>
                                <li><strong>TARGET TO BEGIN LIVE STREAMING FROM OUR STUDIO: MAY 10!!</strong> At that time, we will also expand our programming roster with additional veteran programmers, as well as new volunteers.</li>
                                <li>May 16th will be 'CSBs 50th Anniversary - so we are highly motivated to be bringing you the tunes, to help celebrate our birthday!</li>

                                <li>Our partners at <a href="https://readingroomcle.org" target="_blank">The Reading Room</a> is now accepting your <NavLink to="/xcsb-donate">tax-deductible contributions</NavLink> as our fiscal sponsors, until we receive our own 501c3 designation (it takes a long time).</li>
                            </ul>
                            <p>Whew! And, with your help, there's still more to come</p>


                            <div className="highlightBox">
                                <p>Finally, a word about "the lawsuit". As you may have seen in the news, a <a href="https://signalcleveland.org/tensions-between-cleveland-state-wcsb-continue-new-lawsuit/" target="_blank">lawsuit has been filed against CSU</a> over their actions related to WCSB. To be clear: XCSB2B is <strong>not</strong> a party to that lawsuit. And although we're all obviously interested in it, we cannot opine nor comment on anything related to it (because, lawyers). This website is solely dedicated to moving FORWARD, and to returning the best and most diverse programming we can to our community. Thank you for your support and understanding.</p>
                            </div>
                            <p><em>[Last updated as of 02/26/26]</em></p>
                            <hr />
                        </div>


                        <div id="whatDoWeNeed" className="grid_4">
                            <h1 className="first-header">What do we need?</h1>
                            <p>Now more than ever, we need YOU! Your continued support, your help, and... your money. To get back to serving our community with the programming you love, we need to rebuild everything - our organization, our studios our staff - from scratch. Which is gonna take some scratch:</p>

                            <h3>&#9654; Financial donations</h3>
                            <p>We are currently seeking financial donations to help us reestablish ourselves. Studio space, production and streaming equipment, startup costs - it’a big initial hill to climb, but with your help we can do it! Please consider making a <NavLink to="/xcsb-donate">tax-deductible donation to XCSB</NavLink>, via our fiscal partner The Reading Room. Online, Venmo, personal checks options available. THANK YOU THANK YOU for your support!!</p>
                            <p>
                                <NavLink to="/xcsb-donate" className="buttonlinkwide"> &#9654; &nbsp;DONATE to XCSB&nbsp; &#9664;</NavLink>
                            </p>

                            <h3>&#9654; In-kind donations </h3>
                            <p>There are other ways to contribute, besides just financially. Our focus for the next few months is to get a studio set up and equipped, so we’ll need furniture, carpet, audio and computer equipment, office equipment &amp; supplies, cleaning supplies, coffee... <br />We will also need help with various professional services <strong>
                                <emphasis>&ndash; we have an immediate need for a certified electrician, and a contractor with experience in structural glass</emphasis>
                            </strong>. Here’s a <a href="../../assets/files/XCSB_DonationsWishlist.pdf" target="_blank">list of things we’re specifically looking for</a>, and how you can coordinate your in-kind donations.</p>

                            <img src="../../assets/XCSB_buskersHat.png" />

                            <h3>&#9654; Volunteering</h3>
                            <p>Interesting in joining our volunteer staff? We’re looking for talented passionate enthusiastic diverse folks to join the team, both on-air DJs and support staff. Membership is open to <em>all</em> members of our community, and we are embracing the chance to expand the diversity of both our staff and programming. We need your <em>ENERGY!</em></p>
                            <p>
                                <a href="https://forms.gle/a4uiWvbWqnGW6zCv7" target="_blank" className="buttonlinkwide"> &#9654; &nbsp;VOLUNTEER NOW&nbsp; &#9664;</a>
                            </p>
                            <hr />

                        </div>

                        <div id="whatCanIDo" className="grid_4">
                            <h1 className="first-header">What else can you do?</h1>

                            <p><NavLink to={'/xcsb-events'}>&#9654; EVENTS!</NavLink></p>

                            <p>&#9654; KEEP LISTENING:</p>
                            <ul>
                                {/* <li><em>Radio Refugees:</em> check out seven <a href="xcsb-whatWillXCSB.html">XCSB programs already back on the air</a> on alternate platforms. A taste of what's to come...</li> */}

                                <li>Saturdays, 2:00-3:00, courtesy of our friends &amp; allies at WRUW: <a href="https://wruw.org/show/xcsb-on-air/" target="_blank">WCSB ON THE AIR</a>. Enjoy rotating live sets from X-CSB DJs!
                                    {/* Check the <a href="xcsb-whatWillXCSB.html#wruw">schedule of upcoming guest DJs</a> to catch your favorites */}
                                </li>
                            </ul>


                            <p>&#9654; If you haven't already, please sign up for our mailing list, to get occasional updates on our status and progress:<br />
                                <a href="https://forms.gle/u4St1H9TxNngSe5H7" target="_blank" className="buttonlinkwide">Sign Up to Stay Informed!</a>
                            </p>

                            {/* <p>&#9654; Sign the petition at <a href="https://www.change.org/p/bring-back-wcsb-and-retract-ideastream-s-ownership-of-csu-s-radio-station" target="_blank">Change.org</a> <em>(note: the donation step at the end is completely optional, and goes to Change.org, not to XCSB)</em></p>

                    <p>&#9654; Please consider (re)evaluating your charitable donations to CSU, Ideastream, &amp;/or WCSB in light of current events. If you decide to change or withdraw any of your donations, please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEND6E7FuIu96hXdYsNBGTViz7og17FnU-LNllw1T9OTQRHg/viewform?usp=header" target="_blank">let us know</a>.</p>

                    <p>&#9654; Continue to reach out to Cleveland State University and Ideastream - encourage them to restore our station to the airwaves: <a href="files/Calling-in-Support-of-WCSB.pdf" target="_blank">who and how to call!</a></p> */}
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home

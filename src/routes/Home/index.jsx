import { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'

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
                                    &#9654; &nbsp;&#9654; &nbsp;Listen Now!&nbsp; &#9664;&nbsp; &#9664;
                                </a>
                            </h1>

                            <p>Thanks to an outpouring of support from our listeners in the Greater Cleveland (and around the country),
                                and a monumental effort by our dedicated team of volunteers, we are now <a href="https://xcsb.live/public/xcsb-cleveland" onclick="openPlayer(event, this.href)">STREAMING AUDIO</a> with new shows from many of your favorite (former) WCSB DJs! </p>

                            <p>Here's our initial program schedule (click the thumbnail for full PDF - updated 3/15/26).</p>

                            <p style={{ textAlign: 'center' }}>
                                <a href="files/XCSB_schedule.pdf" target="_blank"><img src="images/XCSBSched_20260301_thumb.png" /></a>
                            </p>

                            <p> THIS IS ONLY THE BEGINNING! We are still making adjustments,
                                AND will be expanding our roster on 5/10 when we move into our new studio space on Waterloo Rd!
                                There's so much more to come, but we could not wait to get back to our primary mission: sharing the
                                programming that we are so passionate about, and that is only available here, on XCSB! </p>
                        </div>

                        <div className="grid_6">
                            <a href="xcsb-donate.html"><img src="images/xcsbFundraisingBanner-01242026_1200.png" /></a>

                            <p>Of course this new effort is going require raising funds &ndash; for equipment, studio rental, broadcast rights licensing,
                                coffee... And we missed our annual Radiothon, so we have some catching up to do, financially.
                                <Link to="xcsb-donate">PLEASE DONATE!</Link> We are grateful for your support!</p>

                            <h2><Link to="xcsb-donate" className="buttonlinkwide"> &#9654; &nbsp;DONATE to XCSB&nbsp; &#9664;</Link></h2>

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

                                <li>Our partners at <a href="https://readingroomcle.org" target="_blank">The Reading Room</a> is now accepting your <a href="xcsb-donate.html">tax-deductible contributions</a> as our fiscal sponsors, until we receive our own 501c3 designation (it takes a long time).</li>
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
                            <p>We are currently seeking financial donations to help us reestablish ourselves. Studio space, production and streaming equipment, startup costs - it’a big initial hill to climb, but with your help we can do it! Please consider making a <a href="xcsb-donate.html">tax-deductible donation to XCSB</a>, via our fiscal partner The Reading Room. Online, Venmo, personal checks options available. THANK YOU THANK YOU for your support!!</p>
                            <p>
                                <a href="xcsb-donate.html" className="buttonlinkwide"> &#9654; &nbsp;DONATE to XCSB&nbsp; &#9664;</a>
                            </p>

                            <h3>&#9654; In-kind donations </h3>
                            <p>There are other ways to contribute, besides just financially. Our focus for the next few months is to get a studio set up and equipped, so we’ll need furniture, carpet, audio and computer equipment, office equipment &amp; supplies, cleaning supplies, coffee... <br />We will also need help with various professional services <strong>
                                <emphasis>&ndash; we have an immediate need for a certified electrician, and a contractor with experience in structural glass</emphasis>
                            </strong>. Here’s a <a href="files/XCSB_DonationsWishlist.pdf" target="_blank">list of things we’re specifically looking for</a>, and how you can coordinate your in-kind donations.</p>

                            <img src="images/XCSB_buskersHat.png" />

                            <h3>&#9654; Volunteering</h3>
                            <p>Interesting in joining our volunteer staff? We’re looking for talented passionate enthusiastic diverse folks to join the team, both on-air DJs and support staff. Membership is open to <em>all</em> members of our community, and we are embracing the chance to expand the diversity of both our staff and programming. We need your <em>ENERGY!</em></p>
                            <p>
                                <a href="https://forms.gle/a4uiWvbWqnGW6zCv7" target="_blank" className="buttonlinkwide"> &#9654; &nbsp;VOLUNTEER NOW&nbsp; &#9664;</a>
                            </p>
                            <hr />

                        </div>

                        <div id="whatCanIDo" className="grid_4">
                            <h1 className="first-header">What else can you do?</h1>

                            <p>&#9654; EVENTS!</p>
                            {/* <!----- MARCH ------>   */}
                            <p><em>&nbsp;&nbsp;MARCH &mdash;</em></p>
                            <ul>
                                <li>Sun. 3/1: XCSB STARTs REALTIME INTERNET STREAMING!!</li>
                                <li>Thur. 3/12: DJ’S VINYL NIGHT at Little Rose Tavern, 14206 Lorain Ave., 8:30-Midnight.  Curated vinyl sets by XCSB DJs.</li>
                                <li>Fri. 3/27: Album Release Party &amp; XCSB Fundraiser at Spotlight Cleveland, 8701 Madison Ave., 6pm Happy Hour.  XCSB DJ JT will be giving away merch and CD’s to celebrate the release of BLUE Album from J TEMP 13, plus other XCSB DJ's spinning records.</li>
                            </ul>
                            {/* <!----- APRIL ------>   */}
                            <p><em>&nbsp;&nbsp;APRIL &mdash;</em></p>
                            <ul>
                                <li>Sat. 4/11: DJ’S VINYL NIGHT at Bad Medicine Bar 13334 Lorain Ave., 8pm-Midnight. Curated vinyl sets by XCSB DJs.</li>
                                <li>Sat. 4/11: XSCB will have a table at <a href="https://www.instagram.com/p/DU_JF7ZkXl2/" target="blank">The Lottery League DRAFT NIGHT</a>, at Ingenuity, 5401 Hamilton, 7:30pm-til?</li>
                                <li>Sat. 04/18: RECORD STORE DAY.  Celebrate with us at your favorite record stores:<br />
                                    - The Vinyl Groove Records 5100 Pearl Road; Time/TBA<br />
                                    - Late Night Records 2602 Walton Ave., 8pm-Midnight<br />
                                    - Mistake By The Lake Records 6502 Lorain Ave., 12pm-6pm
                                </li>
                                <li>Sat. 04/18: DRUMPLAY record release party and XCSB benefit, at the <a href="https://www.ticketweb.com/event/drumplay-release-party-benefit-for-treelawn-social-club-tickets/14147624" target="_blank">Treelawn Social Club</a>, 15335 Waterloo Rd., 7:30pm. Drumplay is a Cleveland-based world/jazz ensemble, featuring former WCSB programmer James Onysko. Proceeds benefit XCSB</li>
                            </ul>
                            {/* <!----- MAY ------>                       */}
                            <p><em>&nbsp;&nbsp;MAY &mdash;</em></p>
                            <ul>
                                <li>Sun. 5/10: XCSB STARTs WEBCASTING LIVE from our new studio on Waterloo!!</li>
                                <li>Fri. 5/15: DJ’S VINYL NIGHT at Dunlap’s Corner Bar 3258 W 32nd St.  Curated vinyl sets by XCSB DJs.</li>
                                <li>Sat. 5/16: 50th Anniversary Show at The Treelawn Social Club, 15335 Waterloo Rd *More info to come</li>
                            </ul>
                            {/* <!----- JUNE ------>                      */}
                            <p><em>&nbsp;&nbsp;JUNE &mdash;</em></p>
                            <ul>
                                <li>Sat. 7/27: XSCB will have a table at <a href="https://www.instagram.com/p/DU_JF7ZkXl2/" target="blank">The Lottery League BIG SHOW</a>, at Ingenuity, 5401 Hamilton, 7:30pm-til?</li>
                            </ul>

                            {/* <!----- JULY ------>                      */}
                            <p><em>&nbsp;&nbsp;JULY &mdash;</em></p>
                            <ul>
                                <li>Fri. 7/10: XCSB REGGAE FEST 'The Harder They Come The Harder They Fall'. Happy Dog, 5801 Detroit Ave.  Live bands and curated vinyl DJ’s sets.  $12 suggested door cover. XCSB FUNDRAISER-100% of donations go to XCSB!</li>
                            </ul>
                            {/* <!----- AUGUST ------>   
<!----- SEPTEMBER ------>  
<!----- OCTOBER ------>                       */}
                            <p><em>&nbsp;&nbsp;OCTOBER &mdash;</em></p>
                            <ul>
                                <li>Save the date: Fri. 10/30/2026: Our annual HALLOWEEN BALL, at the Beachland!</li>
                            </ul>

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


                <section id="printables" style={{ marginBottom: '60px', width: '100%' }} className="clearfix">
                    <hr />
                    <h2 style={{ width: '100%', clear: 'both' }}>Join the Street Team!</h2>
                    <div className="grid_4">
                        <p>Here's a few downloadable PDF files you can print out, to display, hand out, and/or post... thanks for your support and help in spreading the word! <em>(click image to download)</em></p>
                    </div>
                    <div className="grid_2"><a href="images/fliers/XCSB-Pamphlet_10212025.pdf" target="_blank"><img src="images/fliers/XCSB-Pamphlet_pg1Thumbnail.png" /><br />Pamphlet: College Radio Condition</a></div>
                    <div className="grid_2"><a href="images/fliers/saveWCSB_300ppi.pdf" target="_blank"><img src="images/fliers/saveWCSB_thumbnail.png" /><br />Flier: Save WCSB</a> </div>
                    <div className="grid_2"><a href="images/fliers/theyStoleIt_300ppi.pdf" target="_blank"><img src="images/fliers/theyStoleIt_thumbnail.png" /><br />Flier: Your Created it...</a></div>
                    <div className="grid_2"><a href="images/fliers/ideaScam_300ppi.pdf" target="_blank"><img src="images/fliers/ideaScam_thumbnail.png" /><br />Flier: Don't fall for the Ideascam</a></div>
                </section>
            </div>
        </div>
    )
}

export default Home

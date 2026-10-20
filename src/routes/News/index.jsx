import { useState } from 'react'
import StoreFront from '../../assets/xcsbStorefront_1024x602.png'
import './news.css'

function News(props) {
  return (
    <div className="div-container">
            <section id="hero" className="clearfix">
        <div className="wrapper">
            <div className="row">
                <div className="grid_6">
                    <h1><em>Latest news from XCSB</em></h1>
                    <p><strong>Look here for the lastest news and updates from XCSB.</strong></p>
                    <p>You can also sign up to receive our (very occasional) <a href="https://stats.sender.net/forms/bmZ9Np/view" target="_blank">newsletter</a></p>
                </div>
                
                <div className="grid_6 rightfloat">
                    <img src={StoreFront} />

                </div>
            </div>
        </div>
    </section>

        <div id="main" className="wrapper">

        <section id="content" className="wide-content">
            <div id="story" className="row">
                <div className="grid_12">
                    <h1 className="first-header">What’s the latest?</h1>
                    <div className="highlightBox">
                        <h3><em>Studio Update</em></h3>
                        <p>We are working feverishly to open our new studio space on Waterloo Rd. &mdash; tho it's taking a little longer than we expected, we're making slow/steady progress. But, we're already planning another wave of new programming for when we do go live for real, hopefully this summer! So stay tuned, and <em>thanks</em> for your ongoing suport as we continue our primary mission: sharing the programming that we are so passionate about, and that is only available here, on XCSB!</p>
                    </div>
                        <p>
                            <em>So proud of our volunteer staff! </em>&nbsp; Here's what we've accomplished, and what's
                            next:
                        </p>

                        <ul>
                            <li>
                                Our non-profit corporation, <strong>XCSB Alternative Media.</strong>, is now set up. Our
                                mission is
                                <em
                                    >"to deliver publicly supported, community-based programming that celebrates
                                    northeast Ohio's diverse cultural landscape and offers an alternative to commercial
                                    media for the people of Cleveland and beyond."</em
                                >
                                We are establishing a governing board drawn from the community and ex-WCSB station
                                members, and will be building out the organization as we grow.
                            </li>
                            <li>
                                Our Technical Committee has installed and configured the open-source streaming software
                                that enables us to deliver our programs over the interwebs.
                            </li>
                            <li>
                                Our Programming Committee has assembled a team of about 50 volunteer programmers (most
                                of them ex-WCSB'ers) who can produce their programs from home, and pieced together a
                                <em>killer</em> <a href="files/XCSB_schedule.pdf" target="_blank">schedule</a> of fresh
                                programming.
                            </li>
                            <li>
                                <strong>WE BEGAN WEBCASTING ON MARCH 1st!</strong> Volunteer programmers are now
                                recording their shows remotely, and we now have programming streaming to you 24/7.
                            </li>
                            <li>
                                We have located a physical space on Waterloo Rd., in the offices of
                                <a href="https://clevelandrocksppf.org/" target="_blank"
                                    >Cleveland Rocks Past Present &amp; Future</a
                                >, and will be building out our studio there in the coming months. Once the studio is
                                operational, we'll being streaming LIVE!
                            </li>
                            <li>
                                Our partners at
                                <a href="https://readingroomcle.org" target="_blank">The Reading Room</a> is now
                                accepting your <a href="xcsb-donate.html">tax-deductible contributions</a> as our fiscal
                                sponsors, until we receive our own 501c3 designation (it takes a long time).
                            </li>
                        </ul>
                        <p>Whew! And, with your help, there's still more to come</p>
                </div>
            </div>
        </section>



    </div>
    </div>
  )
}

export default News

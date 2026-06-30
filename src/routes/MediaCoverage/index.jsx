import { useState } from 'react'
import './mediaCoverage.css'

function MediaCoverage(props) {
    return (
        <div className="media-coverage-container">
            <section id="hero" className="clearfix">
                <div className="wrapper">
                    <div className="row">
                        <div className="grid_6">
                            <h1 className="first-header">What happened to WCSB?</h1>
                            <p>On Oct. 3, Cleveland State University transferred operation of its FM radio station WCSB 89.3 to IdeaStream, an NPR affiliate - ending 49 years of student and community-produced programming, and displacing 100 volunteers who had been involved. Our long tradition of broadcasting diverse and community-engaged programming has been displaced and replaced with light jazz 24/7.</p>
                            <h1 className="first-header">What was the reaction?</h1>
                            <p>Community support was overwhelming, and we thank all of the individuals and organizations who spoke up in support of our work, including <a href="#CleveCityCouncil">Cleveland City Council</a>. <a href="#mediaCoverge">Media response</a>, both broadcast and print, has been almost universally supportive, and the story gained national and even international attention.</p>
                            <p>Still, CSU and Ideastream have shown no willingness reconsider their decision and restore control of the FM broadcast signal to the former WCSB students and community members. We strongly believe that this decision is a disservice to our community, our volunteers, and the students of Cleveland State University, and that
                                it <a href="https://www.cleveland.com/open/2025/10/ohio-sunshine-law-violation-could-overturn-cleveland-states-wcsb-radio-deal-legal-expert-says.html" target="_blank">may in fact have been done illegally.</a> We are continuing our lobbying efforts to get CSU to reverse their decision, and very much appreciate your support in those ongoing efforts.</p>
                        </div>
                        <div className="grid_6 rightfloat">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/news5b_720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/fox8_720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/scene_720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/radioInk_720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/216Scoop_720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/wkyc_720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/cauldron_720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/news5_720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/clevelandStater720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/clevelandDotCom_720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/mediaCoverageCarousel/ideastream_720.png" />
                                        <p className="flex-caption">(XCSB in the media)</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="main" className="wrapper">
                <section id="content" className="wide-content">
                    <div id="story" className="row">
                        <div className="grid_12">
                            <h1 className="first-header" id="mediaCoverge">Media Coverage of WCSB takeover</h1>
                            <p> Here are links to just a sampling of how the story unfolded in the media. If you know of a media story we missed, please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuZGMhsIxAp9tgJNdoMj8XGLEEDziN7e5vDL9rzueMeBOlCg/viewform?usp=sharing&ouid=112300019516835569689" target="_blank">let us know</a>! </p>
                            <ul>
                                {/* // <!--add new stories here, chronological, latest on top --> */}
                                {/* // <!--format: <li>DATE SOURCE: <a href="URL" target="_blank">TITLE</a></li>--> */}
                                <li>1/12/26 @Signal Cleveland: <a href="https://signalcleveland.org/tensions-between-cleveland-state-wcsb-continue-new-lawsuit/" target="_blank">Tensions between Cleveland State, WCSB continue with new lawsuit</a></li>
                                <li>1/12/26 @Cleveland Magazine: <a href="https://clevelandmagazine.com/articles/xcsb-sues-cleveland-state-university-as-it-makes-future-streaming-plans/" target="_blank">XCSB Sues Cleveland State University and Makes Future Streaming Plans</a></li>
                                <li>1/12/26 @Fox 8 News: <a href="https://fox8.com/video/students-sue-cleveland-state-for-taking-away-their-college-radio-station/11421488" target="_blank">Students sue Cleveland State for taking away their college radio station</a></li>
                                <li>1/11/26 @CKUT-FM - International Radio Report: <a href="https://ckut.ca/playlists/IR" target="_blank">The Rock'n'Roll Capital Killed Its Radio Station for a 24/7 Jazz Station and the students are fighting back</a></li>
                                <li>1/10/26 @Pow Magazine: <a href="https://www.powmagazine.org/powmagazine/death-dial-endtimes-at-wcsb/" target="_blank">Death Dial: Endtimes at WCSB</a></li>
                                <li>12/29/25 @Spin: <a href="https://www.spin.com/2025/12/the-rock-and-roll-capital-killed-its-college-radio-station-for-smooth-jazz-and-the-students-are-fighting-back/" target="_blank">The Rock and Roll Capital Killed Its College Radio Station for Smooth Jazz and the Students Are Fighting Back</a></li>
                                <li>12/16/25 @Cleveland Stater: <a href="https://clevelandstater.com/news/news/bloomberg-addresses-wcsb-shutdown-funding-woes-loss-international-students-and-tough" target="_blank">Bloomberg addresses WCSB shutdown, funding woes, loss of international students and a tough semester as president</a></li>
                                <li>12/13/25 @Cleveland.com: <a href="https://www.cleveland.com/education/2025/12/csu-radio-station-transfer-to-ideastream-continues-trend-toward-nonprofit-control.html" target="_blank">CSU radio station transfer to Ideastream continues trend toward nonprofit control</a></li>
                                <li>12/10/25 @Ljubljiana Radio Student (College radio station): <a href="https://radiostudent.si/univerza/univerzitetni-blok/od-glasov-manjsin-do-smooth-jazza" target="_blank">Zgodovina in usoda študentskega radia WCSB</a></li>
                                <li>12/2/25 @CoolCleveland: <a href="https://coolcleveland.com/2025/11/bring-back-wcsb-our-future-depends-on-it-by-bruce-checefsky/" target="_blank">COMMENTARY: Bring Back WCSB: Our Future Depends on It by Bruce Checefsky</a></li>
                                <li>11/27/25 @Blunt Baker (blog): <a href="https://bluntbaker.substack.com/p/what-we-lost-at-wcsb" target="_blank">What We Lost at WCSB</a></li>
                                <li>11/26/25 @cleveland.com: <a href="https://www.cleveland.com/letters/2025/11/wcsb-transfer-to-ideastream-was-a-ripoff-for-longtime-donors.html" target="_blank">WCSB transfer to Ideastream was a ‘ripoff’ for longtime donors</a></li>
                                <li>11/21/25 @cleveland.com: <a href="https://www.cleveland.com/letters/2025/11/transfer-of-csus-radio-station-to-ideastream-draws-stirs-concerns-damages-trust.html" target="_blank">Transfer of CSU’s radio station to Ideastream stirs concerns, damages trust</a></li>
                                <li>11/21/25 @cleveland.com: <a href="https://www.cleveland.com/letters/2025/11/is-jazz-neo-worth-losing-wcsb-cleveland-radio-listeners-question-change.html" target="_blank">Is Jazz NEO worth losing WCSB? Cleveland radio listeners question change</a></li>
                                <li>11/18/25 @Radio Survivor: <a href="https://www.radiosurvivor.com/2025/11/podcast-346-the-fight-for-college-radio-at-cleveland-state-station-wcsb/" target="_blank">Podcast #346 – The Fight for College Radio at Cleveland State Station WCSB</a></li>
                                <li>11/16/25 @Bocskai Radio: <a href="https://www.bocskairadio.org/en/a-community-silenced-the-story-of-the-wcsb-hungarian-hour/" target="_blank">A Community Silenced: The Story of the WCSB Hungarian Hour</a></li>
                                <li>11/14/25 @Inside Radio: <a href="https://www.insideradio.com/free/report-months-of-secret-talks-preceded-cleveland-state-radio-station-deal/article_6cd0c856-1551-48fd-9550-3d35de26da0c.html" target="_blank">Report: Months of Secret Talks Preceded Cleveland State Radio Station Deal</a></li>
                                <li>11/13/25 @Cleveland.com: <a href="https://www.cleveland.com/news/2025/11/they-botched-it-how-csus-secret-dealings-guarantee-its-radio-station-scandal-keeps-growing.html" target="_blank">‘They botched it:’ How CSU’s secret dealings guarantee its radio station scandal keeps growing</a></li>
                                <li>11/13/25 @Cleveland.com: <a href="https://www.cleveland.com/education/2025/11/csu-ideastream-non-disclosure-pact-reveals-6-months-of-secret-talks-on-radio-station-deal.html" target="_blank">CSU-Ideastream nondisclosure pact shows 6 months of secret talks led to radio station deal</a></li>
                                <li>11/13/25 @Cleveland.com: <a href="https://open.spotify.com/episode/4CuYbj893SX0CrbuRaGimg?si=CQGbeotdQRKzHFhsS0-ITQ" target="_blank">Today In Ohio - Nov. 13, 2025 (starts at 20:21)</a></li>
                                <li>11/12/25 @Ideastream: <a href="https://www.ideastream.org/arts-culture/2025-11-12/cuyahoga-arts-culture-approves-12-3-million-in-grants-public-comment-focuses-on-wcsb" target="_blank">Cuyahoga Arts & Culture approves $12.3 million in grants, public comment focuses on WCSB</a></li>
                                <li>11/11/25 @The Land: <a href="https://thelandcle.org/stories/clevleand-jazz-fans-polarized-by-wcsb-switch-to-jazzneo/" target="_blank">Cleveland jazz fans polarized by WCSB switch to JazzNEO</a></li>
                                <li>11/10/2025 @Metafilter: <a href="https://www.metafilter.com/210998/BAM-The-future-and-present-and-past-of-the-left-of-the-dial" target="_blank">BAM: The future (and present and past) of the left of the dial</a></li>
                                <li>11/10/25 @The Cleveland Stater: <a href="https://clevelandstater.com/news/community/xcsb-hosts-halloween-ball-amid-uncertainty-following-ideastream-takeover" target="_blank">XCSB hosts Halloween Ball amid uncertainty following Ideastream takeover</a></li>
                                <li>11/10/25 @The Cleveland Stater: <a href="https://clevelandstater.com/news/news/csu-faculty-urged-help-shape-new-state-mandated-policies-admin-defends-wcsb-takeover" target="_blank">CSU faculty urged to help shape new state-mandated policies, admin defends WCSB takeover</a></li>
                                <li>11/6/25 @Inside Radio: <a href="https://www.insideradio.com/free/attorney-suggests-ideastream-s-takeover-of-wcsb-broke-the-law/article_c037c2c0-67c1-4740-9637-1d97037644ff.html" target="_blank">Attorney Suggests Ideastream’s Takeover Of WCSB Broke The Law</a></li>
                                <li>11/6/25 @Cleveland.com: <a href="https://www.cleveland.com/education/2025/11/the-details-we-know-about-csus-secret-meeting-to-kill-the-student-radio-station.html" target="_blank">The details we know about CSU’s secret meeting to kill the student radio station</a></li>
                                <li>11/5/25 @Cleveland.com: <a href="https://www.cleveland.com/opinion/2025/11/tainted-transfer-of-csu-radio-station-to-ideastream-should-be-reversed-editorial.html" target="_blank">Tainted transfer of CSU radio station to Ideastream should be reversed: editorial</a></li>
                                <li>11/5/25 @North Coast Voice: <a href="https://www.northcoastvoice.com/PDFs/v25i11.pdf" target="_blank">A Story of David vs. Goliath - WCSB 89.3 FM becomes XCSB</a> (page 12)</li>
                                <li>11/4/2025 @Carroll News: <a href="https://carrollnews.org/242423/community/community-rallies-around-xcsb-after-abrupt-shutdown/" target="_blank">Community rallies around “XCSB” after abrupt shutdown</a></li>
                                <li>11/4/25 @Cleveland.com: <a href="https://www.cleveland.com/news/2025/11/csu-and-ideastream-under-fire-law-expert-says-student-radio-station-handover-broke-the-law.html" target="_blank">CSU and Ideastream under fire: Law expert says student radio station handover broke the law</a></li>
                                <li>11/3/25 @Cleveland.com: <a href="https://open.spotify.com/show/7ERQ8EjZWxVDJeCpXMn2y2" target="_blank">Today in Ohio - Nov. 3, 2025 (starts at 21:57)</a></li>
                                <li>11/3/25 @Cleveland.com: <a href="https://www.cleveland.com/education/2025/11/lawsuit-could-force-csu-officials-to-reveal-what-happened-in-wcsb-closed-meeting.html" target="_blank">Lawsuit could force CSU officials to reveal what happened in WCSB closed meeting</a></li>
                                <li>10/31/25 @Cleveland.com: <a href="https://www.cleveland.com/open/2025/10/ohio-sunshine-law-violation-could-overturn-cleveland-states-wcsb-radio-deal-legal-expert-says.html" target="_blank">Ohio sunshine law violation could overturn Cleveland State’s WCSB radio deal, legal expert says</a></li>
                                <li>10/30/25 @Cleveland Scene: <a href="https://www.clevescene.com/news/former-wcsb-djs-get-a-showcase-at-happy-dog-every-friday-in-november-after-station-shutdown/" target="_blank">Former WCSB DJs Get a Showcase at Happy Dog Every Friday in November After Station Shutdown</a></li>
                                <li>10/30/25 @Current: <a href="https://current.org/2025/10/ideastream-agreement-to-program-cleveland-states-wcsb-spurs-pushback-from-students-community-members/" target="_blank">Ideastream agreement to program Cleveland State’s WCSB spurs pushback from students, community members</a></li>
                                <li>10/30/25 @Cleveland.com: <a href="https://www.cleveland.com/open/2025/10/cleveland-state-launches-panel-to-seek-student-activity-with-wcsb-amid-ideastream-transfer-backlash.html" target="_blank">Cleveland State launches panel to seek student activity with WCSB amid Ideastream transfer backlash</a></li>
                                <li>10/28/25 @Cleveland State University Student Government Association: <a href="https://www.csuohio.edu/sites/default/files/2025-10/a-resolution-supporting-student-radio.pdf" target="_blank">A Resolution Supporting Student Radio</a></li>
                                <li>10/28/25 @RadioVisie: <a href="https://radiovisie.eu/blad-2562-sonos-radio-caroline-wcsb/" target="_blank">Controversy surrounding WCSB student radio takeover</a> (translated from Dutch)</li>
                                <li>10/27/25 @Inside Higher Ed: <a href="https://www.insidehighered.com/news/students/free-speech/2025/10/27/battle-future-college-radio" target="_blank">Fighting to Control the Campus Airwaves</a></li>
                                <li>10/27/25 @Radio Survivor: <a href="https://www.radiosurvivor.com/2025/10/wcsb-student-leaders-and-supporters-fight-against-takeover-of-cleveland-state-universitys-student-run-college-radio-station/" target="_blank">WCSB Student Leaders and Supporters Fight Against Takeover of Cleveland State University’s Student-Run College Radio Station</a></li>
                                <li>10/23/25 @Cleveland.com: <a href="https://www.cleveland.com/news/2025/10/buzzword-talking-points-csu-prez-fails-to-justify-giving-away-student-run-radio-station.html" target="_blank">“Buzzword talking points:” CSU prez fails to justify giving away student-run radio station</a></li>
                                <li>10/23/25 @Cleveland.com: <a href="https://open.spotify.com/episode/513wgAb1eaxkhdPL22dWHW?si=EYmeMRaeQ8uqo2x0E00Csg" target="_blank">Today in Ohio - Oct. 23, 2025</a></li>
                                <li>10/23/25 @The Cauldron: <a href="https://www.youtube.com/shorts/uB3ja5ixHEs" target="_blank">Oct. 17, with students and community protesting for WCSB</a></li>
                                <li>10/23/25 @The Cauldron: <a href="https://www.youtube.com/shorts/A8iMkg-mifM" target="_blank">WCSB General Manager Alison Bomgardner, Oct. 7</a></li>
                                <li>10/21/25 @News 5: <a href="https://www.youtube.com/watch?v=Ux8WGu5tPN4" target="_blank">Protests continue after CSU radio station transfer</a></li>
                                <li>10/23/25 @The Cauldron: <a href="https://www.youtube.com/watch?v=FZ1OBeitu0c" target="_blank">The Cauldron's Weekly Brew, Oct. 18 (start at 0:37)</a></li>
                                <li>10/22/25 @WKYC: <a href="https://www.wkyc.com/article/news/education/cleveland-state-president-responds-student-radio-station-controversy-protests-city-council-resolution/95-94ee21b7-4f3a-4680-b91c-6fe79a59b869" target="_blank">Cleveland State president responds to student radio station controversy amid protests and City Council resolution</a></li>
                                <li>10/22/25 @Spectrum News 1: <a href="https://spectrumnews1.com/oh/cleveland/news/2025/10/22/csu-protests-continue-radio-station" target="_blank">CSU protests continue over student-run radio station transfer</a></li>
                                <li>10/22/25 @Metal Command Podcast: <a href="https://www.youtube.com/watch?v=0DcVL5O1WZc" target="_blank">The Attack on Independent Media: How hijacking WCSB 89.3FM sets a bad precedent.</a></li>
                                <li>10/22/25 @Signal Cleveland: <a href="https://signalcleveland.org/cleveland-state-laura-bloomberg-wcsb-deal-senate-bill-1-sotu/" target="_blank">Cleveland State President Laura Bloomberg doesn’t mention WCSB deal, Senate Bill 1 during State of the University address</a></li>
                                <li>10/22/25 @Cleveland Magazine: <a href="https://clevelandmagazine.com/articles/losing-wcsb-college-radio-is-a-profound-loss-for-cleveland-s-creative-communities/" target="_blank">Losing WCSB College Radio Is a Profound Loss for Cleveland’s Creative Communities</a></li>
                                <li>10/22/25 @Cleveland.com: <a href="https://www.cleveland.com/education/2025/10/cleveland-state-president-again-defends-wcsb-radio-transfer-to-ideastream.html" target="_blank">Cleveland State president again defends WCSB radio transfer to Ideastream</a></li>
                                <li>10/22/25 @The Land: <a href="https://thelandcle.org/stories/why-wcsb-matters-to-me-op-ed/" target="_blank">Why WCSB matters to me: Op-Ed by NICOLE WLOSZEK</a></li>
                                <li>10/21/25 @Cleveland.com: <a href="https://www.cleveland.com/education/2025/10/cleveland-state-to-require-applied-learning-experiences-for-undergrads-by-2030.html" target="_blank">Cleveland State to require applied learning experiences for undergrads by 2030</a></li>
                                <li>10/21/25 @News 5: <a href="https://www.news5cleveland.com/news/local-news/we-follow-through/cleveland-city-council-stands-up-for-csu-student-run-radio-show-after-shutdown" target="_blank">Cleveland City Council stands up for CSU student-run radio station after shutdown</a></li>
                                <li>10/20/25 @WKYC: <a href="https://www.wkyc.com/article/news/local/cleveland/cleveland-city-council-defends-students-csu-radio-overhaul-wcsb-ideastream/95-f2668723-1037-455d-8126-12b8e809718c#" target="_blank">'Radio helps people find their voice': City Council defends students in Cleveland State radio overhaul fight</a></li>
                                <li>10/20/25 @Cleveland City Council: <a href="https://www.youtube.com/live/vdHwatYbb1c?si=rs-9368p-1otGSOf&t=3464" target="_blank">Testimony and unanimous vote on Emergency Resolution 1324-2025</a> (supporting restoration of WCSB to students &amp; community)</li>
                                <li>10/20/25 @College Radio Foundation: <a href="https://www.collegeradio.org/special-report-on-what-happened-at-cleveland-state-wcsb-part-one/" target="_blank">Special Report on What Happened at Cleveland State WCSB: Part One </a></li>
                                <li>10/18/25 @Spectrum News: <a href="https://spectrumnews1.com/oh/cleveland/news/2025/10/17/protesters-rally-against-transfer-of-student-run-radio-station-to-ideastream" target="_blank"> Protesters rally against transfer of student run radio station to Ideastream Media</a></li>
                                <li>10/18/25 @Cleveland.com: <a href="https://www.cleveland.com/news/2025/10/the-maelstrom-of-protest-keeps-growing-over-ideastreams-takeover-of-the-csu-radio-station.html" target="_blank"> The maelstrom of protest keeps growing over Ideastream’s takeover of the CSU radio station </a></li>
                                <li>10/17/25 @WKYC: <a href="https://www.wkyc.com/video/news/protestors-outside-city-club-of-cleveland-ideastream-wcsb-student-radio-csu-jazz-public-media-federal-cuts/95-2a3df5c4-4a80-49b7-87c1-8510e63480b3" target="_blank">Protesters outside City Club of Cleveland</a></li>
                                <li>10/17/25 @Cleveland.com: <a href="https://www.cleveland.com/galleries/3ILDGN3L2NEO7HHSKB4NTO6O5M/" target="_blank">Protestors rally outside Cleveland’s City Club during lunch forum with Ideastream Public Media who tookover CSU's student radio station</a></li>
                                <li>10/17/25 @Cleveland.com: <a href="https://www.cleveland.com/news/2025/10/what-went-down-at-wcsb-893fm-a-voice-from-inside-cleveland-states-axed-student-radio-station.html" target="_blank"> What went down at WCSB 89.3FM: a voice from inside Cleveland State’s axed student radio station </a></li>
                                <li>10/17/25 @Cleveland.com: <a href="https://open.spotify.com/episode/2rHXuIQajmajnOByKLeISS?si=ZDtIDfzvSmWBilY0hgmEmg" target="_blank"> Today In Ohio - Oct. 17, 2025 </a></li>
                                <li>10/17/25 @Cleveland.com: <a href="https://www.cleveland.com/education/2025/10/students-community-decry-authoritarian-takeover-of-csu-radio-station-by-ideastream.html" target="_blank"> Students, community decry ‘authoritarian takeover’ of CSU radio station by Ideastream </a></li>
                                <li>10/17/25 @Ideastream: <a href="https://www.ideastream.org/community/2025-10-17/ideastream-ceo-addresses-public-media-defunding-at-city-club-as-wcsb-protest-roils-outside" target="_blank"> Ideastream CEO addresses public media defunding at City Club as WCSB protest roils outside </a></li>
                                <li>10/17/25 @Ideastream: <a href="https://www.youtube.com/watch?v=NiXXO9hxoac" target="_blank"> The Future of Public Media 10.17.2025 </a></li>
                                <li>10/17/25 @Cleveland City Council: <a href="https://cityofcleveland.legistar.com/LegislationDetail.aspx?ID=7707538&GUID=06126760-CB74-4B35-AF1E-0C8679085DB8" target="_blank"> Emergency Resolution </a></li>
                                <li>10/16/25 @Cleveland Stater: <a href="https://clevelandstater.com/news/arts-features/why-wcsb-matters-me" target="_blank"> Why WCSB matters to me </a></li>
                                <li>10/16/25 @Cleveland.com: <a href="https://www.cleveland.com/education/2025/10/cleveland-state-gives-up-wcsb-radio-station-to-ideastream-for-free.html" target="_blank"> Cleveland State gives up WCSB radio station to Ideastream for free. Why? </a></li>
                                <li>10/16/25 @Signal Cleveland: <a href="https://signalcleveland.org/read-agreements-between-cleveland-state-ideastream-wcsb/" target="_blank"> Read the agreements between Cleveland State, Ideastream in WCSB deal </a></li>
                                <li>10/15/25 @Signal Cleveland: <a href="https://signalcleveland.org/cleveland-state-promotional-spots-ideastream-board-seat-in-wcsb-deal/" target="_blank"> Cleveland State gets promotional spots, Ideastream board seat in WCSB deal </a></li>
                                <li>10/14/25 @Current: <a href="https://current.org/2025/10/clevelands-ideastream-bolsters-jazz-programming-with-landmark-1m-donation-from-local-family/" target="_blank"> Cleveland’s Ideastream bolsters jazz programming with ‘landmark’ $1M donation from local family </a></li>
                                <li>10/14/25 @Ideastream: <a href="https://www.ideastream.org/show/sound-of-ideas/2025-10-14/csu-ideastream-leaders-address-controversy-over-switch-from-student-run-wcsb-to-jazzneo" target="_blank"> CSU, Ideastream leaders address controversy over switch from student-run WCSB to JazzNEO </a></li>
                                <li>10/14/25 @RAMP: <a href="https://ramp247.com/programming/college-radio-fights-for-its-rights/" target="_blank"> College Radio Fights For Its Rights </a></li>
                                <li>10/14/25 @The Current Year Records &amp; Tapes: <a href="https://www.youtube.com/watch?v=7Y2UhrtjCrY" target="_blank">WCSB 89.3FM DJs talk about the abrupt Cleveland radio station takeover that shook the community</a></li>
                                <li>10/12/25 @Cleveland.com: <a href="https://www.cleveland.com/opinion/2025/10/from-punk-rock-to-elevator-jazz-csu-traded-free-expression-for-easy-listening-leslie-kouba.html" target="_blank"> From punk rock to elevator jazz -- CSU traded free expression for easy listening: Leslie Kouba </a></li>
                                <li>10/11/25 @College Radio Foundation: <a href="https://www.collegeradio.org/calling-all-college-radio-stations-stand-with-xcsb/" target="_blank"> Calling all college radio stations: Stand with XCSB! </a></li>
                                <li>10/11/25 @Trash Flow Radio: <a href="https://www.mixcloud.com/ken-katkin/trash-flow-radio-oct-11-2025-rip-wcsb-fm-dave-cunningham-chris-dreja-sonny-curtis-viv-prince/" target="_blank"> Trash Flow Radio Oct 11, 2025 (start at 53:42) </a></li>
                                <li>10/9/25 @Cleveland.com: <a href="https://www.cleveland.com/letters/2025/10/beloved-cleveland-radio-station-going-silent-after-entertaining-music-fans-for-nearly-50-years.html" target="_blank"> Beloved Cleveland radio station going silent after entertaining music fans for nearly 50 years </a></li>
                                <li>10/9/25 @Cleveland.com: <a href="https://www.cleveland.com/news/2025/10/mike-dewine-wants-to-protect-kids-lawmakers-would-rather-protect-hemp-who-will-win-today-in-ohio.html" target="_blank"> Today In Ohio audio podcast - WCSB coverage starts at 9:00 mark</a></li>
                                <li>10/9/25 @Cleveland.com: <a href="https://www.cleveland.com/news/2025/10/college-radio-dies-in-silence-stealth-deal-turns-csu-student-station-into-a-jazz-channel.html" target="_blank"> College radio dies in silence: stealth deal turns CSU student station into a jazz channel </a></li>
                                <li>10/8/25 @Cleveland.com: <a href="https://www.cleveland.com/open/2025/10/cleveland-state-transfer-of-wcsb-radio-to-ideastream-sparks-protest.html" target="_blank"> Cleveland State transfer of WCSB radio to Ideastream sparks protest </a></li>
                                <li>10/8/25 @News 5 Cleveland: <a href="https://www.news5cleveland.com/news/local-news/cleveland-metro/csu-students-stage-silent-protest-over-radio-takeover" target="_blank"> CSU students stage silent protest over radio takeover </a></li>
                                <li>10/8/25 @The Cauldron: <a href="https://csu-cauldron.com/2025/10/08/students-and-community-members-silently-protest-ideastreams-takeover-of-wcsb-student-run-radio-station-in-csu-courtyard/" target="_blank"> Students and community members silently protest Ideastream’s takeover of WCSB student-run radio station in CSU courtyard </a></li>
                                <li>10/8/25 @CoolCleveland: <a href="https://coolcleveland.com/2025/10/an-outlet-for-music-variety-goes-dark-as-college-radio-station-wcsb-becomes-jazzneo/" target="_blank">An Outlet for Music Diversity Goes Dark as College Radio Station WCSB Becomes 'JazzNEO'</a></li>
                                <li>10/8/25 @Metal Command Podcast: <a href="https://www.youtube.com/watch?v=AULQgw2Tydc" target="_blank">The Voices of WCSB 89.3 Were Silenced for Personal Gain at the Expense of The Community</a></li>
                                <li>10/7/25 @John Chacona Writes: <a href="https://johnchacona.com/excuse-me-but-youre-on-mute/" target="_blank">Excuse me, but you’re on mute</a></li>
                                <li>10/7/25/25 @InsideRadio: <a href="https://www.insideradio.com/free/cleveland-state-s-wcsb-switches-to-jazz-under-ideastream-agreement/article_9b3e6f1e-0579-4811-a61b-41f924857926.html" target="_blank">Cleveland State’s WCSB Switches To Jazz Under Ideastream Agreement</a></li>
                                <li>10/7/25 @Ideastream: <a href="https://www.ideastream.org/education/2025-10-07/community-members-join-cleveland-state-students-alumni-to-protest-end-of-student-run-radio" target="_blank"> Community members join Cleveland State students, alumni to protest end of student-run radio </a></li>
                                <li>10/7/25 @WKYC: <a href="https://www.wkyc.com/article/news/local/cleveland/cleveland-state-university-wcsb-rally-ideastream-take-over-jazzneo/95-1e2d5706-e4de-4935-a9e8-a982084deb72" target="_blank"> Students, alumni gather at Cleveland State University for silent rally following changes to WCSB </a></li>
                                <li>10/6/25 @The 216 Scoop: <a href="https://www.the216scoop.com/p/cleveland-s-cultural-gem-in-jeopardy" target="_blank"> CSU, Ideastream collude to kill a Cleveland cultural jewel </a></li>
                                <li>10/6/25 @Cleveland City Council: <a href="https://www.youtube.com/watch?v=maHLrLHrVoU&t=4260s" target="_blank">Statements from Council members Kristopher Harsh and Mike Polensek</a></li>
                                <li>10/5/25 @NEOhio: <a href="https://neohio.news/2025/10/05/csu-ends-50-year-student-radio-station-hands-fm-signal-to-ideastream-for-jazz-programming/" target="_blank"> CSU Ends 50-Year Student Radio Station, Hands FM Signal to Ideastream for Jazz Programming </a></li>
                                <li>10/5/25 @Radio Ink: <a href="https://radioink.com/2025/10/05/clevelands-wcsb-loses-student-programming-joins-ideastream/" target="_blank"> Cleveland’s WCSB Loses Student Programming, Joins Ideastream </a></li>
                                <li>10/3/25 @Cleveland Scene: <a href="https://www.clevescene.com/news/cleveland-news/cleveland-state-university-kills-wcsb-transfers-license-to-ideastream-to-broadcast-smooth-jazz/" target="_blank"> Cleveland State University Kills WCSB, Transfers Management of Station to Ideastream to Broadcast Jazz </a></li>
                                <li>10/3/25 @The Cleveland Stater: <a href="https://clevelandstater.com/news/news/csu-shuts-down-student-led-wcsb-hands-control-ideastream" target="_blank">CSU shuts down student-led WCSB, hands control to Ideastream</a></li>
                                <li>10/3/25 @Radio Online: <a href="https://news.radio-online.com/cgi-bin/rol.exe/headline_id=n47944" target="_blank">Ideastream, CSU Flip WCSB to JazzNEO in Cleveland</a></li>
                                <li>10/3/25 @RadioInsight: <a href="https://radioinsight.com/headlines/309645/ideastream-public-media-to-operate-wcsb-cleveland-flips-to-jazz/" target="_blank">Ideastream Public Media To Operate WCSB Cleveland; Flips To Jazz</a></li>
                                <li>10/3/25 @Fox 8: <a href="https://fox8.com/news/cleveland-state-universitys-student-run-radio-station-wcsb-is-no-more/" target="_blank"> Cleveland State University’s student-run radio station WCSB is no more </a></li>
                                <li>10/3/25 @Ideastream: <a href="https://www.ideastream.org/community/2025-10-03/cleveland-state-radio-flips-to-jazz-under-deal-with-ideastream-public-media-students-express-shock" target="_blank"> Cleveland State radio flips to jazz under deal with Ideastream Public Media, students express shock </a></li>
                                <li>10/3/25 @News 5 Cleveland: <a href="https://www.news5cleveland.com/news/local-news/cleveland-state-university-abruptly-ends-student-run-wcsb-radio-replaces-with-smooth-jazz-run-by-ideastream" target="_blank"> Cleveland State University abruptly ends student-run WCSB radio, replaces with jazz run by Ideastream </a></li>
                                <li>10/3/25 @Signal Cleveland: <a href="https://signalcleveland.org/ideastream-cleveland-state-student-radio-station-wcsb/" target="_blank"> Ideastream takes over Cleveland State’s student-run radio station </a></li>
                                <li>10/3/25 @The Land: <a href="https://thelandcle.org/stories/ideastream-takes-over-programming-at-wcsb-formerly-cleveland-state-universitys-student-run-radio-station/" target="_blank"> Ideastream now programming WCSB, formerly Cleveland State University’s student-run radio station </a></li>
                            </ul>
                            <p>Thanks to XCSB community member Scott Heisel, and listener David Badagnani, for helping to collect all these links. If you know of a media story we missed, we'd <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuZGMhsIxAp9tgJNdoMj8XGLEEDziN7e5vDL9rzueMeBOlCg/viewform?usp=sharing&ouid=112300019516835569689" target="_blank">love to hear from you!</a> </p>
                        </div>
                    </div>
                    <section id="CleveCityCouncil" style={{marginBottom:"60px", width:"100%"}} className="clearfix">
                        <hr />
                        <h2 style={{width:"100%", clear:"both"}}>The Community Speaks Out!</h2>
                        <div className="grid_4">
                            <h3>City Council Supports us!</h3>
                            <p><em>(10/21/2025)</em>&nbsp; Cleveland City Council unanimously passed <a href="images/CleveCityCouncilResolution1324-2025_inSupportOfWCSB.pdf" target="_blank">Resolution No. 1324-2025</a> in support of student and community programming on WCSB 89.3, and urging CSU to return the station to its students. A record number of public comments in favor of this resolution were received by City Council prior to this vote - your voices are being heard! Thank you all so much, keep it up!</p>
                        </div>
                        <div className="grid_8">
                            {/* TODO: This needs to be its own component */}
                            <iframe src="xcsb-mediaCoverage-cityCouncilComments_iframe.html" width="100%" height="600" style={{border:"1px solid black"}}></iframe>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default MediaCoverage

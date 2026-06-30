import { useState } from 'react'
import './programs.css'
import MasterRadio from "../../assets/channelMasterRadio_300t.png"

function Programs(props) {
    return (
        <div className="programs-container">
            <section id="hero" class="clearfix">
                {/* <!-- responsive FlexSlider image slideshow --> */}
                <div class="wrapper">
                    <div class="row">
                        <div class="grid_8">
                            <h1><em>Program Detail</em></h1>
                            <p><i>So close!!</i> &nbsp;beta test of a page for show descriptions &amp; links to archived show.</p>

                        </div>
                        <div class="grid_4 rightfloat">
                            <img src={MasterRadio} />
                        </div>
                    </div>
                </div>
            </section>
            <div id="main" class="wrapper">
                <section id="content" class="wide-content">
                    <div id="story" class="row">
                        <section id="columnsdemo" style={{marginBottom:"60px", width:"100%"}} className="clearfix">
                            <h2 style={{width:"100%", clear:"both"}}>This week on XCSB</h2>
                            <div class="table_programgrid" role="region" tabindex="0">
                                <div class="table_programgrid" role="region" tabindex="0">
                                    <table>
                                        <caption>programSchedule.csv</caption>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '10%' }}>StartTime1</th>
                                                <th style={{ width: '20%' }}>Show</th>
                                                <th style={{ width: "20%" }}>Programmer</th>
                                                <th style={{ width: "30%" }}>Description/genre</th>
                                                <th style={{ width: "20%" }}>Download Last Show </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colspan='5'>SUNDAY</td>
                                            </tr>
                                            <tr>
                                                <td>12:00 AM</td>
                                                <td>Duppy Echoes</td>
                                                <td>Hama Bbela</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 AM</td>
                                                <td>Over the Hump</td>
                                                <td>DJ Schlippy (Leann)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>4:00 AM</td>
                                                <td>The Ill Nation</td>
                                                <td>Docta ILL (Ivan Lee)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>7:00 AM</td>
                                                <td>The Ray Carr Show</td>
                                                <td>Ray Carr as DJ Ray</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>9:00 AM</td>
                                                <td>Songs and Melodies from Beautiful Slovenia</td>
                                                <td>Ed Mejac</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>10:00 AM</td>
                                                <td>Cleveland German Radio Show</td>
                                                <td>David and Ambassador Renate (Jakupca)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 PM</td>
                                                <td>Sustainable Love Pentangle</td>
                                                <td>Audrey (Helen von Schneider)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 PM</td>
                                                <td>Music of Sci-Fi and Fantasy</td>
                                                <td>Mark Manolio</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>3:00 PM</td>
                                                <td>Halfway Cottages</td>
                                                <td>Andy &amp; Steve</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>5:00 PM</td>
                                                <td>Rudie’s Hi-Fi</td>
                                                <td>Tommy Fox</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>7:00 PM</td>
                                                <td>African Abstract</td>
                                                <td>Kabir Syed</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>9:00 PM</td>
                                                <td>Crap Radio (Part1)</td>
                                                <td>Keith</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>

                                            <tr>
                                                <td colspan='5'>MONDAY</td>
                                            </tr>
                                            <tr>
                                                <td>12:00 AM</td>
                                                <td>Crap Radio (Part2)</td>
                                                <td>Keith</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 AM</td>
                                                <td>OTE How Radio Was Done</td>
                                                <td></td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>5:00 AM</td>
                                                <td>Sheridan Review</td>
                                                <td>Bob Sheridan</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>6:00 AM</td>
                                                <td>Live Lost Traxxx</td>
                                                <td>JimiimiJ</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>7:00 AM</td>
                                                <td>Odd Girl Hour</td>
                                                <td>Niknak (Nicole W)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>9:00 AM</td>
                                                <td>Waking the Intonarumori</td>
                                                <td>bbob</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>11:00 AM</td>
                                                <td>The All New JibNation</td>
                                                <td>John Templeman</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 PM</td>
                                                <td>666oz of Madness</td>
                                                <td>Adam Reynolds</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 PM</td>
                                                <td>The Xainstead Show</td>
                                                <td>Steve Wainstead</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>4:00 PM</td>
                                                <td>Skid Row</td>
                                                <td>Chris Kofron</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>6:00 PM</td>
                                                <td>Land Beyond the Sun</td>
                                                <td>Captain Midnight (William Ream)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>8:00 PM</td>
                                                <td>The Brewing Luminous</td>
                                                <td>Dr. O (Tom Orange)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>10:00 PM</td>
                                                <td>This is Metal</td>
                                                <td>Bob Delchin</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>

                                            <tr>
                                                <td colspan='5'>TUESDAY</td>
                                            </tr>

                                            <tr>
                                                <td>12:00 AM</td>
                                                <td>The AbuGhoul Radio Hour</td>
                                                <td>Charbel Zakharia</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>1:00 AM</td>
                                                <td>This Week in Time Travel</td>
                                                <td>Tim Ski</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>3:00 AM</td>
                                                <td>Hour of Slack</td>
                                                <td>Reverend Ivan Stang</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>6:00 AM</td>
                                                <td>The Hungarian Hour</td>
                                                <td>Walt and Elizabeth</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>8:00 AM</td>
                                                <td>Insert Name Here</td>
                                                <td>Jerry Koenigsmark</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>10:00 AM</td>
                                                <td>Roots of the Underground</td>
                                                <td>Scary Ellen Tomazic</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>11:00 AM</td>
                                                <td>Heart Start</td>
                                                <td>Annika Norton</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 PM</td>
                                                <td>Stormy Weather</td>
                                                <td>Jen Weathers</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>1:00 PM</td>
                                                <td>The Little Lighthouse</td>
                                                <td>Stanislav Zabic</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 PM</td>
                                                <td>Highs in the 60s</td>
                                                <td>Jim Wilson </td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>4:00 PM</td>
                                                <td>Monster Boogie Ska</td>
                                                <td>Joe Harant</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>6:00 PM</td>
                                                <td>Fast &amp; Bulbous</td>
                                                <td>Ennio Galucci</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>8:00 PM</td>
                                                <td>What The Folk Is This ?</td>
                                                <td>DJ Belladonna (Connie Harant)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>10:00 PM</td>
                                                <td>Good Morning Metal</td>
                                                <td>Alex Howe</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>

                                            <tr>
                                                <td colspan='5'>WEDNESDAY</td>
                                            </tr>

                                            <tr>
                                                <td>6:00 AM</td>
                                                <td>Asia Pop Program</td>
                                                <td>Yue Li</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>8:00 AM</td>
                                                <td>Scottify</td>
                                                <td>Scott Heisel</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>10:00 AM</td>
                                                <td>Moron Jubilee</td>
                                                <td>Chris Klasa</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 PM</td>
                                                <td>See You in Hell</td>
                                                <td>Shelley</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>9:00 PM</td>
                                                <td>Ride the Accident</td>
                                                <td>Archive Angel (Dave Bachner)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>11:00 PM</td>
                                                <td>James Ambrose</td>
                                                <td>James Ambrose</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 AM</td>
                                                <td>The Ray Carr Show</td>
                                                <td>Ray Carr as DJ Ray</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 AM</td>
                                                <td>Waking the Intonarumori</td>
                                                <td>bbob</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 PM</td>
                                                <td>The Ill Nation</td>
                                                <td>Docta ILL (Ivan Lee)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>4:00 PM</td>
                                                <td>Over the Hump</td>
                                                <td>DJ Schlippy (Leann)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>6:00 PM</td>
                                                <td>Songs and Melodies from Beautiful Slovenia</td>
                                                <td>Ed Mejac</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>7:00 PM</td>
                                                <td>Duppy Echoes</td>
                                                <td>Hama Bbela</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>

                                            <tr>
                                                <td colspan='5'>THURSDAY</td>
                                            </tr>

                                            <tr>
                                                <td>12:00 AM</td>
                                                <td>The Xainstead Show</td>
                                                <td>Steve Wainstead</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 AM</td>
                                                <td>Insert Name Here</td>
                                                <td>Jerry Koenigsmark</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>7:00 AM</td>
                                                <td>African Abstract</td>
                                                <td>Kabir Syed</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>9:00 AM</td>
                                                <td>The Brewing Luminous</td>
                                                <td>Dr. O (Tom Orange)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>11:00 AM</td>
                                                <td>The AbuGhoul Radio Hour</td>
                                                <td>Charbel Zakharia</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 PM</td>
                                                <td>Halfway Cottages</td>
                                                <td>Andy &amp; Steve</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 PM</td>
                                                <td>This is Metal</td>
                                                <td>Bob Delchin</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>4:00 PM</td>
                                                <td>What The Folk Is This ?</td>
                                                <td>DJ Belladonna (Connie Harant)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>6:00 PM</td>
                                                <td>The All New JibNation</td>
                                                <td>John Templeman</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>7:00 PM</td>
                                                <td>Music of Sci-Fi and Fantasy</td>
                                                <td>Mark Manolio</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>8:00 PM</td>
                                                <td>This Week in Time Travel</td>
                                                <td>Tim Ski</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>10:00 PM</td>
                                                <td>Sustainable Love Pentangle</td>
                                                <td>Audrey (Helen von Schneider)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>

                                            <tr>
                                                <td colspan='5'>FRIDAY</td>
                                            </tr>

                                            <tr>
                                                <td>12:00 AM</td>
                                                <td>See You in Hell</td>
                                                <td>Shelley</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 AM</td>
                                                <td>Live Lost Traxxx</td>
                                                <td>JimiimiJ</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>7:00 AM</td>
                                                <td>Good Morning Metal</td>
                                                <td>Alex Howe</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>10:00 AM</td>
                                                <td>Asia Pop Program</td>
                                                <td>Yue Li</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 PM</td>
                                                <td>James Ambrose</td>
                                                <td>James Ambrose</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>1:00 PM</td>
                                                <td>Rudie’s Hi-Fi</td>
                                                <td>Tommy Fox</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>3:00 PM</td>
                                                <td>Land Beyond the Sun</td>
                                                <td>Captain Midnight (William Ream)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>5:00 PM</td>
                                                <td>Odd Girl Hour</td>
                                                <td>Niknak (Nicole W)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>7:00 PM</td>
                                                <td>Moron Jubilee</td>
                                                <td>Chris Klasa</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>9:00 AM</td>
                                                <td>Public Affairs</td>
                                                <td>Public Affairs</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>9:00 PM</td>
                                                <td>The Record Exchange Rides Again (Part1)</td>
                                                <td>Mr. Friday Night Special, the Late Night Sensation (Ryan Kuehn)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 AM</td>
                                                <td>The Record Exchange Rides Again (Part2)</td>
                                                <td>Mr. Friday Night Special, the Late Night Sensation (Ryan Kuehn)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>7:00 AM</td>
                                                <td>The Little Lighthouse</td>
                                                <td>Stanislav Zabic</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>8:00 AM</td>
                                                <td>Cleveland German Radio Show</td>
                                                <td>David and Ambassador Renate (Jakupca)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>10:00 AM</td>
                                                <td>The Hungarian Hour</td>
                                                <td>Walt and Elizabeth</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 PM</td>
                                                <td>Monster Boogie Ska</td>
                                                <td>Joe Harant</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>2:00 PM</td>
                                                <td>Fast &amp; Bulbous</td>
                                                <td>Ennio Galucci</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>4:00 PM</td>
                                                <td>Highs in the 60s</td>
                                                <td>Jim Wilson </td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>6:00 PM</td>
                                                <td>Scottify</td>
                                                <td>Scott Heisel</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>8:00 PM</td>
                                                <td>666oz of Madness</td>
                                                <td>Adam Reynolds</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td>10:00 PM</td>
                                                <td>Skid Row</td>
                                                <td>Chris Kofron</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Crap Radio (Part1)</td>
                                                <td>Keith</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Crap Radio (Part2)</td>
                                                <td>Keith</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>OTE How Radio Was Done</td>
                                                <td></td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Sheridan Review</td>
                                                <td>Bob Sheridan</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Hour of Slack</td>
                                                <td>Reverend Ivan Stang</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Roots of the Underground</td>
                                                <td>Scary Ellen Tomazic</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Heart Start</td>
                                                <td>Annika Norton</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Stormy Weather</td>
                                                <td>Jen Weathers</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Ride the Accident</td>
                                                <td>Archive Angel (Dave Bachner)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td><td>Public Affairs</td>
                                                <td>Public Affairs</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>The Record Exchange Rides Again (Part1)</td>
                                                <td>Mr. Friday Night Special, the Late Night Sensation (Ryan Kuehn)</td>
                                                <td>[your show description goes here]</td>
                                                <td><a href="##" class="buttonlink">Archive 1</a><a href="##" class="buttonlink">Archive 2</a></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>The Record Exchange Rides Again (Part2)</td>
                                                <td>Mr. Friday Night Special, the Late Night Sensation (Ryan Kuehn)</td>
                                                <td>[your show description goes here]</td>
                                                <td>~~xx~~</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Programs

import { useState } from 'react'
import './programs.css'
import MasterRadio from "../../assets/channelMasterRadio_300t.png"

function Programs(props) {
    return (
        <div className="programs-container">
            <div id="main" class="wrapper">
                <section id="content" class="wide-content">
                    <div id="story" class="row">
                            <section id="hero" class="clearfix">
        <div class="wrapper">
            <div class="row">
                <div class="grid_8">
                    <h1><em>Program Detail</em></h1>
                    <p><i>Time travel is real!!</i><br /> Miss your favorite show? Here's a list of our programs, 
                    click on the link on the right to go back in time and listen to the most recently aired show!</p>
                    <table width="80%">
                        <tbody>
                            <tr>
                                <td><a href="#sunday">Sunday</a></td>
                                <td><a href="#monday">Monday</a></td>
                                <td><a href="#tuesday">Tuesday</a></td>
                                <td><a href="#wednesday">Wednesday</a></td>
                                <td><a href="#thursday">Thursday</a></td>
                                <td><a href="#friday">Friday</a></td>
                                <td><a href="#saturday">Saturday</a></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="grid_4 rightfloat">
                    <img src={MasterRadio} />
                </div>
            </div>
        </div>
    </section>


    <div id="main" class="wrapper">
        <section id="content" class="wide-content">
            <div class="table_programgrid">
                <table>
                    <thead>
                        <tr id="sunday" class="day-header">
                            <td colspan="4">SUNDAY</td>
                        </tr>
                        <tr>
                            <th>Time</th>
                            <th>Show</th>
                            <th>Programmer</th>

                            <th>Archive</th>
                        </tr>
                    </thead>
                        <tr>
                            <td>12:00 AM</td>
                            <td>Duppy Echoes</td>
                            <td>Hama Bbela</td>

                            <td><span class="listenbutton" onclick="playArchive('Duppy Echoes', 'Sunday', '00:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>2:00 AM</td>
                            <td>Over the Hump</td>
                            <td>Le Schlippy</td>

                            <td><span class="listenbutton" onclick="playArchive('Over the Hump', 'Sunday', '02:00')">Listen</span></td>
                        </tr>

                        <tr>
                            <td>7:00 AM</td>
                            <td>The Ray Carr Show</td>
                            <td>DJ Ray</td>

                            <td><span class="listenbutton" onclick="playArchive('The Ray Carr Show', 'Sunday', '07:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>9:00 AM</td>
                            <td>Songs and Melodies from Slovenia</td>
                            <td>Ed Mejac</td>

                            <td><span class="listenbutton" onclick="playArchive('Songs and Melodies from Beautiful Slovenia', 'Sunday', '09:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>10:00 AM</td>
                            <td>Cleveland German Radio Show</td>
                            <td>David and Renate</td>

                            <td><span class="listenbutton" onclick="playArchive('Cleveland German Radio Show', 'Sunday', '10:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>12:00 PM</td>
                            <td>This Week in Time Travel</td>
                            <td>Timski</td>

                            <td><span class="listenbutton" onclick="playArchive('This Week in Time Travel', 'Sunday', '12:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>2:00 PM</td>
                            <td>Music of Sci-Fi and Fantasy</td>
                            <td>Mark Manolio</td>

                            <td><span class="listenbutton" onclick="playArchive('Music of Sci-Fi and Fantasy', 'Sunday', '14:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>3:00 PM</td>
                            <td>Halfway Cottages</td>
                            <td>Andy &amp; Steve</td>

                            <td><span class="listenbutton" onclick="playArchive('Halfway Cottages', 'Sunday', '15:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>5:00 PM</td>
                            <td>Rudie’s Hi-Fi</td>
                            <td>Tommy Fox</td>

                            <td><span class="listenbutton" onclick="playArchive('Rudie’s Hi-Fi', 'Sunday', '17:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>7:00 PM</td>
                            <td>African Abstract</td>
                            <td>Kabir Syed</td>

                            <td><span class="listenbutton" onclick="playArchive('African Abstract', 'Sunday', '19:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>9:00 PM</td>
                            <td>Crap Radio (Part 1)</td>
                            <td>Keith</td>

                            <td><span class="listenbutton" onclick="playArchive('Crap Radio (Part1)', 'Sunday', '21:00')">Listen</span></td>
                        </tr>

                        <tr colspan="4" class="spacer">
                            <td colspan="4" class="spacer">&nbsp;</td>
                        </tr>

                        <thead>
                            <tr id="monday" class="day-header">
                                <td colspan="4">MONDAY</td>
                            </tr>
                            <tr>
                                <th>Time</th>
                                <th>Show</th>
                                <th>Programmer</th>

                                <th>Archive</th>
                            </tr>
                        </thead>

                        <tr>
                            <td>12:00 AM</td>
                            <td>Crap Radio (Part 2)</td>
                            <td>Keith</td>

                            <td><span class="listenbutton" onclick="playArchive('Crap Radio (Part2)', 'Monday', '00:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>2:00 AM</td>
                            <td>OTE How Radio Was Done</td>
                            <td>Negativeland</td>

                            <td><span class="listenbutton" onclick="playArchive('OTE How Radio Was Done', 'Monday', '02:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>5:00 AM</td>
                            <td>Sheridan Review</td>
                            <td>Bob Sheridan</td>

                            <td><span class="listenbutton" onclick="playArchive('Sheridan Review', 'Monday', '05:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>6:00 AM</td>
                            <td>Live Lost Traxxx</td>
                            <td>JimiimiJ</td>

                            <td><span class="listenbutton" onclick="playArchive('Live Lost Traxxx', 'Monday', '06:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>7:00 AM</td>
                            <td>Odd Girl Hour</td>
                            <td>Niknak</td>

                            <td><span class="listenbutton" onclick="playArchive('Odd Girl Hour', 'Monday', '07:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>9:00 AM</td>
                            <td>Waking the Intonarumori</td>
                            <td>bbob</td>

                            <td><span class="listenbutton" onclick="playArchive('Waking the Intonarumori', 'Monday', '09:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>11:00 AM</td>
                            <td>The All New JibNation</td>
                            <td>John Templeman</td>

                            <td><span class="listenbutton" onclick="playArchive('The All New JibNation', 'Monday', '11:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>12:00 PM</td>
                            <td>666oz of Madness</td>
                            <td>Adam Reynolds</td>

                            <td><span class="listenbutton" onclick="playArchive('666oz of Madness', 'Monday', '12:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>2:00 PM</td>
                            <td>The Xainstead Show</td>
                            <td>Steve Wainstead</td>

                            <td><span class="listenbutton" onclick="playArchive('The Xainstead Show', 'Monday', '14:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>4:00 PM</td>
                            <td>Skid Row</td>
                            <td>Chris Kofron</td>

                            <td><span class="listenbutton" onclick="playArchive('Skid Row', 'Monday', '16:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>6:00 PM</td>
                            <td>Land Beyond the Sun</td>
                            <td>William Ream</td>

                            <td><span class="listenbutton" onclick="playArchive('Land Beyond the Sun', 'Monday', '18:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>8:00 PM</td>
                            <td>The Brewing Luminous</td>
                            <td>Dr. O</td>

                            <td><span class="listenbutton" onclick="playArchive('The Brewing Luminous', 'Monday', '20:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>10:00 PM</td>
                            <td>This is Metal</td>
                            <td>Bob Delchin</td>

                            <td><span class="listenbutton" onclick="playArchive('This is Metal', 'Monday', '22:00')">Listen</span></td>
                        </tr>

                        <tr colspan="4" class="spacer">
                            <td colspan="4" class="spacer">&nbsp;</td>
                        </tr>

                        <thead>
                            <tr id="tuesday" class="day-header">
                                <td colspan="4">TUESDAY</td>
                            </tr>
                            <tr>
                                <th>Time</th>
                                <th>Show</th>
                                <th>Programmer</th>

                                <th>Archive</th>
                            </tr>
                        </thead>

                        <tr>
                            <td>12:00 AM</td>
                            <td>The AbuGhoul Radio Hour</td>
                            <td>Charbel Zakharia</td>

                            <td><span class="listenbutton" onclick="playArchive('The AbuGhoul Radio Hour', 'Tuesday', '00:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>6:00 AM</td>
                            <td>The Hungarian Hour</td>
                            <td>Walt &amp; Elizabeth</td>

                            <td><span class="listenbutton" onclick="playArchive('The Hungarian Hour', 'Tuesday', '06:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>8:00 AM</td>
                            <td>Insert Name Here</td>
                            <td>Jerry Koenigsmark</td>

                            <td><span class="listenbutton" onclick="playArchive('Insert Name Here', 'Tuesday', '08:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>10:00 AM</td>
                            <td>Stormy Weathers</td>
                            <td>Jen</td>

                            <td><span class="listenbutton" onclick="playArchive('Stormy Weathers', 'Tuesday', '10:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>12:00 AM</td>
                            <td>Heart Start</td>
                            <td>Annika Norton</td>

                            <td><span class="listenbutton" onclick="playArchive('Heart Start', 'Tuesday', '12:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>1:00 PM</td>
                            <td>The Little Lighthouse</td>
                            <td>Stanislav</td>

                            <td><span class="listenbutton" onclick="playArchive('The Little Lighthouse', 'Tuesday', '13:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>2:00 PM</td>
                            <td>Highs in the 60s</td>
                            <td>Jim Wilson</td>

                            <td><span class="listenbutton" onclick="playArchive('Highs in the 60s', 'Tuesday', '14:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>4:00 PM</td>
                            <td>Monster Boogie Ska</td>
                            <td>Joe Harant</td>

                            <td><span class="listenbutton" onclick="playArchive('Monster Boogie Ska', 'Tuesday', '16:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>6:00 PM</td>
                            <td>Fast &amp; Bulbous</td>
                            <td>Ennio Galucci</td>

                            <td><span class="listenbutton" onclick="playArchive('Fast & Bulbous', 'Tuesday', '18:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>8:00 PM</td>
                            <td>What The Folk Is This?</td>
                            <td>Connie Harant</td>

                            <td><span class="listenbutton" onclick="playArchive('What The Folk Is This ?', 'Tuesday', '20:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>10:00 PM</td>
                            <td>Good Morning Metal</td>
                            <td>Alex Howe</td>

                            <td><span class="listenbutton" onclick="playArchive('Good Morning Metal', 'Tuesday', '22:00')">Listen</span></td>
                        </tr>

                        <tr colspan="4" class="spacer">
                            <td colspan="4" class="spacer">&nbsp;</td>
                        </tr>

                        <thead>
                            <tr id="wednesday" class="day-header">
                                <td colspan="4">WEDNESDAY</td>
                            </tr>
                            <tr>
                                <th>Time</th>
                                <th>Show</th>
                                <th>Programmer</th>

                                <th>Archive</th>
                            </tr>
                        </thead>

                        <tr>
                            <td>12:00 AM</td>
                            <td>Hour of Slack</td>
                            <td>Ivan Stang</td>

                            <td><span class="listenbutton" onclick="playArchive('Hour of Slack', 'Wednesday', '00:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>6:00 AM</td>
                            <td>Asia Pop Program</td>
                            <td>DJ Li</td>

                            <td><span class="listenbutton" onclick="playArchive('Asia Pop Program', 'Wednesday', '06:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>8:00 AM</td>
                            <td>Scottify</td>
                            <td>Scott</td>
                            <td><span class="listenbutton" onclick="playArchive('Scottify', 'Wednesday', '08:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>10:00 AM</td>
                            <td>Moron Jubilee</td>
                            <td>Mr. Suit</td>

                            <td><span class="listenbutton" onclick="playArchive('Moron Jubilee', 'Wednesday', '10:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>12:00 PM</td>
                            <td>See You in Hell</td>
                            <td>Shelley</td>

                            <td><span class="listenbutton" onclick="playArchive('See You in Hell', 'Wednesday', '12:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>2:00 PM</td>
                            <td>The Ray Carr Show (R)</td>
                            <td>Ray Carr</td>

                            <td><span class="listenbutton" onclick="playArchive('The Ray Carr Show', 'Wednesday', '14:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>4:00 PM</td>
                            <td>Over the Hump (R)</td>
                            <td>Le Schlippy</td>

                            <td><span class="listenbutton" onclick="playArchive('Over the Hump', 'Wednesday', '16:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>6:00 PM</td>
                            <td>Songs and Melodies from Slovenia</td>
                            <td>Ed Mejac</td>

                            <td><span class="listenbutton" onclick="playArchive('Songs and Melodies from Slovenia', 'Wednesday', '18:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>7:00 PM</td>
                            <td>Duppy Echoes (R)</td>
                            <td>Hama Bbela</td>

                            <td><span class="listenbutton" onclick="playArchive('Duppy Echoes', 'Wednesday', '19:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>9:00 PM</td>
                            <td>Ride the Accident</td>
                            <td>Archive Angel</td>

                            <td><span class="listenbutton" onclick="playArchive('Ride the Accident', 'Wednesday', '21:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>11:00 PM</td>
                            <td>Evil Gnome</td>
                            <td>James</td>

                            <td><span class="listenbutton" onclick="playArchive('Evil Gnome', 'Wednesday', '23:00')">Listen</span></td>
                        </tr>

                        <tr colspan="4" class="spacer">
                            <td colspan="4" class="spacer">&nbsp;</td>
                        </tr>

                        <thead>
                            <tr id="thursday" class="day-header">
                                <td colspan="4">THURSDAY</td>
                            </tr>
                            <tr>
                                <th>Time</th>
                                <th>Show</th>
                                <th>Programmer</th>

                                <th>Archive</th>
                            </tr>
                        </thead>

                        <tr>
                            <td>12:00 AM</td>
                            <td>The Xainstead Show (R)</td>
                            <td>Steve Wainstead</td>

                            <td><span class="listenbutton" onclick="playArchive('The Xainstead Show', 'Thursday', '00:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>2:00 AM</td>
                            <td>Insert Name Here (R)</td>
                            <td>Jerry Koenigsmark</td>

                            <td><span class="listenbutton" onclick="playArchive('Insert Name Here', 'Thursday', '02:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>7:00 AM</td>
                            <td>African Abstract (R)</td>
                            <td>Kabir Syed</td>

                            <td><span class="listenbutton" onclick="playArchive('African Abstract', 'Thursday', '07:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>9:00 AM</td>
                            <td>The Brewing Luminous (R)</td>
                            <td>Dr. O</td>

                            <td><span class="listenbutton" onclick="playArchive('The Brewing Luminous', 'Thursday', '09:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>11:00 AM</td>
                            <td>The AbuGhoul Radio Hour (R)</td>
                            <td>Charbel Zakharia</td>

                            <td><span class="listenbutton" onclick="playArchive('The AbuGhoul Radio Hour', 'Thursday', '11:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>12:00 PM</td>
                            <td>Halfway Cottages (R)</td>
                            <td>Andy &amp; Steve</td>

                            <td><span class="listenbutton" onclick="playArchive('Halfway Cottages', 'Thursday', '12:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>2:00 PM</td>
                            <td>This is Metal (R)</td>
                            <td>Bob Delchin</td>

                            <td><span class="listenbutton" onclick="playArchive('This is Metal', 'Thursday', '14:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>4:00 PM</td>
                            <td>What The Folk Is This? (R)</td>
                            <td>Connie Harant</td>

                            <td><span class="listenbutton" onclick="playArchive('What The Folk Is This ?', 'Thursday', '16:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>6:00 PM</td>
                            <td>The All New JibNation (R)</td>
                            <td>John Templeman</td>

                            <td><span class="listenbutton" onclick="playArchive('The All New JibNation', 'Thursday', '18:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>7:00 PM</td>
                            <td>Music of Sci-Fi and Fantasy (R)</td>
                            <td>Mark Manolio</td>

                            <td><span class="listenbutton" onclick="playArchive('Music of Sci-Fi and Fantasy', 'Thursday', '19:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>8:00 PM</td>
                            <td>This Week in Time Travel (R)</td>
                            <td>Timski</td>

                            <td><span class="listenbutton" onclick="playArchive('This Week in Time Travel', 'Thursday', '20:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>10:00 PM</td>
                            <td>Waking the Intonarumori (R)</td>
                            <td>bbob</td>

                            <td><span class="listenbutton" onclick="playArchive('Waking the Intonarumori', 'Thursday', '22:00')">Listen</span></td>
                        </tr>

                        <tr colspan="4" class="spacer">
                            <td colspan="4" class="spacer">&nbsp;</td>
                        </tr>


                        <thead>
                            <tr id="friday" class="day-header">
                                <td colspan="4">FRIDAY</td>
                            </tr>
                            <tr>
                                <th>Time</th>
                                <th>Show</th>
                                <th>Programmer</th>

                                <th>Archive</th>
                            </tr>
                        </thead>

                        <tr>
                            <td>12:00 AM</td>
                            <td>See You in Hell (R)</td>
                            <td>Shelley</td>

                            <td><span class="listenbutton" onclick="playArchive('See You in Hell', 'Friday', '00:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>2:00 AM</td>
                            <td>Live Lost Traxxx (R)</td>
                            <td>JimiimiJ</td>

                            <td><span class="listenbutton" onclick="playArchive('Live Lost Traxxx', 'Friday', '02:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>7:00 PM</td>
                            <td>Good Morning Metal (R)</td>
                            <td>Alex Howe</td>

                            <td><span class="listenbutton" onclick="playArchive('Good Morning Metal', 'Friday', '07:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>9:00 PM</td>
                            <td>Radio Ecoshock</td>
                            <td>Alex Smith</td>

                            <td><span class="listenbutton" onclick="playArchive('Radio Ecoshock', 'Friday', '09:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>10:00 AM</td>
                            <td>Asia Pop Program (R)</td>
                            <td>DJ Li</td>

                            <td><span class="listenbutton" onclick="playArchive('Asia Pop Program', 'Friday', '10:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>12:00 PM</td>
                            <td>Evil Gnome (R)</td>
                            <td>James</td>

                            <td><span class="listenbutton" onclick="playArchive('Evil Gnome', 'Friday', '12:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>1:00 PM</td>
                            <td>Rudie’s Hi-Fi (R)</td>
                            <td>Tommy Fox</td>

                            <td><span class="listenbutton" onclick="playArchive('Rudie’s Hi-Fi', 'Friday', '13:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>3:00 PM</td>
                            <td>Land Beyond the Sun (R)</td>
                            <td>William Ream</td>

                            <td><span class="listenbutton" onclick="playArchive('Land Beyond the Sun', 'Friday', '15:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>5:00 PM</td>
                            <td>Odd Girl Hour</td>
                            <td>Niknak</td>

                            <td><span class="listenbutton" onclick="playArchive('Odd Girl Hour', 'Friday', '17:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>7:00 PM</td>
                            <td>Moron Jubilee</td>
                            <td>Mr. Suit</td>

                            <td><span class="listenbutton" onclick="playArchive('Moron Jubilee', 'Friday', '19:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>9:00 PM</td>
                            <td>The Record Exchange Rides Again (pt. 1)</td>
                            <td>Mr. Friday Night Special</td>

                            <td><span class="listenbutton" onclick="playArchive('The Record Exchange Rides Again', 'Friday', '21:00')">Listen</span></td>
                        </tr>

                        <tr colspan="4" class="spacer">
                            <td colspan="4" class="spacer">&nbsp;</td>
                        </tr>


                        <thead>
                            <tr id="saturday" class="day-header">
                                <td colspan="4">SATURDAY</td>
                            </tr>
                            <tr>
                                <th>Time</th>
                                <th>Show</th>
                                <th>Programmer</th>

                                <th>Archive</th>
                            </tr>
                        </thead>

                        <tr>
                            <td>12:00 AM</td>
                            <td>The Record Exchange Rides Again (pt. 2)</td>
                            <td>Mr. Friday Night Special</td>

                            <td><span class="listenbutton" onclick="playArchive('The Record Exchange Rides Again', 'Saturday', '00:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>5:00 AM</td>
                            <td>Stormy Weathers (R)</td>
                            <td>Jen</td>

                            <td><span class="listenbutton" onclick="playArchive('Stormy Weathers', 'Saturday', '5:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>7:00 PM</td>
                            <td>The Little Lighthouse</td>
                            <td>Stanislav</td>

                            <td><span class="listenbutton" onclick="playArchive('The Little Lighthouse', 'Saturday', '7:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>8:00 AM</td>
                            <td>Cleveland German Radio Show (R)</td>
                            <td>David and Renate</td>

                            <td><span class="listenbutton" onclick="playArchive('Cleveland German Radio Show', 'Saturday', '8:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>10:00 AM</td>
                            <td>The Hungarian Hour</td>
                            <td>Walt &amp; Elizabeth</td>

                            <td><span class="listenbutton" onclick="playArchive('The Hungarian Hour', 'Saturday', '10:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>12:00 PM</td>
                            <td>Monster Boogie Ska (R)</td>
                            <td>Joe Harant</td>

                            <td><span class="listenbutton" onclick="playArchive('Monster Boogie Ska', 'Saturday', '12:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>2:00 PM</td>
                            <td>Fast &amp; Bulbous (R)</td>
                            <td>Ennio Galucci</td>

                            <td><span class="listenbutton" onclick="playArchive('Fast & Bulbous', 'Saturday', '14:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>4:00 PM</td>
                            <td>Highs in the 60s (R)</td>
                            <td>Jim Wilson</td>

                            <td><span class="listenbutton" onclick="playArchive('Highs in the 60s', 'Saturday', '16:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>6:00 PM</td>
                            <td>Scottify (R)</td>
                            <td>Scott</td>

                            <td><span class="listenbutton" onclick="playArchive('Scottify', 'Saturday', '18:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>8:00 PM</td>
                            <td>666oz of Madness (R)</td>
                            <td>Adam Reynolds</td>

                            <td><span class="listenbutton" onclick="playArchive('666oz of Madness', 'Saturday', '20:00')">Listen</span></td>
                        </tr>
                        <tr>
                            <td>10:00 PM</td>
                            <td>Skid Row (R)</td>
                            <td>Chris Kofron</td>

                            <td><span class="listenbutton" onclick="playArchive('Skid Row', 'Saturday', '22:00')">Listen</span></td>
                        </tr>
                </table>
            </div>
        </section>
    </div>

    <div id="player-bar">
        <div class="player-inner">
            <div id="now-playing-label">SELECT A SHOW</div>
            <audio id="main-audio" controls></audio>
        </div>
    </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Programs

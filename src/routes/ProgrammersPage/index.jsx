import { useState } from 'react'
import './programmersPage.css'
import ExportSettings from '../../assets/audacityExportSettings.png'
import XCSBWorldRev from '../../assets/xcsbWorldReversed_250.png'
import DragAFile from '../../assets/dragAFile.png'

function ProgrammersPage(props) {

    return (
        <div className="programmers-page-container">
            <div className="wrapper">
                <div className="row">
                    <div className="grid_6">
                        <h1><em>XCSB - Resources for programmers</em></h1>
                        <p>This page is for XCSB programmers working off-site and producing pre-recorded shows for automation. 
                            Here's where's you can find show guidelines, and instructions for uploading your files. Also, 
                            downloadable <a href="#ids">station IDs</a>, <a href="#psas">PSAs</a>, and pre-recorded <a href="#fundraising">fundraising spots</a> 
                            to incorporate into your shows. </p>
                        <div className="highlightBox">
                            <h3>NOTE: Changes made to how you submit files (4/12/26)</h3>
                            <p>Note that this information will likely change as we figure out more of the things. We'll post 
                                notifications to Discord, but please bookmark and refer to this page for the most CURRENT 
                                information about creating &amp; submitting shows. Any questions can be sent to 
                                <a href="mailto:programming@xcsb.org" target="_blank">programming@xcsb.org</a>, or posted to Discord. [updated March 8, 2026] </p>
                        </div>
                    </div>

                    <div className="grid_6">
                        <img src={XCSBWorldRev} />
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <section id="content">
                    <div className="row">
                        <div className="grid_12">
                            <p><a href="#ids" className="buttonlink">Prerecorded IDs</a>&nbsp;<a href="#PSAs" className="buttonlink">Prerecorded PSAs</a>&nbsp;<a href="#fundraising" className="buttonlink">Fundraising Announcments</a> </p>
                        </div>
                    </div>
                </section>
            </div>
            <div id="main" className="wrapper">
                <section id="content" className="wide-content">
                    <div className="row">
                        <div className="grid_12">
                            <h2>Technical Requirements:</h2>
                            <ul>

                                <li>Show files must be saved in MP3 format, at 48kHz/16bit sample rate, and at least 256kbps quality (labled "excessive" in Audacity)</li>
                                <li>If using Audacity, your settings when you Export your files should look something like this:
                                    <img src={ExportSettings} />
                                </li>
                                <li>Each show should submitted as a single file, either 1 or 2 hours long (unless your show straddles midnight, in which case it needs to be cut in two).</li>
                                <li>Shows should be edited to the exact air time allocated (60 or 120 minutes), and completely air-ready, including IDs. Shows that are too short will be followed by dead air; shows that are too long will be cut off.</li>
                                <li>Azuracast automatically crossfades the first/last 2 seconds of each show, so get your IDs in with just a little bit of pad so they miss that fade. </li>
                                <li>CRITICAL: All show files must be named consistently, following this example: </li>
                                <ul>
                                    <li><code>2026.02.15 Crap Radio Hour 1 of 3.mp3</code></li>
                                    <li>DO NOT START YOUR SHOW NAME WITH AN UNDERSCORE! The underscores are how we track what's been processed; if it has a leading underscore, it gets ignored.</li>
                                    <li>Start with the air date, in year.month.date format, (so it sorts properly), separated by dots (so windows can handle it). If your show airs twice, use the first air date (our schedule week starts on Sunday).</li>
                                    <li>Next, the name of your radio show as it appears on the published schedule (check the home page if unsure).</li>
                                    <li>ONLY IF YOUR SHOW STARTS AT 11:00PM AND ENDS AT 1:00AM: include segment information ("1 of 2", "2 of 2") on each file. Otherwise, submit one file for your whole show, and skip this whole "1 of 1" thang.</li>
                                    <li>Must be uploaded as mp3 files (see above)</li>
                                </ul>

                                <li>Shows must be submitted AT LEAST 72 hours in advance of air date. Files arriving late may not run; repeatedly submitting files late (or missing multiple weeks) may result in loss of your show.</li>
                            </ul>


                            <h2>MODIFIED: How to Submit Your Show:</h2>
                            <ul>
                                <li>DO NOT MAIL YOUR SHOW TO THE AUTOMATION OR PROGRAMMING TEAM. Submit it by uploading to googleDrive.</li>
                                <li>Go to <a href="https://drive.google.com/drive/folders/1SEnhD32QGFvQ8AUKbnoyTjK7nsAy_KUp?usp=sharing" target="_blank">this googleDrive folder</a>, drag your show's audio file into the "XCSB2B Uploads" main window (not into a subfolder) and drop it, then wait until the file finishes uploading and appears in the drive’s file list.</li>
                                <li><img src={DragAFile} /></li>
                                <li>Visually confirm that your file is in the gDrive, next to the other shows.</li>
                                <li>IT'S NO LONGER NECESSARY TO SEND AN EMAIL TELLING US THAT THE FILE IS THERE, THE TIMBOT'S GOT YA!</li>
                            </ul>

                            <h2>NEW: WHAT HAPPENS NEXT:</h2>
                            <ul>
                                <li>The process of loading your files into the Azuracast streaming software is now automated via scripts! (Thx, TimSki!).</li>
                                <li>Every couple of hours (between 8:15am and 10:15pm), the Timbot script runs, loads shows that are ready to be loaded, adds an underscore to the filename (so everybody knows it's done), and automatically sends a confirmation email to you.</li>
                                <li>Wait a couple hours (or until the next morning) for an email.  IF YOU DON'T GET A CONFIRMATION, check these things:</li>
                                <ul>
                                    <li>Is a repeat of your show scheduled to happen, before the date of your new show?  If so, the bot has to wait until the last repeat has aired before it can load the next show.</li>
                                    <li>Is the DATE CORRECT, and in the correct (yyyy.mm.dd) format? 26.05.06 will not work, neither will 05.06.2026</li>
                                    <li>Is the SHOW NAME CORRECT, exactly as it appears on the program guide? The bot expects an exact match.</li>
                                    <li>HOT TIP: the confirmation email you get when successfully sending a show has a reminder at the bottom, with the EXACT FILE NAME THE BOT IS EXPECTING FOR <em>NEXT WEEK'S</em> SHOW!  Save that email, then copy &amp; paste, baby!</li>
                                    <li>Is the file an MP3 file?  Bot does not like .WAVs. </li>
                                    <li>Check the file in the directory again - does your show file have an underscore in front of it?  If so, it's been processed, and either the confirmation email got deleted or marked as spam.</li>
                                </ul>
                                <li>If you  make a mistake (no biggie), or think somethings screwed up, email the automation team at <a href="mailto:automation@xcsb.org" target="_blank">automation@xcsb.org</a>; we will delete the offending file and you can re-upload a corrected one.</li>
                            </ul>

                            <h2>Non-Show Files:</h2>
                            <ul>
                                <li>Upload your file to the <a href="https://drive.google.com/drive/folders/1SEnhD32QGFvQ8AUKbnoyTjK7nsAy_KUp?usp=sharing" target="_blank">same googleDrive directory</a> as above, IN THE MAIN DIRECTORY, NOT INTO A SUBFOLDER</li>
                                <li>STATION IDs &amp; PSAs - filename should include a descriptive title, length in seconds, your name, and either "ID" or "PSA".  F'rinstance: "PSA Antifa Supports Butterflies_30sec_mommieTheCommie.mp3".</li>
                                <li>NEW MEMBER DEMO/AUDITION SHOW - Same technical requirements as real shows, but filename should be the word "DEMO", plus your name ("DEMO_HerbScore.mp3") - no date necessary</li>
                                <li>It's not necessary to notify us with an email, but you can if you want: <a href="mailto:automation@xcsb.org" target="_blank">automation@xcsb.org</a> for PSAs/IDs; <a href="mailto:programming@xcsb.org" target="_blank">programming@xcsb.org</a> for new member demos.  We monitor the folder regularly, but if something is time-sensitive then let us know.</li>
                            </ul>


                            <h2>General Guidelines:</h2>
                            <ul>
                                <li>Although there’s no FCC requirement, please include station IDs (verbal or <a href="#ids">pre-recorded</a>) at the top of the hour, at minimum. At this point there is no mandated format or wording - “XCSB”, “XCSB.org”, "XCSB Alternative Media", “XCSB, your alternative to FM”, “XCSB: eXtra Crunch Salad Bar”... whatevs. Especially now, it's important for us to establish our identity, so say our name.</li>
                                <li>Since shows may be re-aired in different timeslots, try to make them “evergreen”, as in independent of any specific date and time.</li>
                                <li>DISCLAIMERS: (still under discussion). Again, we are not necessarily bound by FCC regulation, but we do have a responsibility to our listeners and our fiscal sponsor. Use good judgement.</li>
                                <ul>
                                    <li>Views and opinions: "The thoughts and opinions expressed on this show are solely those of the host (and participants), and are not those of XCSB, or Reading Room Cleveland." [NEED GUIDANCE ON WHEN TO USE]</li>
                                    <li>Adult swim/safe harbor: "Portions of the following program may be found offensive to some members of the listening audience. Therefore, listener discretion is advised." [NEED GUIDANCE ON WHEN TO USE]</li>
                                </ul>
                                <li>No commercial announcements, direct promotions of for-profit business, or solicitation of funds without prior approval from the Board.</li>
                                <li>No obscenity.</li>
                                <li>No slander, libel, hate speech, etc.</li>
                                <li>No mention or discussion of any legal activity related to WCSB/XCSB.</li>
                            </ul>

                            <h2>Programming/Schedule Change requests</h2>
                            <p>ANY &amp; ALL changes (spelling corrections, show name changes, requests for different time slots, or regime change) should be submitted to the Program Director via email: <a href="mailto:programming@xcsb.org">programming@xcsb.org</a>.  The programming committee will review all requests (at weekly meetings, posted on discord) and take them under advisement. Changes will be rolled out at regular intervals rather than piece-meal; typically every couple weeks. Please know that due consideration will be given to every request, but not all requests can be accommodated.</p>

                            <hr />
                            <hr />

                            <h1>RESOURCES</h1>
                            <h2 id="ids">Pre-recorded IDs</h2>
                            <p>Just IDing the station in your announcing is fine. Or, you can use one of these fine prerecorded IDs (courtesy of Ryan unless otherwise attributed).</p>
                            <p>Click on the player to preview. To download, either click on the individual file name, or right-click and choose "save link as" (browser dependant).</p>
                            <p><br />You can also <a href="https://www.xcsb.org/programmers/Archive_PSAs-IDs_03042026.zip" download>download a single .zip file</a> of the entire set (updated 3/4/26). Programmers are encouraged to contribute new ones!</p>

                            {/* <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/FILENAME" download>DISPLAYNAME</a> (LENGTH sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/FILENAME" type="audio/wav" />
                                </audio>
                            </div> */}

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/ID_Nose-Pick_JohnD.mp3" download>Station ID: Nose Pick</a> (John D) (29 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/ID_Nose-Pick_JohnD.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/xcsb_id_audience_is_now_deaf_13sec_hill.mp3" download>Station ID: The audience is now deaf</a> (James Hill) (13 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/xcsb_id_audience_is_now_deaf_13sec_hill.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Halloween_ID.wav" download>Station ID: Halloween</a> (Jerry) (53 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Halloween_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/ID_HeavierThanWatergate.mp3" download>Station ID: Heavier Than Watergate</a> (Steve) (54 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/ID_HeavierThanWatergate.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/DifficultMusic_XCSB-ID.mp3" download>Difficult Listening Hour (ID)</a> (bbob) (44 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/DifficultMusic_XCSB-ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/ID_Radios-and-Maps.mp3" download>Station ID: Radios and Maps</a> (Bob Delchin) (50 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/ID_Radios-and-Maps.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/ID_DontBeHungUp.mp3" download>Station ID: Don't Be Hung Up</a> (Steve) (21 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/ID_DontBeHungUp.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/ID_HeCreatedSlugs.mp3" download>Station ID: He Created Slugs</a> (Steve) (24 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/ID_HeCreatedSlugs.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Station_ID-EmmaFromSuitor.mp3" download>Station ID: Emma From Suitor</a> (Andy/Steve) (7 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Station_ID-EmmaFromSuitor.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Station_ID-GIMMEE.mp3" download>Station ID: GIMMEE</a> (Andy/Steve) (16 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Station_ID-GIMMEE.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Station_ID-Hipnosis.mp3" download>Station ID: Hipnosis</a> (Andy/Steve) (38 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Station_ID-Hipnosis.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Station_ID-MaryamTurkey.mp3" download>Station ID: Maryam Turkey</a> (Andy/Steve) (12 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Station_ID-MaryamTurkey.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Station_ID-MassiveCrash.mp3" download>Station ID: Massive Crash</a> (Andy/Steve) (28 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Station_ID-MassiveCrash.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Station_ID-PeteNolanSpectreFolk.mp3" download>Station ID: Pete Nolan Spectre Folk</a> (Andy/Steve) (10 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Station_ID-PeteNolanSpectreFolk.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Station_ID-SandyEwen.mp3" download>Station ID: Sandy Ewen</a> (Andy/Steve) (16 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Station_ID-SandyEwen.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Station_ID-StephanHaluska.mp3" download>Station ID: Stephan Haluska</a> (Andy/Steve) (5 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Station_ID-StephanHaluska.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/ID-XCSB-KOOPSendsSupport.mp3" download>XCSB ID: KOOPS Sends Support</a> (Stanislav) (11 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/ID-XCSB-KOOPSendsSupport.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/HerzogID_ChrisKulcsar.mp3" download>Herzog ID</a> (Chris Kulcsar) (32 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/HerzogID_ChrisKulcsar.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/MrFurleySmooth_XCSB-ID.mp3" download>Mr. Furley Smooth</a> (Bob Delchin) (18 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/MrFurleySmooth_XCSB-ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Wendy_Eisenberg_station_ID.mp3" download>Station ID - Wendy Eisenberg</a> (Andy/Steve) (6 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Wendy_Eisenberg_station_ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Todd_Masuda_Station_ID.mp3" download>Station ID - Todd Masuda</a> (Andy/Steve) (8 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Todd_Masuda_Station_ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB-ID_Matt_Rolin.mp3" download>Station ID - Matt Rolin</a> (Andy/Steve) (12 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB-ID_Matt_Rolin.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB-ID_Carlos_Nino.m.mp3" download>Station ID - Carlos Nino</a> (Andy/Steve) (8 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB-ID_Carlos_Nino.m.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB-ID_Joshua_Abrams.mp3" download>Station ID - Joshua Abrams</a> (Andy/Steve) (8 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB-ID_Joshua_Abrams.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB-ID_Mary_Halverson.mp3" download>Station ID - Mary Halverson</a> (Andy/Steve) (9 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB-ID_Mary_Halverson.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Bulwinkle_rabbitOutOfHat_ID02.wav" download>Bulwinkle/Rabbit Out Of My Hat XCSB ID</a> (bbob) (15 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Bulwinkle_rabbitOutOfHat_ID02.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/prof_hama_Wittgenstein_ID.mp3" download>Prof. Wittgenstein ID</a> (Hama) (14 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/prof_hama_Wittgenstein_ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/straight_mp_ID.mp3" download>Straight MP ID</a> (Hama) (3 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/straight_mp_ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/crucify_1st_bozo_ID.mp3" download>Crucify 1st Bozo ID</a> (Hama) (50 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/crucify_1st_bozo_ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/groovy_baby_hama_ID.mp3" download>Groovy Baby ID</a> (Hama) (11 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/groovy_baby_hama_ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/UFO_Hama_ID.mp3" download>UFO ID</a> (Hama) (11 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/UFO_Hama_ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/cosmic_hama_ID.mp3" download>Cosmic ID</a> (Hama) (15 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/cosmic_hama_ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/BILL_HICKS_XCSB_ID.wav" download>Bill Hicks XCSB ID</a> (41 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/BILL_HICKS_XCSB_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/RODNEY_CANT_CONTROL-ID_JohnT.mp3" download>Rodney Can't Contol Myself ID</a> (JT)(8 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/RODNEY_CANT_CONTROL-ID_JohnT.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/BOLOGNA_XCSB-ID_JohnT.mp3" download>Won't Stand for Bologna ID</a> (JT) (12 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/BOLOGNA_XCSB-ID_JohnT.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/FrankZappa-ItsOkID_chris.mp3" download>Frank Zappa-It's OK</a> (ChrisK) (1:22)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/FrankZappa-ItsOkID_chris.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB-JamesLastSmoothID.mp3" download>Jame's Last Smooth ID</a> (27 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB-JamesLastSmoothID.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/New_Ideas_XCSB_ID.mp3" download>New Ideas XCSB ID</a> (36 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/New_Ideas_XCSB_ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/College_Radio_Has_Finally_Graduated.mp3" download>College Radio Has Finally Graduated</a> (32 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/College_Radio_Has_Finally_Graduated.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB-DecadesOfGuitarRiffsID.mp3" download>XCSB-Decades Of Guitar Riffs ID</a> (Stanislav) (23 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB-DecadesOfGuitarRiffsID.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/What_did_you_bring_me.mp3" download>What did you bring me?</a> (20 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/What_did_you_bring_me.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Burn_Witch_Burn.mp3" download>Burn Witch Burn</a> (48 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Burn_Witch_Burn.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB-ShortBreak.mp3" download>XCSB-Short Break</a> (Stanislav) (9 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB-ShortBreak.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Stranger_Things_XCSB_ID.wav" download>Stranger Things XCSB ID</a> (35 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Stranger_Things_XCSB_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/This_Station_Rules_the_Nation.wav" download>This Station Rules the Nation</a> (TommyFox) (11 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/This_Station_Rules_the_Nation.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_dr_laura_ID.wav" download>Dr Laura ID</a> (19 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_dr_laura_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/2001_xcsb_id.wav" download>2001 XCSB ID</a> (24 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/2001_xcsb_id.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Airheads_XCSB_ID.wav" download>Airheads XCSB ID</a> (17 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Airheads_XCSB_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/i_made_this_ecording_XCSB_ID.mp3" download>I made this ecording XCSB ID</a> (13 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/i_made_this_ecording_XCSB_ID.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/if_you_strike_me_down_XCSB_ID.wav" download>If you strike me down XCSB ID</a> (11 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/if_you_strike_me_down_XCSB_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/ROUGH_JAZZ_XCSB_ID.wav" download>Rough Jazz XCSB ID</a> (28 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/ROUGH_JAZZ_XCSB_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Biden_ID.wav" download>Biden ID</a> (6 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Biden_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Bird_Jazz_ID.wav" download>Bird Jazz XCSB ID.wav</a> (26 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Bird_Jazz_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_CSU_Engagement_ID.wav" download>XCSB CSU Engagement ID</a> (18 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_CSU_Engagement_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Honoring_WCSB_ID.wav" download>XCSB Honoring WCSB ID</a> (41 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Honoring_WCSB_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Obama_ID.wav" download>Obama XCSB ID</a> (5 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Obama_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_rebel_radio_ID.wav" download>Rebel Radio XCSB ID</a> (11 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_rebel_radio_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Secret_Meetings_ID.wav" download>Secret Meetings XCSB ID</a> (40 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Secret_Meetings_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/xcsb_sue_ya_ID.wav" download>Sue Ya XCSB ID</a> (28 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/xcsb_sue_ya_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Synth_D.wav" download> Synth D XCSB ID</a> (20 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Synth_D.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_THX_ID.wav" download>THX XCSB ID</a> (19 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_THX_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Trump_ID.wav" download>Trump XCSB ID</a> (9 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Trump_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB_Suddenly_Last_Summer_ID.wav" download>Suddenly Last Summer XCSB ID</a> (by Steve) (34 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB_Suddenly_Last_Summer_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Children_of_the_Damned_ID.wav" download>Children of the Damned XCSB ID </a>(by Steve) (13 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Children_of_the_Damned_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Stranger_Things_XCSB ID.wav" download>Ben Shapiro XCSB ID</a> (34 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Stranger_Things_XCSB_ID.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XSCB_The_Return_ID_by_Ennio.wav" download>XSCB: The Return XCSB ID </a> (by Ennio) (25 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XSCB_The_Return_ID_by_Ennio.wav" type="audio/wav" />
                                </audio>
                            </div>


                            {/* </div> */}

                            <h3>DISCLAIMERS</h3>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Archive_Rerun_Disclaimer.wav" download>Archive - rerun disclaimer.wav</a> (31 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Archive_Rerun_Disclaimer.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/One_Week_to_the_Future_RERUN_disclaimer.wav" download>One Week to the Future - rerun disclaimer</a> (28 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/One_Week_to_the_Future_RERUN_disclaimer.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Inappropriate_XCSB_Disclaimer.wav" download>Inappropriate XCSB Disclaimer.wav</a> (27 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Inappropriate_XCSB_Disclaimer.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/DoTheUnbelievable-DISCLAIMER_WillR.mp3" download>Do The Unbelievable DISCLAIMER</a> (Will R.) (35 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/DoTheUnbelievable-DISCLAIMER_WillR.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div id="PSAs" className="row">
                        <div className="grid_12">
                            <h2 id="psas">PSAs/Promos</h2>
                            <p>Whaddaya waiting for? Make one already!</p>
                            {/* <div className="audio-row">
                        &#9654; <a href="https://www.xcsb.org/programmers/FILENAME" download>DISPLAYNAME</a> (LENGHTH sec.)&nbsp;
                        <audio className="compact-player" controls preload="none">
                            <source src="https://www.xcsb.org/programmers/XFILENAME" type="audio/wav" />
                        </audio>
                    </div> */}

                            <h3>Promos</h3>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/PSA-HalloweenSpooktacularAtNoClass_1min47sec_JimHill.mp3" download>Halloween Spooktacular At No Class [thru 10/28/26]</a> (Jim Hill) (107 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/PSA-HalloweenSpooktacularAtNoClass_1min47sec_JimHill.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/ReadingRoomCLE_PSA.mp3" download>Reading Room Cle PSA (no bed)</a> (Wainstead) (32 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/ReadingRoomCLE_PSA.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSBApp-TrumpCommercial.mp3" download>XCSB Phone App - Trump Commercial</a> (Ryan) (16 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSBApp-TrumpCommercial.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <h3>Show Promos</h3>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/YaggaYaggaSundays_noon-6pm.mp3" download>Yagga Yagga Sundays [Show promo]</a> (Tommy Fox) (64 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/YaggaYaggaSundays_noon-6pm.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/ShowPromo_CosmicVibeShow.mp3" download>The Cosmic Vibe [Show promo]</a> (Skylar) (30 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/ShowPromo_CosmicVibeShow.mp3" type="audio/mp3" />
                                </audio>
                            </div>


                            <h3>PSAs</h3>
                            {/* <div className="audio-row">
                        &#9654; <a href="https://www.xcsb.org/programmers/xcsbWetlandsProjectPSA.wav" download>Earth Day 4/22/26 - Wetland Project Broadcast</a> (bbob) (53 sec sec.)&nbsp;
                        <audio className="compact-player" controls preload="none">
                            <source src="https://www.xcsb.org/programmers/xcsbWetlandsProjectPSA.wav" type="audio/wav" />
                        </audio>
                    </div> */}

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/PSA_Save-Ohio-Parks_55sec.mp3" download>Save Ohio Parks PSA</a> (55 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/PSA_Save-Ohio-Parks_55sec.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/MetroparksPSA_45sec-Jerry.wav" download>Metroparks PSA</a> (Jerry) (45 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/MetroparksPSA_45sec-Jerry.wav" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Hearing_Loss_ENT_Power_Electronics_PSA.mp3" download>Hearing Loss ENT Power Electronics PSA</a> (92 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Hearing_Loss_ENT_Power_Electronics_PSA.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Energy_hogs_PSA.mp3" download>Energy hogs PSA</a> (66 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Energy_hogs_PSA.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Bullying_PSA.mp3" download>Bullying PSA</a> (43 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Bullying_PSA.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Fuzzy_bunny_PSA_EXTRA_FUZZY.mp3" download>Fuzzy bunny PSA EXTRA FUZZY</a> (60 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Fuzzy_bunny_PSA_EXTRA_FUZZY.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Child_safety_seats_PSA.mp3" download>Child safety seats PSA</a> (64 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Child_safety_seats_PSA.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/PETA_PSA_The_Donnas_and_Thursday_Club.mp3" download>PETA PSA The Donnas and Thursday Club</a> (66 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/PETA_PSA_The_Donnas_and_Thursday_Club.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/PETA_PSA_William_Shatner_and_Thursday_Club.mp3" download>PETA PSA William Shatner and Thursday Club</a> (64 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/PETA_PSA_William_Shatner_and_Thursday_Club.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Pest_Health_PSA.mp3" download>Pest Health PSA</a> (48 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Pest_Health_PSA.mp3" type="audio/mp3" />
                                </audio>
                            </div>

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Cleveland_Zoological_Society_PSA.wav" download> Cleveland Zoological Society</a> (TommyFox) (50 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Cleveland_Zoological_Society_PSA.wav" type="audio/wav" />
                                </audio>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div id="story" className="row">
                        <div className="grid_12">
                            <h2 id="fundraising">Fundraising</h2>
                            <p>We could use more of these, y'all...</p>
                            {/* <div className="audio-row">
                            &#9654; <a href="https://www.xcsb.org/programmers/FILENAME" download>DISPLAYNAME</a> (LENGHT sec.)&nbsp;
                            <audio className="compact-player" controls preload="none">
                                <source src="https://www.xcsb.org/programmers/XFILENAME" type="audio/wav" />
                            </audio>
                        </div>  */}

                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB-DonateTaxReturn(40s).mp3" download>XCSB-Donate Tax Return</a> (Stanislav) (40 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB-DonateTaxReturn(40s).mp3" type="audio/wav" />
                                </audio>
                            </div>
                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/Drumplay_Benefit_PSA-NEW.mp3" download>Drumplay Benefit (fundraising) NEW!!</a> thru April 18 (Steve) (68 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/Drumplay_Benefit_PSA-NEW.mp3" type="audio/wav" />
                                </audio>
                            </div>


                            <div className="audio-row">
                                &#9654; <a href="https://www.xcsb.org/programmers/XCSB-REBORN-ASK_fundraising_johnT.mp3" download>XCSB Reborn (fundraising)</a> (JT) (54 sec.)&nbsp;
                                <audio className="compact-player" controls preload="none">
                                    <source src="https://www.xcsb.org/programmers/XCSB-REBORN-ASK_fundraising_johnT.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                        </div>
                        <hr />
                    </div >
                </section>
            </div>
        </div>
    )
}

export default ProgrammersPage
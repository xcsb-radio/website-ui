import { useState, useEffect } from 'react'
import Hls from 'hls.js';
import Papa from 'papaparse'
import showCsvData from './assets/files/programs/xcsb-programDetail.csv'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'
import './assets/shared-css/basic-style.css'
import './assets/shared-css/colorblocks-style.css'
import './assets/shared-css/normalize.css'

import NavBar from './components/NavBar'
import FlyingV from './assets/IAmXCSB_flyingV.png'
import { HashRouter as Router, Routes, Route, useNavigate, NavLink } from 'react-router-dom'
import Events from './routes/Events'
import Donate from './routes/Donate'
import Home from './routes/Home'
import MediaCoverage from './routes/MediaCoverage'
import WCSB50Years from './routes/WCSB50Years'
import Footer from './components/Footer'
import Programs from './routes/Programs'
import Main from './routes/Main'
import ProgrammersPage from './routes/ProgrammersPage'
import News from './routes/News';
// import Show from './routes/Show';
// import Banner from './components/NavBar/Banner'

function App() {
  const [hlsInstance, setHlsInstance] = useState(null);
  const [isPlayerCollapsed, setIsPlayerCollapsed] = useState(false)
  const [parsedData, setParsedData] = useState([]);
  const [currentShowName, setCurrentShowName] = useState('No Show Selected')

  const STATION_ID = "XCSB";
  const STATION_TZ = "America/New_York";

  useEffect(() => {
    if (!parsedData.length) {
      Papa.parse(showCsvData, {
        download: true,
        header: true,
        complete: (results) => {
          // remove entries that are missing show titles from being displayed
          const parsedWithShowsPresent = results.data.filter(i => i.SHOW_TITLE)
          setParsedData(parsedWithShowsPresent)
        }
      });
    }
  }, []);

  function calculateRecentTimestamp(dayName, timeStr) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [targetHrs, targetMins] = timeStr.split(":").map(Number);
    const now = new Date();

    // Iterate backwards up to 7 days to find the most recent matching day
    for (let i = 0; i <= 7; i++) {
      // Subtract days in exact 24-hour milliseconds
      const testDate = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);

      // Get the date parts specifically in New York time
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: STATION_TZ,
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric"
      }).formatToParts(testDate);

      const extract = (type) => parts.find((p) => p.type === type).value;

      if (extract("weekday") === dayName) {
        const y = extract("year");
        const mo = extract("month").padStart(2, "0");
        const d = extract("day").padStart(2, "0");
        const h = String(targetHrs).padStart(2, "0");
        const m = String(targetMins).padStart(2, "0");

        // Construct a base UTC Date simulating the target NY date/time
        const isoString = `${y}-${mo}-${d}T${h}:${m}:00`;
        const tempUtcDate = new Date(`${isoString}Z`);

        // Dynamically find the NY offset at this exact time (handles DST correctly)
        const formatOpts = {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false
        };
        const nyTime = tempUtcDate.toLocaleString("en-US", {
          timeZone: STATION_TZ,
          ...formatOpts
        });
        const utcTime = tempUtcDate.toLocaleString("en-US", {
          timeZone: "UTC",
          ...formatOpts
        });

        const offsetMs = new Date(nyTime) - new Date(utcTime);

        // Apply offset to get the true UTC timestamp for the Spinitron archive
        const finalRealDate = new Date(tempUtcDate.getTime() - offsetMs);

        // Ensure the calculated show time actually occurred in the past
        if (finalRealDate <= now) {
          return finalRealDate.toISOString().replace(/[:\-]/g, "").split(".")[0] + "Z";
        }
      }
    }
    return null;
  }

  function playArchive(name, day, time) {
    const timestamp = calculateRecentTimestamp(day, time);
    // Updated URL format from arkPlayer.js: STATION-TIMESTAMP/index.m3u8
    const streamUrl = `https://ark3.spinitron.com/ark2/${STATION_ID}-${timestamp}/index.m3u8`;

    const audio = document.getElementById("main-audio");
    const bar = document.getElementById("player-bar");
    const label = document.getElementById("now-playing-label");

    // label.innerText = `NOW PLAYING: ${name} (Broadcast: ${day} @ ${time} EST)`;
    // bar.style.display = "block";
    setCurrentShowName(`NOW PLAYING: ${name} (Broadcast: ${day} @ ${time} EST)`)

    if (Hls.isSupported()) {
      const currentHls = hlsInstance
      if (currentHls !== null) {
        currentHls.detachMedia();
        currentHls.destroy();
        setHlsInstance(null)
      }
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(audio);
      hls.on(Hls.Events.MANIFEST_PARSED, () => audio.play());
      setHlsInstance(hls)
    } else if (audio.canPlayType("application/vnd.apple.mpegurl")) {
      audio.src = streamUrl;
      audio.play();
    }
  }
  return (
    <>
      {/* <Banner /> */}
      <div className="app-container">
        <Router>
          <NavLink to='/'>
            <img className="header-banner" src={FlyingV} alt="banner image XCSB" />
          </NavLink>
          <NavBar />
          <div className="routes-container">
            <Routes>
              <Route
                path={`/`}
                element={<Main parsedData={parsedData} />}
              />
              <Route
                path={`/about`}
                element={<Home />}
              />
              <Route
                path={`/xcsb-donate`}
                element={<Donate />}
              />
              <Route
                path={`/xcsb-mediaCoverage`}
                element={<MediaCoverage />}
              />
              <Route
                path={`/xcsb-events`}
                element={<Events />}
              />
              <Route
                path={`/xcsb-WCSB49Years`}
                element={<WCSB50Years />}
              />
              <Route
                path={`/xcsb-programDetail`}
                element={<Programs 
                  playArchive={playArchive} 
                  calculateRecentTimestamp={calculateRecentTimestamp} 
                  parsedData={parsedData} />}
              />
              <Route
                path={`/xcsb-programmers`}
                element={<ProgrammersPage />}
              />
                            <Route
                path={`/xcsb-news`}
                element={<News />}
              />
              {/* <Route
                path={`/xcsb-show/*`}
                element={<Show parsedData={parsedData} />}
              /> */}
              <Route path="*" element={<Main parsedData={parsedData} />} />
            </Routes>
          </div>
          <div className='player-bar' id="player-bar" style={isPlayerCollapsed ? { width: '1em' } : null}>
            <div className="player-inner">
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div onClick={() => setIsPlayerCollapsed(!isPlayerCollapsed)}>
                  <div className={isPlayerCollapsed ? 'arrow-left' : 'arrow-right'} />
                </div>
                <div id="now-playing-label">{isPlayerCollapsed ? '' : currentShowName}</div>
              </div>
              <audio id="main-audio" controls></audio>
            </div>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  )
}

export default App

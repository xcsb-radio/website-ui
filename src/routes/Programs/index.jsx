import { useState, useEffect } from 'react'
import './programs.css'
import MasterRadio from "../../assets/channelMasterRadio_300t.png"
import { NavLink } from 'react-router-dom'

const ShowRow = (props) => {
    const formattedTime = () => {
        if (props.startTime === '0:00') {
            return '12:00 AM'
        } else if (props.startTime === '12:00') {
            return '12:00 PM'
        }else if (props.startTime.split(':')[0] > 12) {
            return `${props.startTime.split(':')[0] - 12}:00 PM`
        } else {
            return props.startTime + ' AM'
        }
    }
    return (
        (props.selectedDay === props.day) || (props.selectedDay === 'Show All') ? <tr>
            <td style={{ whiteSpace: 'nowrap' }}>{formattedTime()}</td>
            <td><NavLink style={{textDecoration: 'none'}} to={`/xcsb-show/${props.showName.replace(/\s/g, "-")}`}>{props.showName}</NavLink></td>
            <td>{props.djName}</td>
            <td><span className="listenbutton" onClick={() => props.playArchive(props.showName, props.day, props.startTime)}>Listen</span></td>
        </tr> : null
    );
}

function Programs(props) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [day, setDay] = useState(days[new Date().getDay()])
    const { parsedData } = props;

    const handleSetDayShown = (e) => {
        const dayOption = e.target.value
        setDay(dayOption);
    }
    return (
        <div className="programs-container">
            <div id="main" className="wrapper">
                <section id="content" className="wide-content">
                    <div id="story" className="row">
                        <section id="hero" className="clearfix">
                            <div className="wrapper">
                                <div className="row">
                                    <div className="grid_8">
                                        <h1><em>Program Detail</em></h1>
                                        <p><i>Time travel is real!!</i><br /> Miss your favorite show? Here's a list of our programs,
                                            click on the link on the right to go back in time and listen to the most recently aired show!</p>
                                    </div>
                                    <div className="grid_4 rightfloat">
                                        <img src={MasterRadio} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div id="main" className="wrapper">
                            <div className="select-container">
                                <select name={day} value={day} onChange={(e) => handleSetDayShown(e)}>
                                    <option name='Sunday' value='Sunday'>Sunday</option>
                                    <option name='Monday' value='Monday'>Monday</option>
                                    <option name='Tuesday' value='Tuesday'>Tuesday</option>
                                    <option name='Wednesday' value='Wednesday'>Wednesday</option>
                                    <option name='Thursday' value='Thursday'>Thursday</option>
                                    <option name='Friday' value='Friday'>Friday</option>
                                    <option name='Saturday' value='Saturday'>Saturday</option>
                                    <option name='Show All' value='Show All'>Show All</option>
                                </select>
                            </div>
                            <section id="content" className="wide-content">
                                <div className="table_programgrid">
                                    <table>
                                        {day === 'Sunday' || day === 'Show All' ?
                                            <table>
                                                <thead>
                                                    <tr id="sunday" className="day-header">
                                                        <td colspan="4">SUNDAY</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Show</th>
                                                        <th>Programmer</th>

                                                        <th>Archive</th>
                                                    </tr>
                                                </thead>
                                                {parsedData.map(i => i.DAY === 'Sunday' ? <ShowRow
                                                    selectedDay={day}
                                                    day={i.DAY}
                                                    startTime={i.START_TIME}
                                                    djName={i['DJ NAME']}
                                                    showName={i.SHOW_TITLE}
                                                    playArchive={props.playArchive} /> : null)}
                                                <tr colspan="4" className="spacer">
                                                    <td colspan="4" className="spacer">&nbsp;</td>
                                                </tr>
                                            </table> : null}

                                        {day === 'Monday' || day === 'Show All' ?
                                            <table>
                                                <thead>
                                                    <tr id="monday" className="day-header">
                                                        <td colspan="4">MONDAY</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Show</th>
                                                        <th>Programmer</th>

                                                        <th>Archive</th>
                                                    </tr>
                                                </thead>
                                                {parsedData.map(i => i.DAY === 'Monday' ? <ShowRow
                                                    selectedDay={day}
                                                    day={i.DAY}
                                                    startTime={i.START_TIME}
                                                    djName={i['DJ NAME']}
                                                    showName={i.SHOW_TITLE}
                                                    playArchive={props.playArchive} /> : null)}
                                                <tr colspan="4" className="spacer">
                                                    <td colspan="4" className="spacer">&nbsp;</td>
                                                </tr>
                                            </table> : null}

                                        {day === 'Tuesday' || day === 'Show All' ?
                                            <table>
                                                <thead>
                                                    <tr id="tuesday" className="day-header">
                                                        <td colspan="4">TUESDAY</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Show</th>
                                                        <th>Programmer</th>

                                                        <th>Archive</th>
                                                    </tr>
                                                </thead>
                                                {parsedData.map(i => i.DAY === 'Tuesday' ? <ShowRow
                                                    selectedDay={day}
                                                    day={i.DAY}
                                                    startTime={i.START_TIME}
                                                    djName={i['DJ NAME']}
                                                    showName={i.SHOW_TITLE}
                                                    playArchive={props.playArchive} /> : null)}
                                                <tr colspan="4" className="spacer">
                                                    <td colspan="4" className="spacer">&nbsp;</td>
                                                </tr>
                                            </table> : null}

                                        {day === 'Wednesday' || day === 'Show All' ?
                                            <table>
                                                <thead>
                                                    <tr id="wednesday" className="day-header">
                                                        <td colspan="4">WEDNESDAY</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Show</th>
                                                        <th>Programmer</th>

                                                        <th>Archive</th>
                                                    </tr>
                                                </thead>
                                                {parsedData.map(i => i.DAY === 'Wednesday' ? <ShowRow
                                                    selectedDay={day}
                                                    day={i.DAY}
                                                    startTime={i.START_TIME}
                                                    djName={i['DJ NAME']}
                                                    showName={i.SHOW_TITLE}
                                                    playArchive={props.playArchive} /> : null)}

                                                <tr colspan="4" className="spacer">
                                                    <td colspan="4" className="spacer">&nbsp;</td>
                                                </tr>
                                            </table> : null}

                                        {day === 'Thursday' || day === 'Show All' ?
                                            <table>
                                                <thead>
                                                    <tr id="thursday" className="day-header">
                                                        <td colspan="4">THURSDAY</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Show</th>
                                                        <th>Programmer</th>

                                                        <th>Archive</th>
                                                    </tr>
                                                </thead>
                                                {parsedData.map(i => i.DAY === 'Thursday' ? <ShowRow
                                                    selectedDay={day}
                                                    day={i.DAY}
                                                    startTime={i.START_TIME}
                                                    djName={i['DJ NAME']}
                                                    showName={i.SHOW_TITLE}
                                                    playArchive={props.playArchive} /> : null)}

                                                <tr colspan="4" className="spacer">
                                                    <td colspan="4" className="spacer">&nbsp;</td>
                                                </tr>
                                            </table> : null}

                                        {day === 'Friday' || day === 'Show All' ?
                                            <table>
                                                <thead>
                                                    <tr id="friday" className="day-header">
                                                        <td colspan="4">FRIDAY</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Show</th>
                                                        <th>Programmer</th>

                                                        <th>Archive</th>
                                                    </tr>
                                                </thead>
                                                {parsedData.map(i => i.DAY === 'Friday' ? <ShowRow
                                                    selectedDay={day}
                                                    day={i.DAY}
                                                    startTime={i.START_TIME}
                                                    djName={i['DJ NAME']}
                                                    showName={i.SHOW_TITLE}
                                                    playArchive={props.playArchive} /> : null)}

                                                <tr colspan="4" className="spacer">
                                                    <td colspan="4" className="spacer">&nbsp;</td>
                                                </tr>
                                            </table> : null}

                                        {day === 'Saturday' || day === 'Show All' ?
                                            <table>
                                                <thead>
                                                    <tr id="saturday" className="day-header">
                                                        <td colspan="4">SATURDAY</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Show</th>
                                                        <th>Programmer</th>

                                                        <th>Archive</th>
                                                    </tr>
                                                </thead>
                                                {parsedData.map(i => i.DAY === 'Saturday' ? <ShowRow
                                                    selectedDay={day}
                                                    day={i.DAY}
                                                    startTime={i.START_TIME}
                                                    djName={i['DJ NAME']}
                                                    showName={i.SHOW_TITLE}
                                                    playArchive={props.playArchive} /> : null)}
                                            </table> : null}
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Programs

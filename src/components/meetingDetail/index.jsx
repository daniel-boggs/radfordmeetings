import Accordion from 'react-bootstrap/Accordion';
import './index.scss';
import { BsCalendarWeek } from 'react-icons/bs'
import { meetings } from '../../configs/meetings'
import { defaultDayOfWeek } from '../../utils/dayOfTheWeek';


function MeetingDetail({ meetings }) {
  let zoomLink = (url) => {
    if (url !== 'N/A') {
      return (
        <span className="zoom-link">
          <a href={ url } target="_blank" rel="noreferrer">{ url }</a>
        </span>
      )
    }
    return (
      <span>
        N/A
      </span>
    );
  }
  if (meetings.length > 0) {
  return (
    <div>
    <p className='meeting-count'>Total: { meetings.length } Meetings</p>
    <Accordion defaultActiveKey="">
      {
        meetings
          .map((m) => {
            return(
            <Accordion.Item eventKey={m.id}>
            <Accordion.Header><span><strong>{m.day.charAt(0).toUpperCase()+ m.day.slice(1) + ' ' + m.timePT}</strong></span><span>{m.title + ' (' + m.method + ')' }</span></Accordion.Header>
            <Accordion.Body>
              <container>
                <strong>Date/Time: </strong><br />{ m.day.charAt(0).toUpperCase()+ m.day.slice(1) + ' ' + m.timePT }<br />
                <a href="javascript:void(0)"><BsCalendarWeek className='cal-icon' /><span className='calendar-link'>Add to Calendar</span></a> <br /><br />
                <strong>Type: </strong><br />{ m.type }<br /><br />
                <strong>Format: </strong><br />{ m.format }<br /><br />
                <strong>Method: </strong><br />{ m.method }<br /><br />
                <strong>Physical Location: </strong><br />{ m.physicalLocation }<br /><br />
                <strong>Zoom Link: </strong><br /> { zoomLink(m.zoom) }<br /><br />
                <strong>Meeting ID: </strong><br />{ m.zoomID }<br /><br />
                <strong>Passcode: </strong><br />{ m.zoomPW }<br /><br />
                <strong>Contact: </strong><br /> { m.contactName }<br /><br />
                <strong>Note: </strong><br /> { m.note ? m.note : '' }
              </container>
            </Accordion.Body>
          </Accordion.Item>
          )})
      }
    </Accordion>
    </div>
  );
  }
  return (
    <div>
      <p>Oops, looks like no meetings matched your criteria. Please try widening your search.</p>
    </div>
  )
}

export default MeetingDetail;
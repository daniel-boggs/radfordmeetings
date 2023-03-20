import Accordion from 'react-bootstrap/Accordion';
import './index.scss';
import { BsCalendarWeek } from 'react-icons/bs'
import AddToCalendar from '../addToCalendar';

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
            meetings.map((m) => {
              let time12h = m.timePT;
              
              const convertTime12to24 = (time12h) => {
                const [time, modifier] = time12h.split(' ');

                let [hours, minutes] = time.split(':');
          
                if (hours === '12') {
                  hours = '00';
                }

                if (modifier === 'PM') {
                  hours = parseInt(hours, 10) + 12;
                }
            
                return [hours, minutes];
              }
              //TO DO: Create Cal Description and add in  Location info to ICS
              return(
                <Accordion.Item eventKey={m.id}>
                  <Accordion.Header><span><strong>{m.day.charAt(0).toUpperCase()+ m.day.slice(1) + ' ' + m.timePT}</strong></span><span>{m.title + ' (' + m.method + ')' }</span></Accordion.Header>
                  <Accordion.Body>
                    <container>
                      <strong>Date/Time: </strong><br />{ m.day.charAt(0).toUpperCase()+ m.day.slice(1) + ' ' + m.timePT }<br />
                      <AddToCalendar dateTime={ [2023, 3, 19, Number(convertTime12to24(time12h)[0]),Number(convertTime12to24(time12h)[1])] } title={ m.title } description={'Testing'} location={m.location}/><br />
                      <span className='add-cal-info'><em>Note: iOS does not currently support this functionality. If on iOS, please use computer to import which will sync to your phone</em></span><br /><br />
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
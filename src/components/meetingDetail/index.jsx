import Accordion from 'react-bootstrap/Accordion';
import './index.scss';
import AddToCalendar from '../addToCalendar';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

function MeetingDetail({tab, allMeetings, meetings }) {
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

  let selectedMeetings;

  if (tab === 'all') {

    selectedMeetings = allMeetings;
  } else {
    selectedMeetings = meetings;
  }

  if (selectedMeetings.length > 0) {
    return (
      <div>
        <p className='meeting-count'>Results: { meetings.length } Found</p>
        <Accordion defaultActiveKey="">
          {
            meetings.map((m) => {
              var getMeetingDate = function (dayName) {

                // The current day
                var date = new Date();
                var now = date.getDay();
              
                // Days of the week
                var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
              
                // The index for the day you want
                var day = days.indexOf(dayName.toLowerCase());
              
                // Find the difference between the current day and the one you want
                // If it's the same day as today (or a negative number), jump to the next week
                var diff = day - now;
                //diff = diff < 1 ? 7 + diff : diff;
              
                // Get the timestamp for the desired day
                var nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);
              
                // Get the next day
                return new Date(nextDayTimestamp).toISOString().slice(0,10);;
              
              };

              console.log(getMeetingDate(m.day));

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

                if (hours.length < 2) {
                  hours = '0'.toString() + hours
                }
            
                return [hours, minutes];
              }

              const convertTime12to24End = (time12h) => {
                const [time, modifier] = time12h.split(' ');

                let [hours, minutes] = time.split(':');
          
                if (hours === '12') {
                  hours = '00';
                }

                if (modifier === 'PM') {
                  hours = parseInt(hours, 10) + 12;
                }

                hours = (Number(hours) + 1).toString();

                if (hours.length < 2) {
                  hours = '0'.toString() + hours
                }
            
                return [hours, minutes];
              }

              const meetingDate = getMeetingDate(m.day);
              const startTime = convertTime12to24(time12h)[0] + ':' + convertTime12to24(time12h)[1];
              const endTime = convertTime12to24End(time12h)[0] + ':' + convertTime12to24(time12h)[1];

              const buildDescription = (name, type, format, method, location, zoomLink, zoomId, zoomPW, contact, note) => {
                return (
                  ('[strong]Name[/strong][br]' + 
                  name + '[br][br]' +
                  '[strong]Type[/strong][br]' + 
                  type + '[br][br]' +
                  '[strong]Format[/strong][br]' + 
                  format + '[br][br]' +
                  '[strong]Method[/strong][br]' + 
                  method + '[br][br]' +
                  '[strong]Location[/strong][br]' + 
                  location + '[br][br]' +
                  '[strong]Zoom Link[/strong][br]' + 
                  zoomLink + '[br][br]' +
                  '[strong]Zoom Id[/strong][br]' + 
                  zoomId + '[br][br]' +
                  '[strong]Zoom PW[/strong][br]' + 
                  zoomPW + '[br][br]' +
                  '[strong]Contact[/strong][br]' + 
                  contact + '[br][br]' +
                  '[strong]Note[/strong][br]' + 
                  note).replace(':','')
                )
              }

              const meetingDescription = buildDescription(m.title, m.type, m.format, m.method, m.physicalLocation, m.zoom, m.zoomID, m.zoomPW, m.contactName, m.note);

              //TO DO: Create Cal Description and add in  Location info to ICS
              //<AddToCalendar dateTime={ [2023, 3, 19, Number(convertTime12to24(time12h)[0]),Number(convertTime12to24(time12h)[1])] } title={ m.title } description={'Testing'} location={m.location}/><br />
              return(
                <Accordion.Item eventKey={m.id}>
                  <Accordion.Header><span><strong>{m.day.charAt(0).toUpperCase()+ m.day.slice(1) + ' '} <br/> { m.timePT}</strong></span><span>{m.title + ' (' + m.method + ')' }</span></Accordion.Header>
                  <Accordion.Body>
                    <container>
                      <strong>Date/Time: </strong><br />{ m.day.charAt(0).toUpperCase()+ m.day.slice(1) + ' ' + m.timePT }<br />
                      <AddToCalendarButton
                      name={m.title}
                      description={meetingDescription}
                      options={['Google',]}
                      location={m.physicalLocation}
                      startDate={meetingDate}
                      endDate={meetingDate}
                      recurrence="weekly"
                      startTime={startTime}
                      endTime={endTime}
                      timeZone="America/Los_Angeles"
                      buttonStyle='text'
                      size='0'
                      hideBranding='true'
                      ></AddToCalendarButton><br />
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
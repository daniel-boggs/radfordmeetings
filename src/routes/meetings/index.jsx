import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import MeetingDetail from '../../components/meetingDetail';
import Form from 'react-bootstrap/Form';


import './index.scss';
import { meetings } from '../../configs/meetings';

const Meetings = () => {
    const [searchField, setSearchField] = useState('');
    const [data, setData] = useState('');
    const [filteredMeetings, setFilteredMeetings] = useState(meetings);

    const d = new Date();
    let day = d.getDay();
    var dayOfWeek;

    switch (day) {
        case 0: dayOfWeek = 'sunday';
        break;
        case 1: dayOfWeek = 'monday';
        break;
        case 2: dayOfWeek = 'tuesday';
        break;
        case 3: dayOfWeek = 'wednesday'
        break;
        case 4: dayOfWeek = 'thursday';
        break;
        case 5: dayOfWeek = 'friday';
        break;
        case 6: dayOfWeek = 'saturday';
        break;
        default: dayOfWeek = 'monday';
    }

    //allow the ability for visiotrs to bookmark specific days
    const hash = window.location.hash.substring(1);
    const defaultDayOfWeek = hash ? hash : dayOfWeek;
    const selectedTab = (eventKey) => {
        setData(eventKey);
    }

    useEffect(() => {
        const newFilteredMeetings = meetings
        .filter((meeting) => {
          return (meeting.day.toLowerCase().search((hash ? hash : dayOfWeek).toLowerCase()) !== -1) && (meeting.title.toLowerCase().includes(searchField));
        });
    
        setFilteredMeetings(newFilteredMeetings);
      }, [data, hash, dayOfWeek, searchField]);

    const onSearchChange = (event) => {
        setSearchField(event.target.value.toLowerCase());
      }

    return (
        <div className="container">
        <div className="row meeting-filters-panel">
            <label>Day of Week</label>
            <Nav className="meetings-nav meetings-days" fill variant="tabs" defaultActiveKey={ defaultDayOfWeek }>
                <Nav.Item>
                    <Nav.Link href="#monday" eventKey="monday" onClick={() => {selectedTab('monday')}}>MON</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#tuesday" eventKey="tuesday" onClick={event => {selectedTab('tuesday')}}>TUE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#wednesday" eventKey="wednesday" onClick={event => {selectedTab('wednesday')}}>WED</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#thursday" eventKey="thursday" onClick={event => {selectedTab('thursday')}}>THU</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#friday" eventKey="friday" onClick={event => {selectedTab('friday')}}>FRI</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#saturday" eventKey="saturday" onClick={event => {selectedTab('saturday')}}>SAT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#sunday" eventKey="sunday" onClick={event => {selectedTab('sunday')}}>SUN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#all" eventKey="all" onClick={event => {selectedTab('all')}}>ALL</Nav.Link>
                </Nav.Item>
            </Nav>
            <br/>
            <label>Method</label>
            <Nav className='meetings-nav meetings-methods' fill variant="tabs" defaultActiveKey="link-4">
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Hybrid</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">In Person</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Online</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">All</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="search-meetings-wrapper">
            <Form className="d-flex">
                <div className="input-wrapper">
                <label>Filter By Title</label>
                <input 
                    className={`search-box`}
                    type="search" 
                    placeholder='Search Meetings' 
                    onChange={onSearchChange}
                />
                </div>
            </Form>
        </div>
            </div>
            <br />
            <MeetingDetail selectedTab={ data } searchString={ filteredMeetings } meetings={ filteredMeetings }/>    
        </div>
    );
}

export default Meetings;

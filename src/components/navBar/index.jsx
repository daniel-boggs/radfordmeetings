import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './index.scss'
import $ from 'jquery'

const NavBar = () => {
  $(function () {
    $(document).scroll(function () {
      var $nav = $('.navbar');
      var $hero = $('.hero-image')
      $nav.toggleClass('scrolled', $(this).scrollTop() > $hero.height());
    });
  });

  return (
    <div>
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/">RADFORD MEETINGS</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="javascript:void(0);">
                <Link to="/">MEETING LIST</Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="javascript:void(0);">
              <Link target={'_blank'} to="https://radfordonline.com">OFFICIAL RADFORD</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
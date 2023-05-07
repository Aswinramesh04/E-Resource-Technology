import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import {MdMenu, MdShoppingCart} from "react-icons/md";
import{ Col } from "react-bootstrap";



const Navigation = () => {

  return ( 
  <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="Home">Bignr</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Quiz">Quiz</Nav.Link>
            <Nav.Link href="Search">Search</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Upload">Upload</Nav.Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="Python">Python</NavDropdown.Item>
              <NavDropdown.Item href="Ml">Machine Learning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Android Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Data Structures and Algorithm
              </NavDropdown.Item>
            </NavDropdown>
            

            <Col xl={0}>
            <div className='navbar-btns flex'>
            <Link to = "/cart" className='cart-btn'>
              <MdShoppingCart />
              <span className='item-count-badge'>0</span>
            </Link>
            <button type = "button" 
            className='sidebar-open-btn'>
              <MdMenu />

              <Col xl={0}>
              <div className="template-container">
                <div className="searchInput_Container">
                  <input id="searchInput" type="text" placeholder="Coming soon..." onChange={(event) => {
          }} />

              </div>

              </div>
              </Col>

            
              
        
            </button>
          </div>
          </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}



export default Navigation;
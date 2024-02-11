import React from 'react'
import {Navbar,Nav, Container, Image, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './Action/RegisterAction';
import { RiShoppingCartFill } from "react-icons/ri";

export default function BelowBar() {

 const dispatch = useDispatch();
const cartState= useSelector((state)=> state.CartReducer)

const userState = useSelector((state)=> state.loginUserReducer)
console.log(userState)
const {currentUser} = userState;


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Image src={require("../Images/pzza.png")}  style={{ height: "6rem", width: "9rem" }}></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
{currentUser ? (
    <LinkContainer to="/">
    <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
      <LinkContainer to="/orders">
        <NavDropdown.Item>orders</NavDropdown.Item>
      </LinkContainer>
      
        <NavDropdown.Item onClick={() => {
                        dispatch(logoutUser());
                      }}
        >Logout</NavDropdown.Item>
   
    </NavDropdown>
  </LinkContainer>
):
 (<>
 <LinkContainer to="/login"><Nav.Link href="#login">Login</Nav.Link></LinkContainer>
            <LinkContainer to="/register"><Nav.Link href="#register">Register</Nav.Link></LinkContainer>
          
 </>)
}
<LinkContainer to="/cart">
                <Nav.Link>Cart <RiShoppingCartFill />{cartState.cartItem.length}</Nav.Link>
              </LinkContainer>     

              </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

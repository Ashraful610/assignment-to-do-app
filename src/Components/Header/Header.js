import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
     const [user , setUser] = useState({})

      const navigate = useNavigate()
      onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        navigate('/home')
      } 
      })

      const handleSignOut = () => {
        signOut(auth)
        toast.success('User successfully sign out')
    }

    return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='title'>To Do App</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
              <Link to='/home' className='link'>Home</Link>
              {
                user?.uid ? <button className='btn btn-link' onClick={handleSignOut}>SignOut</button>:
                <Link to='/' className='link'>SignUp</Link> 
              }
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;
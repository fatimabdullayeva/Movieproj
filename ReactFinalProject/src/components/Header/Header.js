import React,{useState} from 'react';
import './Header.css';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
  } from 'mdb-react-ui-kit'
import SearchBox from '../SearchBox/SearchBox';

  
function Header() {
    const [showNav, setShowNav] = useState(false);
    return (
        <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav} style={{height:'5%'}}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                 Home  
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink href='/favorites'>Favorites</MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink href='/basket'>Basket</MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    );

}

export default Header;
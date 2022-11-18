//import HeaderNav from "carbon-components/src/components/ui-shell/header-nav";
//import Container from 'react-bootstrap/Container';
/*import {Navbar,
  NavItem,
  NavbarBrand,
  NavLink,
  Nav} from 'react-bootstrap';*/
import UserAvator1 from "./UserAvator";

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  Theme,
  Column
} from "@carbon/react";
import { Grid, Row } from "carbon-components-react";

/*
const Header= ({children}) => {
  return (
      <>
        <Navbar bg="dark" expand="lg" >
          <Container>

            <Navbar.Brand className={"profile-heading"} href={"#home"}>Build Your Profile</Navbar.Brand>
            <Navbar.Toggle color={"#fff"} aria-controls={"responsive-navbar-nav"} />
            <Navbar.Collapse id={"responsive-navbar-nav"} >
              <Nav className={"ms-auto"}>
                <Nav.Link className={"profile-heading"} href="home">Home</Nav.Link>
                <Nav.Link className={"profile-heading"} href="profile">Profile</Nav.Link>
                <Nav.Link className={"bi bi-person-circle"} > <UserAvator1 />

                </Nav.Link>
              </Nav>

            </Navbar.Collapse>

          </Container>
        </Navbar>

          {children}
      </>
  )
}
*/

const Header1 = ({children}) => {
  return (
      <>
        <Theme theme="g100">
          <Header aria-label="IBM Platform Name">
            <HeaderName href="#" prefix={'Build'}>
              Your Profile
            </HeaderName>
            <HeaderNavigation aria-label="Build Your Profile">
              <HeaderMenuItem href="#">Home</HeaderMenuItem>
              <HeaderMenuItem href="http://localhost:3001/profile">Profile</HeaderMenuItem>

            </HeaderNavigation>
          </Header>
        </Theme>
        {children}
       </>
  )
}

export default Header1;

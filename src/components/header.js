import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar } from 'react-bootstrap'
import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header>
    {/* {siteTitle} */}
    <Container fluid className="p-0">
    <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
      <Navbar.Brand href="">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Menu />
      </Navbar.Collapse>
    </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

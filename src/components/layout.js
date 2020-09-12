/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from 'react-bootstrap'

import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./stylesheet.css"
/* import "./layout.css" */


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container fluid className="p-0">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://harlemfilmcompany.com/">Harlem Film Company</a>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

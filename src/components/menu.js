import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Nav } from 'react-bootstrap'

import UniversalLink from "./universalLink"

const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: {eq: "primary"}) {
        name
        menuItems {
          nodes {
            label
            url
            databaseId
            connectedNode {
              node {
                uri
              }
            }
          }
        }
      }
    }

  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <Nav>
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

          const itemId = "menu-item-" + menuItem.databaseId

          return (
              <UniversalLink
                id={itemId}
                to={path}
                activeClassName={"active"}
                className="nav-link"
                key={i + menuItem.url}
              >
                {menuItem.label}
              </UniversalLink>
          )
        })}
      </Nav>
  )
}

export default Menu

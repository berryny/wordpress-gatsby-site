import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import { Container, Jumbotron } from 'react-bootstrap'

const PageTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wpPage.title}
      description={data.wpPage.excerpt}
    />

    <Jumbotron fluid>
      <Container>
        <h1>{data.wpPage.title}</h1>
      </Container>
    </Jumbotron>

    <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query($id: String ) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`

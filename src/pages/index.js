import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title={data.wpPage.title} />

    {/*<h1>{data.wpPage.title}</h1>*/}
    <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    wpPage(isFrontPage: {eq: true}) {
    id
    uri
    title
    content
    }
  }
`

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from "../components/layout"

const Gallery = () => {
  const data = useStaticQuery(graphql`
  query {
    madu1: file(relativePath: {eq: "madu-sialang.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    madu2: file(relativePath: {eq: "madu-sialang2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
           }
         }
      }
   }
`)

  return (
    <div>
      <Layout>
        <SEO title="Madu Abu Bakar Asli" />
        <p>
          <Img fluid={data.madu1.childImageSharp.fluid} />
        </p>
        <p>
          <Img fluid={data.madu2.childImageSharp.fluid} />
        </p>
      </Layout>
    </div>
  )
}

export default Gallery

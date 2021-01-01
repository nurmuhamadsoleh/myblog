import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from '../components/layout'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      madu: file(relativePath: {eq: "madu-abubakar1.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Manfaat Madu Hutan Asli" />
      <h1>Halo.</h1>
      <h2>Selamat Datang di Web Blog Madu Abu Bakar. Tempatnya Madu Asli dan Berkualitas.</h2>

      <p><Img fluid={data.madu.childImageSharp.fluid} /></p>
      
      <p>Madu Abu Bakar merupakan Madu Asli Sialang Berkualitas dari Hutan Apis Riau Sumatera yang dijamin Kualitasnya.</p>
      <p>Mau Pesan Madu Abu Bakar? <Link to="/contact">Hubungi Kami.</Link></p>
    </Layout>
  )
}

export default IndexPage

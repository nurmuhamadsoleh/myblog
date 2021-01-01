import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Layout from '../components/layout'

const AboutPage = () => {
    const data = useStaticQuery(graphql`
      query {
        madu: file(relativePath: {eq: "madu-abubakar2.jpg"}) {
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
      <SEO title="Madu Abu Bakar Asli" />
      <p>
        <Img fluid={data.madu.childImageSharp.fluid} />
      </p>
      <h1>About.</h1>
      <p>Madu Abu Bakar adalah brand yang menjual produk-produk madu Asli dan berkualitas. Madu yang kami jual sudah diuji terlebih dahulu ke Asliannya sehingga konsumen kami merasa puas dengan madu yang debeli.</p>
      <p>Madu Abu Bakar hanya menjual madu yang betul-betul Asli dan berkualitas tinggi dengan harga yang kompetitif tentunya.</p>
      <p>Madu Abu Bakar saat ini menjual Madu Sialang Asli dari Hutan Riau Sumatra yang dijamin Kualitas dan ke Asliannya.</p> 
      <p>Blog MaduAbuBakar.Com ini sebagai media informasi dan pengetahuan mengenai Madu Sialang yang kami pasarkan, sekaligus tempat kami mempromosikan Produk yang kami jual. Anda dapat memesan langsung di MaduAbuBakar.Com ini produk madu Sialang yang diinginkan dengan cara menghubungi admin kami di WA.</p>  
      <p><a href="https://wa.me/+6285312261634" target="_blank">maduabubakar</a> Wa Chat.</p>
    </Layout>
  )
}

export default AboutPage

import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import SEO from '../components/seo'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
           }
             fields {
               slug
                  }
          }
        }
      },
      file(relativePath: {eq: "madu-abubakar1.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            tracedSVG
           }
          }
        }
      }
`)

return (
    <Layout>
      <SEO title="Madu Abu Bakar Madu Asli" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
	  return (
	    <li className={blogStyles.post}>
	      <Link to={`/blog/${edge.node.fields.slug}`}>
	        <h3>{edge.node.frontmatter.title}</h3>
	        <p>{edge.node.frontmatter.date}</p>
        </Link>
	    </li>
	      )
	    })}
      </ol>
    </Layout>
  )
}

export default BlogPage

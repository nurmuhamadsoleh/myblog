import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import SEO from '../components/seo'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM do, YYYY")
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
        {data.allContentfulBlogPost.edges.map((edge) => {
	  return (
	    <li className={blogStyles.post}>
	      <Link to={`/blog/${edge.node.slug}`}>
	        <h3>{edge.node.title}</h3>
	        <p>{edge.node.publishedDate}</p>
        </Link>
	    </li>
	      )
	    })}
      </ol>
    </Layout>
  )
}

export default BlogPage

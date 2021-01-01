import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
  graphql`
    query {
      site {
        siteMetadata {
	  title
	  author
	}
      } 
    }
  `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
	  name: `description`,
	  content: metaDescription,
	},
	{
	  property: `og:description`,
	  content: metaDescription,
	},
	{
	  property: `og:type`,
	  content: `website`,
	},
	{
	  name: `facebook:card`,
	  content: `summery`,
	},
	{
	  name: `facebook:title`,
	  content: title,
	},
	{
	  name: `facebook:description`,
	  content: metaDescription,
	},
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `eng`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

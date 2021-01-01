module.exports = {
  siteMetadata: {
    title: `Manfaat Madu Hutan Asli`,
    author: `MaduAbuBakar.Com`,
    description: `Madu Abu Bakar Hanya menjual Madu Asli Madu Hutan Sialang Riau`,
  },
  plugins: [
	  {
	    resolve: 'gatsby-source-contentful',
	    options: {
	      spaceId: "gs3y5bnutt2i",
	      accessToken: "fLPSmzp3_wMIxHm_6RvNh2LQG-09Ff9sSMAWzs6o_KM",
	    }
	  },
	  `gatsby-plugin-react-helmet`,
	{
	  resolve: `gatsby-source-filesystem`,
	  options: {
		name: `images`,
	    path: `${__dirname}/src/posts/images/`,
		},
	},
	`gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
	  {
	    resolve: `gatsby-source-filesystem`,
	    options: {
	    name: `src`,
	    path: `${__dirname}/src/`,
	  },
      },
	   `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
	options: {
	  plugins: [
 	    `gatsby-remark-relative-images`,
	       {
	         resolve: `gatsby-remark-images`,
		 options: {
		   maxWidth: 750,
		   linkImagesToOriginal: false
		 }
	      }
	  ],
    }
    }
  ],
}

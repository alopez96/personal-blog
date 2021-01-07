/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import selfie from '../../content/assets/profile-pic.jpg'
import Icon from './Icon'
import insta from './../../content/assets/icons/instagram.svg'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <img src={selfie}
        className="bio-avatar"
        alt={author?.name || ``}/>
      )}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <br></br>
          <Icon icon={insta} link={`https://www.instagram.com/arturo_creates/`}/>
          <br></br>
          <a href='https://www.linkedin.com/in/rturolopez/'>
            LinkedIn
          </a>
          {/*
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
          Twitter
          </a>  */}
        </p>
      )}
    </div>
  )
}

export default Bio

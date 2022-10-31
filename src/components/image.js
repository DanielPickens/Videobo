import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

//improve the image component
function Image({ src, alt, ...props }) {
  

  const data = useStaticQuery(graphql`

    query {
      allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  }

export default Image

  

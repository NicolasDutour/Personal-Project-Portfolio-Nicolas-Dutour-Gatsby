import React, { useEffect } from "react"
import Swiper from "swiper"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import "./slider.css"

const Image = styled(Img)`
  border-radius: 20px;
`

const Slider = () => {
  const data = useStaticQuery(graphql`
    query getProjectsSliderQuery {
      allContentfulProjects {
        edges {
          node {
            thumbnail {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            webSiteName
            contentful_id
          }
        }
      }
    }
  `)

  useEffect(() => {
    new Swiper(".swiper-container", {
      effect: "cube",
      grabCursor: true,
      loop: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    })
  }, [])

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {data.allContentfulProjects.edges.map(edge => (
          <div className="swiper-slide" key={edge.node.contentful_id}>
            <Image fluid={edge.node.thumbnail.fluid} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider

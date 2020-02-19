import React, { useEffect } from "react"
import Swiper from "swiper"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import "./slider.css"

const Image = styled(Img)`
  border-radius: 20px;
`

const Title = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
`

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: #fff;
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.primary};
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
            linkWebSite
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
            <Title> {edge.node.webSiteName} </Title>
            <Button
              as="a"
              href={edge.node.linkWebSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Site Web
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider

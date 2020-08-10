import React from "react"
import Project from "../components/cards/project"
import { useStaticQuery, graphql } from "gatsby"

export default function Projects() {
  const photos = useStaticQuery(query)

  return (
    <div className='page-section' id='projects'>
      <div className="heading"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <h1>Projects I've Developed</h1>
      </div>
      <div className="project-container">
        <Project
          orient="right"
          link="http://mezcalmtl.ca/"
          title="Mezcal Montreal"
          desc="Mezcal Montreal landing page"
          stack={["gatsby.png", "materialui.svg", "sass.png", "graphql.svg", "getform.svg"]}
          api="GetForm connected to Zapier and Google Docs for event registration"
          image={photos.allFile.edges[2].node.childImageSharp.fluid}
          >
        </Project>
        <Project
          orient="left"
          link="http://www.dontdiefood.com/"
          title="Don't Die Food"
          desc="Mobile-first webapp for sharing food in local communities"
          stack={["rails.svg", "ruby.svg", "html5.svg", "css3.png", "javascript.png"]}
          api="Spoonacular for recipe generation"
          image={photos.allFile.edges[0].node.childImageSharp.fluid}
          >
        </Project>
        <Project
          orient="right"
          link="https://blockwagon.herokuapp.com/"
          title="Blockwagon"
          desc="Online marketplace for VHS tapes"
          stack={["rails.svg", "ruby.svg", "html5.svg", "css3.png", "javascript.png"]}
          api="OMDB for generating video information"
          image={photos.allFile.edges[1].node.childImageSharp.fluid}
          >
        </Project>
      </div>
    </div>
  )
}

const query = graphql`
  query projectsQuery {
    allFile(filter: {absolutePath: {regex: "/projects/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

import React from "react"
import PhotoCover from "./cards/photo-cover"
import { useStaticQuery, graphql } from "gatsby"

export default function Photography({heading}) {
  const photos = useStaticQuery(query)

  return (
    <div className='page-section' id='photography'>
      <div className="heading"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <h1>{heading}</h1>
      </div>
      <div className="photo-collections"
        data-sal="fade"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <PhotoCover
          link="montreal-summer2020"
          cover={photos.summer.edges[0].node.childImageSharp.fluid}
          title="Montreal Summer 2020"
          camera="Nikon D300"
        >
        </PhotoCover>
        <PhotoCover
          link="concert-photos"
          cover={photos.concert.edges[0].node.childImageSharp.fluid}
          title="Concert Photography"
          camera="Nikon D7000"
        >
        </PhotoCover>
        <PhotoCover
          link="montreal-winter2020"
          cover={photos.winter.edges[0].node.childImageSharp.fluid}
          title="Montreal Winter/ Spring 2020"
          camera="Nikon D300, Film"
        >
        </PhotoCover>
        <PhotoCover
          link="van2020"
          cover={photos.van.edges[0].node.childImageSharp.fluid}
          title="Vancouver 2020"
          camera="Nikon D300"
        >
        </PhotoCover>
        <PhotoCover
          link="belize2019"
          cover={photos.belize.edges[0].node.childImageSharp.fluid}
          title="Belize 2019"
          camera="Film, Cell Phone"
        >
        </PhotoCover>
      </div>
    </div>
  )
}

const query = graphql`
  query photographyQuery {
    summer: allFile(filter: {absolutePath: {regex: "/Summer/"}}) {
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
    concert: allFile(filter: {absolutePath: {regex: "/Concert/"}}) {
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
    winter: allFile(filter: {absolutePath: {regex: "/Winter/"}}) {
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
    van: allFile(filter: {absolutePath: {regex: "/Van/"}}) {
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
    belize: allFile(filter: {absolutePath: {regex: "/Belize/"}}) {
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

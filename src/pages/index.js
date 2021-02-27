import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { SEO, Jumbo } from "../components"

export const query = graphql`
  query GET_DESCRIPTION{
    allSite{
      edges{
        node{
          siteMetadata{
            description
          }
        }
      }
    }
  }
`
const Button = styled.button`
  width: 6rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  transition: transform ease-in-out .3s;
  &:hover{
    transform: scale(1.4);
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Button> Comprar </Button>
  </>
)


export default IndexPage

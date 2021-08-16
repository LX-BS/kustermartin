import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="15. August 2021"
          title="Some Title"
          excerpt="someshizzle"
          slug="testtest"
        />
      </Content>
    </Container>
  )
}

export default IndexPage

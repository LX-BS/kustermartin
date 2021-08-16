import React from "react"
import { CardWrapper, P, H2 } from "../elements"
import { Button } from "../components"

export const ContentCard = ({ date, title, excerpt, slug }) => {
  return (
    <CardWrapper>
      <P size="xsmall" color="dark" textAlign="center" margin="0 0 0.5rem">
        {date}
      </P>
      <H2 textAlign="center" margin="0 0 1rem 0">
        {title}
      </H2>
      <P size="small" color="dark" textAlign="center" margin="0 0 1.5rem">
        {excerpt}
      </P>
      <Button href={slug}>Read more</Button>
    </CardWrapper>
  )
}

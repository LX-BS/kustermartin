import React from "react"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href="instagram.com" target="_blank" rel="noopener norefferer">
            <p>Instagram</p>
          </a>
          <a href="kustermartin.ch" target="_blank" rel="noopener norefferer">
            <p>Mail</p>
          </a>
        </FooterSocialIcons>
        <P size="xsmall" color="dark">
          kustermartin 2021
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}

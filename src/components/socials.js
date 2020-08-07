import React from "react"
import styled from "styled-components"

import spotify from "../images/socials/spotify.svg"
import instagram from "../images/socials/instagram.svg"
import facebook from "../images/socials/facebook.svg"
import youtube from "../images/socials/youtube.svg"
import twitter from "../images/socials/twitter.svg"
import tiktok from "../images/socials/tiktok.svg"

const SocialList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`
const SocialWrapper = styled.div`
  margin-top: 1rem 0;
`

const SocialIcon = styled.img`
  width: 24px;
  @media ${({ theme }) => theme.screens.md} {
    width: 36px;
  }
`

const Social = styled.a`
  &:hover {
    filter: brightness(90%);
  }
`

const Socials = () => (
  <SocialWrapper>
    <SocialList>
      <Social href="https://open.spotify.com/artist/2tgiYwxtLjrqv5CzzM7sy8?si=5tC5mjlITVaHEVNE34_YPw">
        <SocialIcon src={spotify} />
      </Social>
      <Social href="https://www.instagram.com/cowboymeetspirate/">
        <SocialIcon src={instagram} />
      </Social>
      <Social href="https://www.facebook.com/CowboyMeetsPirateBand">
        <SocialIcon src={facebook} />
      </Social>
      <Social href="https://vm.tiktok.com/THrRE6/">
        <SocialIcon src={tiktok} />
      </Social>
      <Social href="https://www.youtube.com/CowboyMeetsPirate">
        <SocialIcon src={youtube} />
      </Social>
      <Social href="https://twitter.com/CMPTheBand">
        <SocialIcon src={twitter} />
      </Social>
    </SocialList>
  </SocialWrapper>
)

export default Socials

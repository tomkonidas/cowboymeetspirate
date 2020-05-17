import React from "react"
import styled from "styled-components"

import spotify from "../images/socials/spotify.svg"
import instagram from "../images/socials/instagram.svg"
import facebook from "../images/socials/facebook.svg"
import youtube from "../images/socials/youtube.svg"
import twitter from "../images/socials/twitter.svg"

const SocialList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const SocialWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
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
      <Social href="https://open.spotify.com/artist/2tgiYwxtLjrqv5CzzM7sy8?si=5tC5mjlITVaHEVNE34_YPw">
        <SocialIcon src={instagram} />
      </Social>
      <Social href="https://open.spotify.com/artist/2tgiYwxtLjrqv5CzzM7sy8?si=5tC5mjlITVaHEVNE34_YPw">
        <SocialIcon src={facebook} />
      </Social>
      <Social href="https://open.spotify.com/artist/2tgiYwxtLjrqv5CzzM7sy8?si=5tC5mjlITVaHEVNE34_YPw">
        <SocialIcon src={youtube} />
      </Social>
      <Social href="https://open.spotify.com/artist/2tgiYwxtLjrqv5CzzM7sy8?si=5tC5mjlITVaHEVNE34_YPw">
        <SocialIcon src={twitter} />
      </Social>
    </SocialList>
  </SocialWrapper>
)

export default Socials

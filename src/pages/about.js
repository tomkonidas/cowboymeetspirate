import React from "react"

import Layout from "../components/layout"
import Team from "../components/team"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Meet The Team" />
    <div>
      <h1>About</h1>
      <h2>Montreal Hard Rock</h2>
      <p>
        I'm baby twee bicycle rights pitchfork gentrify taxidermy. Semiotics
        fingerstache before they sold out activated charcoal. Helvetica portland
        farm-to-table tumeric twee plaid. Gochujang occupy humblebrag tousled
        next level brooklyn cornhole tofu. Tumeric hot chicken hell of swag,
        etsy flexitarian subway tile DIY mixtape normcore gluten-free. Hashtag
        adaptogen mustache air plant flexitarian street art enamel pin messenger
        bag dreamcatcher succulents tattooed vegan everyday carry woke.
      </p>
    </div>
    <Team />
  </Layout>
)

export default About

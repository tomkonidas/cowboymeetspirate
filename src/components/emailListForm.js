import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

const EmailListWrapper = styled.div`
  form {
    display: flex;
  }
  input {
    color: #2a2a2a;
    border: none;
  }

  button,
  input {
    padding: 1rem 1.5rem;
  }
  input[type="email"] {
    width: 300px;
  }
  input[type="submit"] {
    transition: all 0.1s linear;
    background-color: ${({ theme }) => theme.colors.main};
    color: white;

    &:hover {
      background-color: ${({ theme }) => theme.colors.mainDark};
      cursor: pointer;
    }
  }
`

export default class IndexPage extends React.Component {
  state = {
    email: null,
  }

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  render() {
    return (
      <EmailListWrapper>
        <form onSubmit={this._handleSubmit}>
          <input
            type="email"
            onChange={this._handleChange}
            placeholder="Slap your email here for cool stuff"
            name="email"
          />
          <input value="Subscribe" type="submit" />
        </form>
      </EmailListWrapper>
    )
  }
}

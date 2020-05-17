import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

const EmailListWrapper = styled.div`
  width: 100%;
  display: flex;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  input {
    color: #2a2a2a;
    border: none;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  button,
  input {
    padding: 1rem 1.5rem;
  }
  input[type="email"]:focus {
    outline-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.accent};
  }
  input[type="submit"] {
    transition: all 0.1s linear;
    font-weight: bolder;
    background-color: ${({ theme }) => theme.colors.pop};

    &:hover {
      filter: brightness(90%);
      cursor: pointer;
    }
  }

  @media ${({ theme }) => theme.screens.md} {
    form {
      flex-direction: row;
    }
    input {
      width: auto;
    }
    input[type="submit"] {
      margin-right: auto;
    }
    input[type="email"] {
      margin-left: auto;
      width: 300px;
      z-index: 100;
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

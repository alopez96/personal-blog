//MailchimpForm.jsx

import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import React from "react"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: {} }
  }
  _handleSubmit = async e => {
    e.preventDefault()
    try {
        const result = await addToMailchimp(this.state.email)
        this.setState({result: result})
        console.log('result', result)
    } catch(error) {
        console.log('error', error)
    }
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }
render() {
    return (
        (this.state.result.result == "error"
        ?<div>
            <p className='red'> Error: <br></br>
            {this.state.result.msg}</p>
        </div>
            :
            <form onSubmit={this._handleSubmit}>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
            onChange={this.handleChange}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            label="Submit"
            type="submit"
          >
            <Typography variant="button">Subscribe</Typography>
          </Button>
        </form>
            )
      )
  }
}
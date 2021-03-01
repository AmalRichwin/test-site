import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <form
      name="contactusForm"
      method="POST"
      action="/contact-thanks"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      id="contact-form"
      className="contact-form"
    >
      <input name="bot-field" hidden />
      <input
        type="text"
        name="name"
        id="contact-form-name"
        className="form-input"
      />
      <input
        type="email"
        name="email"
        id="contant-form-email"
        className="form-input"
      />
      <textarea
        name="message"
        id="contant-form-message"
        className="form-textarea"
        rows="7"
      />
      <input type="hidden" name="form-name" value="contactusForm" />
      <button type="submit">Send Message</button>
    </form>
  </Layout>
)

export default IndexPage

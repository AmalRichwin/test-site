import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <form
      name="Enquiry Form Submission"
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      id="Enquiry-Form"
      className="flex flex-col"
    >
      <span className="mt-4 mb-2 text-lg font-bold text-black uppercase md:mt-0">
        CONTACT US
      </span>
      <input name="bot-field" hidden />
      <input type="hidden" name="form-name" value="Enquiry Form Submission" />
      <input name="subject" value="Contact Us Form Submission" hidden />
      <div className="my-2">
        <input
          className="px-3 py-3 pt-2 pb-2 placeholder-black border border-gray-900 rounded-lg appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name here"
        />
      </div>
      <div className="my-2 md:w-80">
        <input
          className="w-full px-3 py-3 pt-2 pb-2 placeholder-black border border-gray-900 rounded-lg appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
          id="email"
          name="email"
          placeholder="Your email address. We promise no spam!"
          type="email"
          required
        />
      </div>
      <div className="my-2 md:w-80">
        <input
          className="w-full px-3 py-3 pt-2 pb-2 placeholder-black border border-gray-900 rounded-lg appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
          id="phone"
          name="phone"
          type="tel"
          pattern="[0-9]{10}"
          placeholder="Your mobile number."
        />
      </div>
      <div className="my-2 md:w-80">
        <textarea
          name="message"
          className="w-full px-3 py-3 pt-2 pb-2 placeholder-black border border-gray-900 rounded-lg appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
          id="message"
          placeholder="Got any questions? Shoot them, we'll answer!"
          required
        />
      </div>
      <div className="flex my-2">
        <button
          type="submit"
          className="w-1/3 p-3 mb-2 ml-auto font-bold text-white bg-gray-600 rounded-lg hover:bg-black"
        >
          SUBMIT
        </button>
      </div>
    </form>
  </Layout>
)

export default SecondPage

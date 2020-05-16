import React from 'react'
import footerImage from '../images/footer.png'
import logo from '../images/logo.png'
import headerImage from '../images/header.png'
import { NavLinks } from './header'

const Footer = ({ content }) => (
  <footer>
    <div className="flex background-image-container bg-dark-blue min-h-screen">
      <img
        className="background-image"
        alt="footer-background"
        src={footerImage}
      />
      <div className="relative z-10 flex-1 flex justify-between flex-col">
        <div className="mx-auto max-w-xl flex flex-1 justify-center mt-40 pt-40 relative z-10">
          <div className="flex flex-col items-center">
            <img alt="logo" src={logo} width={220} className="mb-20" />
            <NavLinks />
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center bg-dark-blue text-white max-w-lg px-6 py-10 mt-10 mb-10 mx-auto"
          style={{ borderRadius: 12 }}
        >
          <p className="quatro text-center">
            Sign up for our mailing list for exclusive news and updates
          </p>
          <div className="flex mt-6 w-full justify-between border-2 rounded-full">
            <input
              className="pl-4 outline-none"
              placeholder="your email here"
            />
            <button className="button text-black bg-white rounded-full text-sm px-4">
              Submit
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto my-10">
          <img
            alt="logo"
            src={headerImage}
            width={220}
            className="hidden md:block"
          />
          <nav>
            <span
              target="_blank"
              className="nav-link mx-3 text-sm"
              rel="noopener noreferrer"
            >
              © All Rights Reserved
            </span>
            <a
              target="_blank"
              className="nav-link mx-3 text-sm"
              rel="noopener noreferrer"
              href="/privacy"
            >
              Privacy
            </a>
            <a
              target="_blank"
              className="nav-link mx-3 text-sm"
              rel="noopener noreferrer"
              href="/terms"
            >
              Terms
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

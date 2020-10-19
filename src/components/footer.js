import React from 'react'
import footerImage from '../images/footer.png'
import logo from '../images/logo.png'
import headerImage from '../images/header2.png'
import { NavLinks } from './header'

const Footer = ({ location, content }) => (
  <footer>
    <div
      className="flex background-image-container bg-dark-blue"
      style={{ height: 840, zIndex: 100, position: 'relative' }}
    >
      <img
        className="background-image"
        alt="footer-background"
        src={footerImage}
        style={{ top: -200, height: '134%' }}
      />
      <div
        className="relative z-10 flex-1 flex justify-between items-center flex-col self-end"
        style={{ height: 530 }}
      >
        <div className="mx-auto max-w-3xl flex justify-center relative z-10">
          <div className="flex flex-col items-center">
            <img alt="logo" src={logo} width={200} className="mb-10" />
            <NavLinks location={location} />
          </div>
        </div>

        {/* <div
          className="flex flex-col justify-center items-center bg-dark-blue text-white max-w-lg px-10 py-10 mx-10"
          style={{ borderRadius: 12 }}
        >
          <form
            action="https://thepmcf.us1.list-manage.com/subscribe/post"
            method="post"
          >
            <input type="hidden" name="u" value="aa449736ade3b13ffe2102e4a" />
            <input type="hidden" name="id" value="0cd3d3511b" />
            <p className="quatro text-center text-sm">
              Sign up to our mailing list for exclusive news and updates
            </p>
            <div
              className="flex mt-6 w-full justify-between border-2 rounded-full"
              style={{ borderColor: 'white' }}
            >
              <input
                className="pl-4 outline-none"
                placeholder="your email here"
                type="email"
                autoCapitalize="off"
                autoCorrect="off"
                name="MERGE0"
                id="MERGE0"
              />
              <input
                type="submit"
                label="submit"
                className="button text-black bg-white rounded-full text-sm px-4"
                style={{ width: 150 }}
              />
            </div>
          </form>
        </div> */}

        <div className="flex justify-between items-center w-full max-w-6xl px-4 my-10">
          <img
            alt="logo"
            src={headerImage}
            width={220}
            className="hidden md:block"
          />
          <nav>
            <span
              target="_blank"
              className="nav-link mx-3 text-xs"
              rel="noopener noreferrer"
            >
              © All Rights Reserved
            </span>
            <a
              target="_blank"
              className="nav-link mx-3 text-xs"
              rel="noopener noreferrer"
              href="/privacy"
            >
              Privacy
            </a>
            <a
              target="_blank"
              className="nav-link mx-3 text-xs"
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

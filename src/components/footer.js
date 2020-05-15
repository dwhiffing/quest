import React from 'react'
import footerImage from '../images/footer.png'
import { Nav } from './header'
import aboutImage from '../images/header.png'

const Footer = ({ content }) => (
  <footer>
    <div className="flex background-image-container bg-dark-blue min-h-screen">
      <img
        className="background-image"
        alt="footer-background"
        src={footerImage}
      />
      <div className="relative z-10 flex-1 flex justify-between flex-col">
        <div className="mx-auto max-w-xl flex flex-1 justify-center mt-20 pt-40 relative z-10">
          <Nav siteTitle="foo" />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
          <img alt="about" src={aboutImage} width={300} />
          <nav>
            <span target="_blank" rel="noopener noreferrer">
              All Rights Reserved
            </span>
            <a target="_blank" rel="noopener noreferrer" href="/privacy">
              Privacy
            </a>
            <a target="_blank" rel="noopener noreferrer" href="/terms">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

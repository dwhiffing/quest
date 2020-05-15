import React from 'react'

const Footer = ({ content }) => (
  <footer>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </footer>
)

export default Footer

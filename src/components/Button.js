import React from 'react'
export const Button = ({ button, background, textColor, className = '' }) =>
  button ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={button.url}
      className={`button inline-flex bg-${textColor ||
        'white'} text-${background} ${className}`}
    >
      {button.text}
    </a>
  ) : (
    false
  )

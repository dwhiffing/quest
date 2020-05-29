import React from 'react'
export const Button = ({
  button,
  background,
  textColor,
  style,
  className = '',
}) =>
  button && button.text ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={button.url}
      style={style}
      className={`button inline-flex bg-${textColor || 'white'} text-${
        background === 'transparent' ? 'dark-blue' : background
      } ${className}`}
    >
      {button.text}
    </a>
  ) : (
    false
  )

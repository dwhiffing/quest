import React from 'react'
import { Button } from './Button'

export const TextSection = block => (
  <>
    <Heading className="mb-6">{block.title}</Heading>
    <Body>{block.content || block.subtitle}</Body>
    <Button {...block} className="mt-8" />
  </>
)

export const Heading = ({ children, style, className = '' }) => (
  <h1 className={className} style={style}>
    {children}
  </h1>
)
export const Body = ({ children, style, className = '' }) => (
  <p className={className} style={style}>
    {children}
  </p>
)

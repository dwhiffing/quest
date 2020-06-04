import React from 'react'
import { Button } from './Button'

export const TextSection = block => (
  <>
    <Heading className="mb-6">{block.title}</Heading>
    <Body>{block.content || block.subtitle}</Body>
    <Button {...block} className="mt-8" />
    {block.button2 && (
      <Button {...block} button={block.button2} className="mt-4" />
    )}
  </>
)

export const Heading = ({ children, style, className = '' }) => (
  <h1
    className={className}
    style={style}
    dangerouslySetInnerHTML={{ __html: children }}
  />
)
export const Body = ({ children, style, className = '' }) => (
  <p
    className={className}
    style={style}
    dangerouslySetInnerHTML={{ __html: children }}
  />
)

import React from 'react'
import { TextSection, Body } from '../TextSection'

const Contact = ({ block }) => (
  <section className={`background-image-container bg-${block.background}`}>
    <div className="container mx-auto pt-10 mt-20">
      <div className="flex justify-center items-center">
        <div
          className={`relative z-10 py-20 max-w-xl mx-auto text-center text-${block.textColor ||
            'white'}`}
          style={{
            position: block.top ? 'absolute' : 'static',
            top: block.top,
          }}
        >
          <TextSection {...block} />
        </div>
      </div>

      <div className="flex flex-1 flex-col text-white max-w-xl mx-auto">
        <div className="flex flex-1">
          <Input label="Full Name" />
          <Input label="Email Address " />
        </div>

        <div className="flex flex-1">
          <Input label="Company" />
          <Input label="Where did you hear about us?" />
        </div>

        <div className="flex flex-1">
          <TextArea label="Comments" />
        </div>

        <button className="button text-black bg-white rounded-full text-sm px-4 self-start">
          Submit
        </button>
      </div>
    </div>
  </section>
)

export default Contact

function Input({ label }) {
  return (
    <div className="flex-1 mx-2 mb-6">
      <Body className="mb-1" style={{ fontSize: 18 }}>
        {label}
      </Body>
      <div className="border" style={{ borderColor: '#4f5463' }}>
        <input className="pl-4 outline-none" style={{ minHeight: 40 }} />
      </div>
    </div>
  )
}

function TextArea({ label }) {
  return (
    <div className="flex-1 mx-2 mb-6">
      <Body className="mb-1" style={{ fontSize: 18 }}>
        {label}
      </Body>
      <div className="border" style={{ borderColor: '#4f5463' }}>
        <textarea
          className="pl-4 outline-none h-full w-full bg-transparent"
          style={{ minHeight: 100, resize: 'none' }}
        />
      </div>
    </div>
  )
}

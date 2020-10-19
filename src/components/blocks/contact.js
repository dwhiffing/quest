import React, { useEffect, useState } from 'react'
import { TextSection } from '../TextSection'
import { GoogleSpreadsheet } from 'google-spreadsheet'

// TODO: increase spacing of success state to match height of form
const Contact = ({ block }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [sheet, setSheet] = useState({})
  const [state, setState] = useState({
    name: '',
    email: '',
    about: '',
    phone: '',
    comments: '',
    company: '',
    type: 'General',
  })
  const { name, email, about, comments, company, phone, type } = state

  useEffect(() => {
    const doThing = async () => {
      if (!process.env.GATSBY_SHEET_ID || !process.env.GATSBY_SERVICE_ACCOUNT_EMAIL || !process.env.GATSBY_SERVICE_ACCOUNT_KEY) {
        return
      }
      
      const doc = new GoogleSpreadsheet(process.env.GATSBY_SHEET_ID)
      await doc.useServiceAccountAuth({
        client_email: process.env.GATSBY_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GATSBY_SERVICE_ACCOUNT_KEY,
      })
      await doc.loadInfo()
      const sheet = doc.sheetsByIndex[0]
      setSheet(sheet)
    }
    doThing()
  }, [])

  return (
    <section className={`background-image-container bg-${block.background}`}>
      <div className="container mx-auto pt-10 mt-20">
        <div className="flex justify-center items-center">
          <div
            className={`relative z-10 py-20 px-2 max-w-xl mx-auto text-center text-${block.textColor ||
              'white'}`}
            style={{
              position:
                block.top && block.top !== '0' && block.top !== '0px'
                  ? 'absolute'
                  : 'static',
              top: block.top,
            }}
          >
            <TextSection {...block} />
          </div>
        </div>

        {hasSubmitted ? (
          <div className="flex flex-1 flex-col text-white max-w-xl mx-auto">
            <div className="flex flex-1 justify-center">
              <p>Thanks for your submission!</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col text-white max-w-xl mx-auto">
            <form
              onSubmit={async e => {
                e.preventDefault()
                await sheet.addRow({
                  name,
                  email,
                  comments,
                  about,
                  company,
                  phone,
                  type,
                })
                setHasSubmitted(true)
              }}
            >
              <div className="flex flex-1">
                <Select
                  label="Type of Inquiry"
                  value={type}
                  onChange={e => setState({ ...state, type: e.target.value })}
                >
                  <option label="General" value="general" />
                  <option label="Game Developer" value="game_developer" />
                  <option label="Press" value="press" />
                  <option label="Brand Partner" value="brand_partner" />
                </Select>
              </div>

              <div className="flex flex-1">
                <Input
                  value={state.name}
                  required
                  onChange={e =>
                    setState({
                      ...state,
                      name: e.target.value,
                    })
                  }
                  label="Full name"
                />
                <Input
                  value={state.email}
                  required
                  onChange={e =>
                    setState({
                      ...state,
                      email: e.target.value,
                    })
                  }
                  type="email"
                  label="Email"
                />
              </div>

              <div className="flex flex-1">
                <Input
                  onChange={e =>
                    setState({
                      ...state,
                      company: e.target.value,
                    })
                  }
                  value={state.company}
                  label="Company"
                />
                <Input
                  onChange={e =>
                    setState({
                      ...state,
                      phone: e.target.value,
                    })
                  }
                  value={state.phone}
                  label="Phone number"
                  type="tel"
                  pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}"
                />
              </div>

              <div className="flex flex-1">
                <Select
                  label="Where did you hear about us?"
                  value={state.about}
                  onChange={e => setState({ ...state, about: e.target.value })}
                >
                  <option label="Streamer" value="streamer" />
                  <option label="Word of Mouth" value="word_of_mouth" />
                  <option label="Social Media" value="social_media" />
                  <option label="Your Organization" value="organization" />
                  <option label="Saw an ad for it" value="advertisement" />
                  <option label="Through PMCF" value="pmcf" />
                  <option label="Through search engines" value="search" />
                </Select>
              </div>

              <div className="flex flex-1">
                <TextArea
                  onChange={e =>
                    setState({
                      ...state,
                      comments: e.target.value,
                    })
                  }
                  value={state.comments}
                  label="Comments"
                />
              </div>

              <button
                type="submit"
                className="button text-black bg-white rounded-full text-sm px-4 self-start"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact

function Select({ label, value, onChange, children, ...props }) {
  return (
    <div className="flex-1 mx-2 mb-6">
      <p className="mb-1" style={{ fontSize: 18 }}>
        {label} {props.required && '*'}
      </p>
      <div className="border" style={{ borderColor: '#4f5463' }}>
        <div className="mr-3">
          <select
            className="block appearance-none w-full bg-transparent px-4 py-3"
            value={value}
            onChange={onChange}
          >
            {children}
          </select>
        </div>
      </div>
    </div>
  )
}

function Input({ label, value, type, onChange, ...props }) {
  return (
    <div className="flex-1 mx-2 mb-6">
      <p className="mb-1" style={{ fontSize: 18 }}>
        {label} {props.required && '*'}
      </p>
      <div className="border" style={{ borderColor: '#4f5463' }}>
        <input
          value={value}
          type={type}
          onChange={onChange}
          className="pl-4 outline-none"
          style={{ minHeight: 40 }}
          {...props}
        />
      </div>
    </div>
  )
}

function TextArea({ label, value, onChange, ...props }) {
  return (
    <div className="flex-1 mx-2 mb-6">
      <p className="mb-1" style={{ fontSize: 18 }}>
        {label} {props.required && '*'}
      </p>
      <div className="border" style={{ borderColor: '#4f5463' }}>
        <textarea
          value={value}
          onChange={onChange}
          className="pl-4 outline-none h-full w-full bg-transparent"
          style={{ minHeight: 100, resize: 'none' }}
          {...props}
        />
      </div>
    </div>
  )
}

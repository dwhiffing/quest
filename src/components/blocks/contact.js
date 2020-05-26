import React, { useEffect, useState } from 'react'
import { TextSection, Body } from '../TextSection'
import { GoogleSpreadsheet } from 'google-spreadsheet'

// TODO: Use a form to get validation on email for free
// TODO: support multiple sheets for each form type
const Contact = ({ block }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [sheet, setSheet] = useState({})
  const [state, setState] = useState({
    name: '',
    email: '',
    about: '',
    comments: '',
    company: '',
  })
  const { name, email, about, comments, company } = state

  useEffect(() => {
    const doThing = async () => {
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

        {hasSubmitted ? (
          <div className="flex flex-1 flex-col text-white max-w-xl mx-auto">
            <div className="flex flex-1">
              <p>Thanks for your submission</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col text-white max-w-xl mx-auto">
            <div className="flex flex-1">
              <Input
                value={state.name}
                onChange={e =>
                  setState({
                    ...state,
                    name: e.target.value,
                  })
                }
                label="Full Name"
              />
              <Input
                value={state.email}
                onChange={e =>
                  setState({
                    ...state,
                    email: e.target.value,
                  })
                }
                type="email"
                label="Email Address"
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
                    about: e.target.value,
                  })
                }
                value={state.about}
                label="Where did you hear about us?"
              />
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
              onClick={async () => {
                await sheet.addRow({ name, email, comments, about, company })
                setHasSubmitted(true)
              }}
              className="button text-black bg-white rounded-full text-sm px-4 self-start"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact

function Input({ label, value, type, onChange }) {
  return (
    <div className="flex-1 mx-2 mb-6">
      <Body className="mb-1" style={{ fontSize: 18 }}>
        {label}
      </Body>
      <div className="border" style={{ borderColor: '#4f5463' }}>
        <input
          value={value}
          type={type}
          onChange={onChange}
          className="pl-4 outline-none"
          style={{ minHeight: 40 }}
        />
      </div>
    </div>
  )
}

function TextArea({ label, value, onChange }) {
  return (
    <div className="flex-1 mx-2 mb-6">
      <Body className="mb-1" style={{ fontSize: 18 }}>
        {label}
      </Body>
      <div className="border" style={{ borderColor: '#4f5463' }}>
        <textarea
          value={value}
          onChange={onChange}
          className="pl-4 outline-none h-full w-full bg-transparent"
          style={{ minHeight: 100, resize: 'none' }}
        />
      </div>
    </div>
  )
}

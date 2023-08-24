import '../App.css'
import { useEffect, useState } from 'react'

export default function Header(props) {
  const [entry, setEntry] = useState({
    name: '',
    email: '',
    location: '',
    phone: '',
  })
  const [isInputActive, setIsInputActive] = useState(false)
  const [activeField, setActiveField] = useState('')

  useEffect(() => {
    const previousEntry = JSON.parse(JSON.stringify({
      name: '',
      email: '',
      location: '',
      phone: '',
    }))
    props.linkOptions.forEach((option) => previousEntry[option.value] = '')
    setEntry(previousEntry)
  }, [props.linkOptions])

  const handleFieldChange = (event, field) => {
    const previousEntry = JSON.parse(JSON.stringify(entry))
    previousEntry[field] = event.target.value
    if (field === 'name') props.setDocumentTitle(event.target.value)
    setEntry(previousEntry)
  }

  return (
    <header className='header'>
      <input
        value={entry.name}
        onChange={(event) => handleFieldChange(event, 'name')}
        type="text"
        name="name"
        id="name"
        placeholder='Full Name'
        style={{ color: props.color }}
      />
      <div className='info'>
        <input
          className='info-item'
          value={entry.email}
          onChange={(event) => handleFieldChange(event, 'email')}
          type="text"
          name="email"
          id="email"
          placeholder='email'
        />
        <input
          className='info-item'
          value={entry.phone}
          onChange={(event) => handleFieldChange(event, 'phone')}
          type="text"
          name="phone"
          id="phone"
          placeholder='phone'
        />
        <input
          className='info-item'
          value={entry.location}
          onChange={(event) => handleFieldChange(event, 'location')}
          type="text"
          name="location"
          id="location"
          placeholder='location'
        />
        {
          entry.hasOwnProperty('linkedin') &&
          isInputActive &&
          <input
            autoFocus={activeField == 'linkedin'}
            className='info-item'
            value={entry.linkedin}
            onChange={(event) => handleFieldChange(event, 'linkedin')}
            onBlur={() => setIsInputActive(false)}
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder='linkedin'
          />
        }
        {
          entry.hasOwnProperty('linkedin') &&
          !isInputActive &&
          <a
            style={{ textDecoration: !entry.linkedin && 'none' }}
            className='info-item'
            onClick={(event) => { event.preventDefault(); setActiveField('linkedin'); setIsInputActive(true) }}
            href={`${entry.linkedin}`}
          >
            {entry.linkedin ? entry.linkedin : 'linkedin'}
          </a>
        }
        {
          entry.hasOwnProperty('github') &&
          isInputActive &&
          <input
            autoFocus={activeField == 'github'}
            onBlur={() => setIsInputActive(false)}
            className='info-item'
            value={entry.github}
            onChange={(event) => handleFieldChange(event, 'github')}
            type="text"
            name="github"
            id="github"
            placeholder='github'
          />
        }
        {
          entry.hasOwnProperty('github') &&
          !isInputActive &&
          <a
            style={{ textDecoration: !entry.github && 'none' }}
            className='info-item'
            onClick={(event) => { event.preventDefault(); setActiveField('github'); setIsInputActive(true) }}
            href={`${entry.github}`}
          >
            {entry.github ? entry.github : 'github'}
          </a>
        }
        {
          entry.hasOwnProperty('other') &&
          isInputActive &&
          <input
            autoFocus={activeField == 'other'}
            onBlur={() => setIsInputActive(false)}
            className='info-item'
            value={entry.other}
            onChange={(event) => handleFieldChange(event, 'other')}
            type="text"
            name="other"
            id="other"
            placeholder='other'
          />
        }
        {
          entry.hasOwnProperty('other') &&
          !isInputActive &&
          <a
            style={{ textDecoration: !entry.other && 'none' }}
            className='info-item'
            onClick={(event) => { event.preventDefault(); setActiveField('other'); setIsInputActive(true) }}
            href={`${entry.other}`}
          >
            {entry.other ? entry.other : 'other'}
          </a>
        }
      </div>
    </header>
  )
}
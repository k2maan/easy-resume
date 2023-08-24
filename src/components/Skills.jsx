import '../App.css'
import { useState } from 'react'

export default function Skills() {
  const [entry, setEntry] = useState({
    skill: ''
  })

  const handleFieldChange = (event, field) => {
    const previousEntry = JSON.parse(JSON.stringify(entry))
    previousEntry[field] = event.target.value
    setEntry(previousEntry)
  }
  return (
    <div className="skills">
      <h3>SKILLS</h3>
      <input
        value={entry.skill}
        onChange={(event) => handleFieldChange(event, 'skill')}
        type="text"
        name='skill'
        id='skill'
        placeholder='Skills (comma seperated)'
      />
    </div>
  )
}
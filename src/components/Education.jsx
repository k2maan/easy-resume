import { useState } from 'react'
import '../App.css'

export default function Education() {
  const entry = {
    degree: '',
    educationDuration: '',
    college: '',
    educationPlace: ''
  }

  const [entries, setEntries] = useState([entry])

  const handleAddField = () => {
    setEntries((previousEntries) => ([...previousEntries, entry]))
  }

  const handleRemoveField = (index) => {
    const allEntries = JSON.parse(JSON.stringify([...entries]))
    allEntries.splice(index, 1)
    setEntries(allEntries)
  }

  const handleFieldChange = (event, index, field) => {
    const allEntries = JSON.parse(JSON.stringify([...entries]))
    allEntries[index][field] = event.target.value
    setEntries(allEntries)
  }
  return (
    <div className='education'>
      <div className='heading'>
        <button className='button-add' onClick={handleAddField}>+</button>
        <h3>EDUCATION</h3>
      </div>
      {
        entries.map((entry, index) =>
          <div key={index}>
            <div className='education-details heading'>
              {entries.length > 1 && <button className='button-remove' onClick={() => handleRemoveField(index)}>-</button>}
              <input
                value={entry.degree}
                onChange={(event) => handleFieldChange(event, index, 'degree')}
                type="text"
                name="degree"
                id="degree"
                placeholder='Degree'
              />
              <input
                value={entry.educationDuration}
                onChange={(event) => handleFieldChange(event, index, 'educationDuration')}
                type="text"
                name="education-duration"
                id="education-duration"
                placeholder='From - Until'
              />
            </div>
            <div className='education-details'>
              <input
                value={entry.college}
                onChange={(event) => handleFieldChange(event, index, 'college')}
                type="text"
                name="college"
                id="college"
                placeholder='School/College'
              />
              <input type="text"
                onChange={(event) => handleFieldChange(event, index, 'educationPlace')}
                value={entry.educationPlace}
                name="education-place"
                id="education-place"
                placeholder='Place'
              />
            </div>
          </div>
        )
      }
    </div>
  )
}
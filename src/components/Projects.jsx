import { useState, useRef } from 'react'
import '../App.css'

export default function Projects() {
  const entry = {
    projectTitle: '',
    projectTechnologies: '',
    projectDetails: ['']
  }

  const textAreaRef = useRef(null);

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

  const handleAddDetails = (index) => {
    const allEntries = JSON.parse(JSON.stringify([...entries]))
    allEntries[index]['projectDetails'].push('')
    setEntries(allEntries)
  }

  const handleRemoveDetails = (index, pointIndex) => {
    const allEntries = JSON.parse(JSON.stringify([...entries]))
    allEntries[index]['projectDetails'].splice(pointIndex, 1)
    setEntries(allEntries)
  }

  const handleDetailsChange = (event, index, pointIndex) => {
    if (textAreaRef.current) {
      // auto to reset it to content first 
      textAreaRef.current.style.height = "auto";
      // subtracting 8 for padding considerations
      textAreaRef.current.style.height = `${event.target.scrollHeight}px`;
    }
    const allEntries = JSON.parse(JSON.stringify([...entries]))
    const point = event.target.value
    allEntries[index]['projectDetails'][pointIndex] = point
    setEntries(allEntries)
  }

  return (
    <div className='project'>
      <div className='heading'>
        <button className='button-add' onClick={handleAddField}>+</button>
        <h3>PROJECTS</h3>
      </div>
      {
        entries.map((entry, index) =>
          <div key={index}>
            <div className="project-details heading">
            {entries.length > 1 && <button className='button-remove' onClick={() => handleRemoveField(index)}>-</button>}
              <input
                value={entry.projectTitle}
                onChange={(event) => handleFieldChange(event, index, 'projectTitle')}
                type="text"
                name="project-title"
                id="project-title"
                placeholder='Title'
              />
              <input
                value={entry.projectTechnologies}
                onChange={(event) => handleFieldChange(event, index, 'projectTechnologies')}
                type="text"
                name="project-technologies"
                id="project-technologies"
                placeholder='Technologies'
              />
            </div>
            {
              entry.projectDetails.map((detailPoint, pointIndex) =>
                <div className='details details-button' key={pointIndex}>
                  {<button className='button-add-details' onClick={() => handleAddDetails(index)}>+</button>}
                  {entry.projectDetails.length > 1 && <button className='button-remove-details' onClick={() => handleRemoveDetails(index, pointIndex)}>-</button>}
                  <i className='bullet-point'>•</i>
                  <textarea
                    ref={textAreaRef}
                    rows={1}
                    onChange={(event) => handleDetailsChange(event, index, pointIndex)}
                    value={detailPoint}
                    name="project-details"
                    id="project-details"
                    placeholder='Describe your project, its usage, features, etc.'
                  />
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}
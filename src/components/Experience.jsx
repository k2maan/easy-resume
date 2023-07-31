import { useState, useRef } from 'react'
import '../App.css'

export default function Experience() {
	const entry = {
		position: '',
		employer: '',
		employerDuration: '',
		experienceDetails: ['']
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
		allEntries[index]['experienceDetails'].push('')
		setEntries(allEntries)
	}

	const handleRemoveDetails = (index, pointIndex) => {
		const allEntries = JSON.parse(JSON.stringify([...entries]))
		allEntries[index]['experienceDetails'].splice(pointIndex, 1)
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
		allEntries[index]['experienceDetails'][pointIndex] = point
		setEntries(allEntries)
	}

	return (
		<div className='experience'>
			<div className='heading'>
				<button className='button-add' onClick={handleAddField}>+</button>
				<h3>EXPERIENCE</h3>
			</div>
			{
				entries.map((entry, index) =>
					<div key={index}>
						<div className='heading'>
							{entries.length > 1 && <button className='button-remove' onClick={() => handleRemoveField(index)}>-</button>}
							<input
								onChange={(event) => handleFieldChange(event, index, 'position')}
								value={entry.position}
								type="text"
								name="position"
								id="position"
								placeholder='Position'
							/>
						</div>
						<div className='employer-details'>
							<input
								onChange={(event) => handleFieldChange(event, index, 'employer')}
								value={entry.employer}
								type="text"
								name="employer"
								id="employer"
								placeholder='Employer, Place'
							/>
							<input
								onChange={(event) => handleFieldChange(event, index, 'employerDuration')}
								value={entry.employerDuration}
								type="text"
								name="employer-duration"
								id="employer-duration"
								placeholder='From - Until'
							/>
						</div>
						{
							entry.experienceDetails.map((detailPoint, pointIndex) =>
								<div className='details details-button' key={pointIndex}>
									{<button className='button-add-details' onClick={() => handleAddDetails(index)}>+</button>}
									{entry.experienceDetails.length > 1 && <button className='button-remove-details' onClick={() => handleRemoveDetails(index, pointIndex)}>-</button>}
									<i className='bullet-point'>•</i>
									<textarea
										ref={textAreaRef}
										rows={1}
										onChange={(event) => handleDetailsChange(event, index, pointIndex)}
										value={detailPoint}
										name="experience-details"
										id="experience-details"
										placeholder='Describe your experience details like resposibilites, contributions, values, etc.'
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
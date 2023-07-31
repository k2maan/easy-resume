import '../App.css'
import { useState, useRef } from 'react'

export default function Skills() {
	const entry = {
		achievementDetails: ''
	}

	const textAreaRef = useRef(null)

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
		if (textAreaRef.current) {
			// auto to reset it to content first 
			textAreaRef.current.style.height = "auto";
			// subtracting 8 for padding considerations
			textAreaRef.current.style.height = `${event.target.scrollHeight}px`;
		}
		const allEntries = JSON.parse(JSON.stringify([...entries]))
		allEntries[index][field] = event.target.value
		setEntries(allEntries)
	}
	return (
		<div className="achievments">
			<div className='heading'>
				<button className='button-add' onClick={handleAddField}>+</button>
				<h3>ACHIEVMENTS</h3>
			</div>
			{
				entries.map((entry, index) =>
					<div className='details heading' key={index}>
						{entries.length > 1 && <button className='button-remove' onClick={() => handleRemoveField(index)}>-</button>}
						<i className='bullet-point'>•</i>
						<textarea
							ref={textAreaRef}
							rows={1}
							value={entry.achievementDetails}
							onChange={(event) => handleFieldChange(event, index, 'achievementDetails')}
							name="achievement-details"
							id="achievement-details"
							placeholder='Describe your achievement, use firgures and metrics.'
						/>
					</div>
				)
			}
		</div>
	)
}
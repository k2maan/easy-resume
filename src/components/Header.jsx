import '../App.css'
import { useState } from 'react'

export default function Header() {
	const [entry, setEntry] = useState({
		name: '',
		email: '',
		phone: '',
		linkedin: '',
		github: '',
		website: '',
		other: '',
	})

	const handleFieldChange = (event, field) => {
		const previousEntry = JSON.parse(JSON.stringify(entry))
		previousEntry[field] = event.target.value
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
					value={entry.linkedin}
					onChange={(event) => handleFieldChange(event, 'linkedin')}
					type="text"
					name="linkedin"
					id="linkedin"
					placeholder='linkedin'
				/>
				<input
					className='info-item'
					value={entry.github}
					onChange={(event) => handleFieldChange(event, 'github')}
					type="text"
					name="github"
					id="github"
					placeholder='github'
				/>
				<input
					className='info-item'
					value={entry.website}
					onChange={(event) => handleFieldChange(event, 'website')}
					type="text"
					name="website"
					id="website"
					placeholder='website/blog'
				/>
				<input
					className='info-item'
					value={entry.other}
					onChange={(event) => handleFieldChange(event, 'other')}
					type="text"
					name="other"
					id="other"
					placeholder='other/leetcode/codeforces'
				/>
			</div>
		</header>
	)
}
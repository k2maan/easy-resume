import '../App.css'
import Document from './Document'
import { useReactToPrint } from 'react-to-print';
import { useRef, useState } from 'react';

function Layout(props) {
	const [color, setColor] = useState('')
	const [documentTitle, setDocumentTitle] = useState('Resume')
	const [pageStyleFont, setPageStyleFont] = useState('Arial')
	const componentRef = useRef(null);
	const handlePrint = useReactToPrint({
		documentTitle,
		pageStyle: `
								* {
									font-family: ${pageStyleFont}
								}
								button {
									display: none
								}`,
		content: () => componentRef.current
	})

	const handleFontChange = (e, cb) => {
		setPageStyleFont(e.target.value)
		cb(e.target.value)
	}

	return (
		<div className="container">
			<div className='customiser'>
				<button onClick={handlePrint}>Download</button>
				<button onClick={() => setColor('#000')}>Black</button>
				<button onClick={() => setColor('#353387')}>Blue</button>
				<button onClick={() => setColor('#22adb5')}>Cyan</button>
				<button onClick={() => setColor('#555')}>Grey</button>
				<select
					name="font"
					id="font"
					defaultValue="Arial"
					onChange={(e) => handleFontChange(e, props.setFont)}
				>
					<option
						style={{ fontFamily: 'Arial' }}
						value="Arial"
					>
						Arial
					</option>
					<option
						style={{ fontFamily: 'Verdana' }}
						value="Verdana"
					>
						Verdana
					</option>
					<option
						style={{ fontFamily: 'Times New Roman' }}
						value="Times New Roman"
					>
						Times New Roman
					</option>
					<option
						style={{ fontFamily: 'Courier New' }}
						value="Courier New"
					>
						Courier New
					</option>
				</select>
			</div>
			<div
				ref={componentRef}
				className='document'
			>
				<Document
					color={color}
					setDocumentTitle={setDocumentTitle}
				/>
			</div>
		</div>
	)
}

export default Layout
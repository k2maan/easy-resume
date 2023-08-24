import '../App.css'
import Document from './Document'
import { useReactToPrint } from 'react-to-print';
import { useRef, useState } from 'react';
import Select from 'react-select'

function Layout(props) {
  const [color, setColor] = useState('#000')
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

  const handleFontChange = (option) => {
    setPageStyleFont(option.value)
    props.setFont(option.value)
  }

  const [defaultOptions, setDefaultOptions] = useState([
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'github', label: 'GitHub' },
    { value: 'other', label: 'Other' }
  ])
  const [fonts, setFonts] = useState([
    { value: 'Arial', label: 'Arial' },
    { value: 'Verdana', label: 'Verdana' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Courier New', label: 'Courier New' }
  ])
  const [linkOptions, setLinkOptions] = useState(defaultOptions)
  const handleLinkOptionsChange = (options) => {
    setLinkOptions(options)
  }

  return (
    <div className="container">
      <div className="title">
        <p>
          Easy Resume | Swiftly craft clean ATS-friendly resumes.
        </p>
      </div>
      <div className='customiser'>
        <button style={{ border: color === '#000' ? '2px solid white' : '2px solid #4b4a6c' }} className='button-colour black' onClick={() => setColor('#000')}></button>
        <button style={{ border: color === '#353387' ? '2px solid white' : '2px solid #4b4a6c' }} className='button-colour blue' onClick={() => setColor('#353387')}></button>
        <button style={{ border: color === '#22adb5' ? '2px solid white' : '2px solid #4b4a6c' }} className='button-colour cyan' onClick={() => setColor('#22adb5')}></button>
        <button style={{ border: color === '#555' ? '2px solid white' : '2px solid #4b4a6c' }} className='button-colour grey' onClick={() => setColor('#555')}></button>
        <div style={{ minWidth: '150px', maxWidth: '150px' }}>
          <Select
            placeholder='Font'
            onChange={handleFontChange}
            options={fonts}
            defaultValue={{ value: 'Arial', label: 'Arial' }}
            isClearable={false}
          />
        </div>
        <div style={{ minWidth: '330px' }}>
          <Select
            placeholder='Links'
            onChange={handleLinkOptionsChange}
            options={defaultOptions}
            defaultValue={defaultOptions}
            isMulti
            isClearable={false}
          />
        </div>
        <button className='button-download' onClick={handlePrint}><i className="arrow down"></i>Save</button>
      </div>
      <div
        ref={componentRef}
        className='document'
      >
        <Document
          color={color}
          setDocumentTitle={setDocumentTitle}
          linkOptions={linkOptions}
        />
      </div>
    </div>
  )
}

export default Layout
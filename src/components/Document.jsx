import '../App.css'
import Header from './Header'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Achievements from './Achievements'

function Document(props) {
  return (
    <div
      style={{ color: props.color }}
    >
      <Header
        color={props.color}
        setDocumentTitle={props.setDocumentTitle}
        linkOptions={props.linkOptions}
      />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Achievements />
    </div>
  )
}

export default Document
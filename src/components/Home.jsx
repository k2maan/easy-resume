import '../App.css'
import Header from './Header'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Achievements from './Achievements'

function Home() {
	return (
		<div className="container">
			<div className='main'>
			<Header />
			<Experience />
			<Education />
			<Projects />
			<Skills />
			<Achievements />
		</div>
		</div>
	)
}

export default Home
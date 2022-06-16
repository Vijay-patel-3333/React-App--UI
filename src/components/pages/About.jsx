import {Link} from 'react-router-dom'
import Card from '../shared/Card'

function About() {
  return (
    <Card reverse={true}>
        <div className="about">
            <h1>About This Project</h1>
            <p>To rate the project I have Created.</p>
            <p>Version : 1.0.0</p>
            <p>
                <Link style={{color:'white'}} to="/">Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About
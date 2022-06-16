import {Link} from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'

function AboutIconLink() {
  return (
    <div className="about-link reverse">
        <Link to={{
          pathname:"/about",
          // search:"?name",
          // hash: "#sort",
        }}>
            <FaQuestion size={25}/>
        </Link>
    </div>
  )
}

export default AboutIconLink

import { Link } from 'react-router-dom'
import './index.css'

function Error() {
  return (
    <button className="basic-button">
    <Link to="/art" key="art">
      ArtStuff
    </Link>
  </button>
  )
}

export default Error

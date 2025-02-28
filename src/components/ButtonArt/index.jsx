import { Link } from 'react-router-dom'
import './index.css'

function Error() {
  return (
    <button className="large-button">
    <Link to="/art" key="art">
      Art!
    </Link>
  </button>
  )
}

export default Error

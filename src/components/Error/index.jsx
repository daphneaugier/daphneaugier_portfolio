import { Link } from 'react-router-dom'
import './index.css'

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">You are lost!</h1>
      <p className="error__message">
        There might be a problem with the link you followed, or the page has been moved. However, I am pretty sure my site is clean and you may be experiencing trying to do funny things.
        Stop doing that, please check what you are doing and try again.
      </p>
      <Link to="/">
        <p className="button">
          Back to home
        </p>
      </Link>
    </div>
  )
}

export default Error

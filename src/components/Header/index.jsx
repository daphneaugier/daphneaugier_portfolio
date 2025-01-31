import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
      <a href="/pdf/CV_DaphneAugier.pdf" className="header-button" target='_blank'>
      Download CV
      </a>
    </header>

  )
}

export default Header

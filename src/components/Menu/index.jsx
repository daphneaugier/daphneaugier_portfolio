import { Link } from 'react-router-dom'
import works from '../../data/works.json'
import './index.css'

function Menu({active}) {
    return (
       <nav>
            <ul>
                <li>
                <Link to="/" key="000">Home</Link>
                </li>
                {works.map((work) =>
                    <li className={active === work.id ? 'active' : ''} key={work.id}>
                        <Link to={`/work/${work.id}`} key={work.id}>
                        {work.id}
                        </Link>
                    </li>
                    )
                }
            </ul>
        </nav>  
    )
  }
  
  export default Menu
  
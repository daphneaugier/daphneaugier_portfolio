import { Link } from 'react-router-dom'
import './index.css'

function WorkCard({ work }) {
  return (
    <div className="work-card">
      <Link to={`/work/${work.id}`} key={work.id}>
        <img
          src={work.cover}
          alt={work.title}
          className="work-img"
        />
    </Link>
    <div className="work-text">
        <h4>{work.id}</h4>
        <h3>{work.title}</h3>
        <p>
        {work.text}
        </p>
        <Link to={`/work/${work.id}`} key={work.id}>
          <button className="button work-button">
          {work.label}
          </button>
        </Link>
    </div>
</div>
)
}

export default WorkCard

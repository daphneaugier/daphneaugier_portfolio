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
        <h3>{work.title}</h3>
        <p>
        {work.text}
        </p>
        {work.tags.map((tag)=>
        <h4>{tag}</h4>
        )}
        <br/>
        <br/>
        {work.label==="Coming Soon" ? (
            <button className="button work-button">
            {work.label}
            </button> ) : (
          <Link to={`/work/${work.id}`} key={work.id}>
          <button className="button work-button">
          {work.label}
          </button>
        </Link>
            )
        }
    </div>
</div>
)
}

export default WorkCard

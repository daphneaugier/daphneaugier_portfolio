import PropTypes from 'prop-types'
import WorkCard from '../WorkCard'
import './index.css'

//Component
function WorkGallery({ works }) {
  return (
    <section className="works">
    <div className="works-header">
        <h1>Case Studies</h1>
    </div>
    {works.map((work) =>
      <WorkCard work={work} key={work.id} />
      )}
</section>
  )
}

WorkGallery.propTypes = {
  works: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default WorkGallery


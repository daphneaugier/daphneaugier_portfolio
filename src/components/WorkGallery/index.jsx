import WorkCard from '../WorkCard'
import './index.css'

//Component
function WorkGallery({ works }) {
  return (
    <section className="works">
    <div className="works-header">
        <h2>Case Studies</h2>
    </div>
    {works.map((work) =>
      <WorkCard work={work} key={work.id} />
      )}
</section>
  )
}

export default WorkGallery


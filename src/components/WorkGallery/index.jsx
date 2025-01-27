import WorkCard from '../WorkCard'
import './index.css'

//Component
function WorkGallery({ works }) {
  return (
    <section className="works">
    <div className="works-header">
        <h2>Selected Works</h2>
          <p>
            Below are some of the many projects I've had the opportunity
            to work on, encompassing both UI/UX design and development.
            These projects highlight my experience in creating
            user-centered interfaces, prototyping, and delivering
            full-stack solutions across web and mobile platforms.
          </p>
    </div>
    {works.map((work) =>
      <WorkCard work={work} key={work.id} />
      )}
</section>
  )
}

export default WorkGallery


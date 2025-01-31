import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import Menu from '../../components/Menu'
import Carousel from '../../components/Carousel'
import WorkDetails from '../../components/WorkDetails'

//Import Data
import workList from '../../data/works.json'

import './index.css'

function Work() {
  const { workId } = useParams()
  const work = workList.find((i) => i.id === workId)

  if (!work) {
    return <Navigate to="/lost" />
  }

  return (
    <div>
    <Menu active={work.id} />
    <section className="works">
      <h1>{work.id}: {work.title}</h1>
          <Carousel slides={work.pictures} />
          <WorkDetails details={work.details}/>
    </section>      
    </div>
  )
}

export default Work

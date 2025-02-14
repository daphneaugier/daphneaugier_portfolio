import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Carousel from '../../components/Carousel'
import WorkDetails from '../../components/WorkDetails'

//Import Data
import workList from '../../data/works.json'

import './index.css'

function Work() {
  const { workId } = useParams()
  const work = workList.find((i) => i.id === workId)

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  if (!work) {
    return <Navigate to="/lost" />
  }

  return (
    <div>
    <section className="works">
    <br />{" "}
      <h1>{work.id}: {work.title}</h1>
      <br />{" "}
          <Carousel slides={work.pictures} />
          <WorkDetails details={work.details}/>
    </section>      
    </div>
  )
}

export default Work

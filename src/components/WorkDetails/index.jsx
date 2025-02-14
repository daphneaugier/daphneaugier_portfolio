import PropTypes from 'prop-types'
import './index.css'

function WorkDetails({details}) {

    return (
        <article className="work-details">
        {details.map((detail, index) => 
            <div key={detail.title} className="work-details-box" data-aos="flip-down" data-aos-offset={index * 100}>
            <h3>{detail.title}</h3>
            <p dangerouslySetInnerHTML={{__html: detail.text}}></p>
            </div>
        )}
      </article>
    )
  }

  const detailsShape = PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })

WorkDetails.propTypes = {
    details: PropTypes.arrayOf(detailsShape).isRequired,
  }
  
  export default WorkDetails
  
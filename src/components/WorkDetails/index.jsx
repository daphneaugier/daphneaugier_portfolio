import PropTypes from 'prop-types'
import './index.css'

function WorkDetails({details}) {
    return (
        <article className="work-detailst">
        {details.map((detail) => 
            <div key={detail.title}>
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
  
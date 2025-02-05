import PropTypes from 'prop-types'
import './index.css'

function ArtCard({title, description, picture}) {

return (
        <figure className="card">
            <img src={`/assets/images/art/${picture}`} alt={title} />
            <caption className='caption'>{title}</caption>
            <p className='description' dangerouslySetInnerHTML={{__html: description}}></p>
        </figure>
    )
}

ArtCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

export default ArtCard

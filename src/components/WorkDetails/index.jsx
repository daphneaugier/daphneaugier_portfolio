import './index.css'

function WorkDetails({details}) {
    return (
        <p className="work-detailst">
        {details.map((detail) => 
            <div>
            <h3>{detail.title}</h3>
            <p dangerouslySetInnerHTML={{__html: detail.text}}></p>
            </div>
        )}
      </p>
    )
  }
  
  export default WorkDetails
  
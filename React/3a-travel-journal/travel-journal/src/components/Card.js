import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div>
            <div className="card">

                <div className="card--image">
                    <img src={`images/${props.image}`} alt="attraction" />
                </div>
                
                <div className="card--info">

                    <div className="card--location">
                        {/* <img src="images/location-pin.png" className="card--locationPin" alt="google maps pin icon" /> */}
                        <h3 className="card--country">{props.country}</h3>
                        <h5><a href={props.googleURL}>View on Google Maps</a> </h5>
                    </div>
                    
                    <h2 className="card--title">{props.attraction}</h2>

                    <div className="card--description">
                    <h4>{props.dateRange}</h4>
                        <p>{props.description}</p>  
                    </div>
                
                </div>  
            </div>

            <div className="card--divider">
                <hr></hr>
            </div>
        </div>
        
    )
}
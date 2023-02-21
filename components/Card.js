import React from "react"

export default function Card(props) {
    return (
        <div>
            <div className="card">
                <img src={props.imageUrl} className="card--image" />
                <div className="card-text-block">
                    <div className="card-location-block">
                        <i className="fa-solid fa-location-dot"></i>
                        <h2 className="card--location">{props.location}</h2>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="card--title">{props.title}</h1>
                    <h3 className="card--date">{props.startDate} - {props.endDate}</h3>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
            {props.lastItem === false && <hr />}
        </div>
    )
}

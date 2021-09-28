import React from 'react';

const Cards = (props) => {
    return (
        <div className="card-group container">
            <div className="card">
                <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.cardname}</h5>
                    <p className="card-text">{props.details}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;
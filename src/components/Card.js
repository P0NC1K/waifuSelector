import React from 'react';
import './Card.css';

const Card = ({name , description, id, color}) => {

    return(
            <div className={`tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer`}>
                <div className="background-image">
                    <img alt='sisters' src = {`http://randomwaifu.altervista.org/images/000${id}.png`}/>
                </div>
                <div className="text">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
    );
}

export default Card;
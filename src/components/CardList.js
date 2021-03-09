import React from 'react';
import Card from './Card';


const CardList = ({waifus}) => {
    return (
    <div>
        {
            waifus.map((element,i) => {
                if(waifus[i].id < 10)
                    return <Card id={waifus[i].id} name={waifus[i].name} description={waifus[i].description} color={waifus[i].color}/>
            })
        }
    </div>
    )
}

export default CardList;
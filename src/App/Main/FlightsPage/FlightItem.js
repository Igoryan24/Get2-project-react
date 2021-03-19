import React from 'react'
//import flights from './flights'
import flights, { getFlightsObject } from './flights'

/*const flightsObject = flights.reduce((obj,flight) => ({
    ...obj,
    [flight.id]:flight
}),{})*/


const FlightItem = ({
    match,
    flightsObject = getFlightsObject(flights),
}) => {
    const id = match.params.id
    /*console.log(match)*/
    /*console.log(flightsObject)*/
    return(
        <>
            <div className="flights-head"> {flightsObject[id].head}</div>
            <div
                dangerouslySetInnerHTML={{
                    __html:flightsObject[id].fullDescription
                }}
            ></div>
        </>
    )
}

export default FlightItem
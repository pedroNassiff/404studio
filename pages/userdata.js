import React, {useEffect, useState} from 'react'
import {getIP} from "../components/services"

const UserData = (props) => {
    const [details, setDetails] = useState(null);

    const getUserDetails = () => {
        fetch("https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708")
        .then( response => response.json() )
        .then( data => setDetails(data) )
    }
   
  return (
    <div>
        <button onClick={getUserDetails}>Ver ip</button>
        <div>
            {details && 
                <ul>
                    <li>
                        Lugar: {`${details.city}, ${details.country_name}, ${details.country_code},`}
                    </li>
                    <li>IP: {details.IPv4}</li>
                </ul>}
        </div>
    </div>
  )
}

export default UserData;
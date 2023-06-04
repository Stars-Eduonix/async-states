
import React,{useState} from "react";


const LocationApp = () => {

   let [latitude, setLatitude] = useState(0);
   let [longitude, setLongitude] = useState(0);
   let [hemisphere, setHemisphere] = useState("");


    function getLocation() {

          if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) =>{
                        // console.log(position.coords.latitude, position.coords.longitude);
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);

                        if(position.coords.latitude > 0){
                            setHemisphere("Northen Hemisphere");
                        }
                        else if(position.coords.latitude < 0){
                            setHemisphere("Southern Hemisphere");
                        }
                        else{
                            setHemisphere("Equator");
                        }
                }
            );
          }

    }


    return(
        <div>
             <h1>Location App</h1>

            <h2>Latitude: {latitude}</h2>
            <h2>Longitude: {longitude}</h2>
            <h2>Hemisphere: {hemisphere}</h2>

             <button
                onClick={getLocation}
             > Get Location </button>
        </div>
    )
}

export default LocationApp;
/*import { useEffect , useState } from "react";
import axios from 'axios';


function VehicleList(){
    const [vehicle , setVehicle] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:3000/vehicle')
            .then(response=>{
                setVehicle(response.data);


            })
            .catch(error=>{
                console.log('There was an error fetching the vehicle data!',error);
            })
    },[])


    return (
        <div className="container mt-4">
            <h2>Vehicle List</h2>
            <div className="row">
                {vehicle.map(vehicle => (
                    <div className="col-md-4" key={vehicle.id}>
                        <div>
                            <img src={vehicle.image} className="card-img-top" height={250} alt={vehicle.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="car-text">Price : ${vehicle.price}</p>
                                <p className="car-text">Mileage : {vehicle.mileage} </p>
                                <p className="car-text">Seats : {vehicle.seats} </p>
                                <p className="car-text">Color: { vehicle.color} </p>
                                <p className="car-text">Fuel : {vehicle.fuel } </p>
                                <p className="car-text">Gear : { vehicle.gear} </p>
                                <p className="car-text">Description : {vehicle.description } </p>
                            </div>
                        </div>


                    </div>


                ))}
            </div>


        </div>
    )
}


export default VehicleList;*/

import { useEffect, useState } from "react";
import axios from "axios";

function Vehicle() {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/vehicles")
      .then((response) => {
        setVehicle(response.data);
      })
      .catch((error) => {
        console.log("There is an error in fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h2>Vehicle List</h2>
      </div>
      <div className="row justify-content-center">
        {vehicle.map((vehicle) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={vehicle.id}>
            <div className="card h-100">
              <img src={vehicle.image} className="card-img-top" height={250} alt={vehicle.name} />
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: ${vehicle.price}</li>
                <li className="list-group-item">Mileage: {vehicle.mileage}</li>
                <li className="list-group-item">Seats: {vehicle.seats}</li>
                <li className="list-group-item">Color: {vehicle.color}</li>
                <li className="list-group-item">Fuel: {vehicle.fuel}</li>
                <li className="list-group-item">Gear: {vehicle.gear}</li>
                <li className="list-group-item">Description: {vehicle.description}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicle;



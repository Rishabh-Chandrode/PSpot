import React, {  useState } from "react";
import "./inputForm.css"
const InputForm = () => {
 
    const [newVehicle,setNewVehicle] = useState({
        name: "",
        vehicleNumber: "",
        vehicleCategory: "",
        checkInTime: "",
        checkOutTime: ""
    });

    const handleChange = (e) => {
        
        setNewVehicle(
            {...newVehicle,[e.target.name]: e.target.value}
        )
    };
    
    const handleSubmit = async  () => {
      if(newVehicle.name === "" || newVehicle.vehicleNumber === "" || newVehicle.vehicleCategory === ""){
          alert("Please fill all the fields");
      } 
      else{
        try{
            
            await fetch("http://localhost:5000/vehicles", {
                // Adding method type
                method: "POST",

                headers: {'Content-Type': 'application/json'},
                // Adding body or contents to send
                body: JSON.stringify({
                    name: newVehicle.name,
                    vehicleNumber: newVehicle.vehicleNumber,
                    vehicleCategory: newVehicle.vehicleCategory,
                    checkInTime: new Date().toLocaleString(),
                    checkOutTime: null
                }),
            })
            

            window.location.reload();
        }catch(err){
            console.log(err);
        }
      }    
    }
  return (
  
            <div className="dashboard__body__form__wrapper">
              <div className="dashboard__body__form__nameInput__wrapper">
                <label htmlFor="name" >Owner Name : </label>
                <input
                  name="name"
                  id="name"
                  className="dashboard__body__form__nameInput formInput"
                  placeholder="Name"
                  value={newVehicle.name}
                  onChange={handleChange}
                />
              </div>
              <div className="dashboard__body__form__vehicleNumberInput__wrapper">
                <label htmlFor="vehicleNumber">Vehicle number : </label>
                <input
                  name="vehicleNumber"
                  id="vehicleNumber"
                  className="dashboard__body__form__vehicleNumberInput formInput"
                  placeholder="xx-yy-zzzz"
                  value={newVehicle.vehicleNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="dashboard__body__form__vehicleCategoryInput__wrapper">
                <label htmlFor="vehicleCategory">Vehicle Category : </label>
                <input
                  name="vehicleCategory"
                  id="vehicleCategory"
                  className="dashboard__body__form__vehicleCategoryInput formInput"
                  placeholder="Car, Bus, Truck"
                  value={newVehicle.vehicleCategory}
                  onChange={handleChange}
                />
              </div>
              <button className="dashboard__body__form__addButton" onClick={handleSubmit}  >Add</button>
            </div>
          
  )
}

export default InputForm
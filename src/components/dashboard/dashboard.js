import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Datacards from "../datacards/datacards";
import InputForm from "../inputForm/inputForm";

const Dashboard = () => {
  const [searchNumber, setSearchNumber] = useState("");
  const [vehicles, setVehicles] = useState([]);
 
  useEffect(  () => {

    const fetchData = async () => {
      try{
        const res =await fetch("http://localhost:5000/vehicles");
        let resData = await res.json();
        setVehicles(resData);
        
      }catch(err){
        console.log(err);
        alert("can't fetch data make sure server is running");
      }
    }
    fetchData();
  },[])
  console.log(searchNumber)
 const handleSearch = async () => {
    const res = await fetch(`http://localhost:5000/vehicles?vehicleNumber=${searchNumber}`);
    const resData = await res.json();
    setVehicles(resData);
    console.log(resData);
 }



  return (
    <div className="dashboard__wrapper">
      <div className="dashboard">
        <div className="dashboard__header">Parking management system</div>
        <div className="dashboard__body__wrapper">
          <div className="dashboard__body">
            <div className="dashboard__body__searchInput__wrapper">
              
              <input
                className="dashboard__body__searchInput"
                placeholder="Enter vehicle number"
                value={searchNumber}
                onChange={(e) => {
                  setSearchNumber(e.target.value);
                }}

              />
              <button className="dashboard__body__searchButton" onClick={handleSearch}>Search</button>
              
              <div className="total__vehicles">Total Vehicles:{vehicles.length}</div>
            </div>
            <hr />
            <InputForm  />
            <hr />
            <div className="dashboard__body__data__wrapper">
              <div className="dashboard__body__data__body">
                
                {
                vehicles.map((vehicle, index) => {
                  <div>{vehicle}</div>
                  return <Datacards vehicle={vehicle} key={index} />;
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import "./datacards.css";
const Datacards = (props) => {
   // console.log(props)
    const handleCheckout = async () => {
        const res = await fetch(`http://localhost:5000/vehicles/${props.vehicle.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: props.vehicle.id,
                name : props.vehicle.name,
                vehicleNumber : props.vehicle.vehicleNumber,
                vehicleCategory : props.vehicle.vehicleCategory,
                checkInTime : props.vehicle.checkInTime,
                checkOutTime : new Date().toLocaleString(), 
            })
        });
        const resData = await res.json();
        console.log(resData);
        window.location.reload();
    }

    const handleDelete = async() => {
        await fetch(`http://localhost:5000/vehicles/${props.vehicle.id}`, {
            method: "DELETE",
            // headers: {
            //     "Content-Type": "application/json",
            // },
            // body: JSON.stringify({
            //     id: props.vehicle.id,
            //     name : props.vehicle.name,
            //     vehicleNumber : props.vehicle.vehicleNumber,
            //     vehicleCategory : props.vehicle.vehicleCategory,
            //     checkInTime : props.vehicle.checkInTime,
            //     checkOutTime : props.vehicle.checkOutTime,
            // })
        }).then(res => {
            window.location.reload();
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            window.location.reload();
        }
        );
    }
  return (
    <div className="datacard-wrapper">
      <div className="datacard">
        <div className="datacard__name__wrapper datacard__data">
          <div className="datacard__name">{props.vehicle.name}</div>
        </div>
        <div className="datacard__vehicleNumber__wrapper datacard__data">
          <div className="datacard__vehicleNumber">
            {props.vehicle.vehicleNumber}
          </div>
        </div>

        <div className="datacard__vehicleCategory__wrapper datacard__data">
          <div className="datacard__vehicleCategory">
            {props.vehicle.vehicleCategory}
          </div>
        </div>

        <div className="datacard__checkInTime__wrapper datacard__data">
          <div className="datacard__checkInTime">
            {props.vehicle.checkInTime}
          </div>
        </div>
        <div className="datacard__checkOutTime__wrapper datacard__data">
          <div className="datacard__checkOutTime">
            {props.vehicle.checkOutTime
              ? props.vehicle.checkOutTime
              : "Not checked out"}
          </div>
        </div>
        <div className="datacard__checkOut__button__wrapper datacard__data">
          {!props.vehicle.checkOutTime ? 
          <button
            className="datacard__checkOut__button datacard__button"
            onClick={handleCheckout}
          >
            Check Out
          </button>:null
          }
        </div>
        <div className="datacard__checkOut__button__wrapper datacard__data">
          
          <button
            className="datacard__delete__button datacard__button"
            onClick={handleDelete}
          >
            Delete
          </button>
          
        </div>

      </div>
    </div>
  );
};

export default Datacards;

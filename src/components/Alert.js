import React, { useState  } from 'react'
import './Alert.css';
const Alert = (props) =>  {

      
        return (
            <div className="card-area" style={{display:`${props.isAlert ?"block" :"none"}`}}>
                <div className="card ">
                    <h3 className="my-auto "> please write something </h3>
                    <button className="closeAlertBtn  mx-auto" onClick={props.closeAlert}>OK</button>
                </div>
            </div>
        )
   
}

export default Alert


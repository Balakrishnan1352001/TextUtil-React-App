import React from 'react'

function Alert(props) {

    const capitalize  = (word) =>{
        const lower = word.toLowerCase();   
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }

  return (
    <div style={{height: '50px'}}>
       {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {/* If props.alert && will evalaute first , if it is null it will not proceed further else notnull it proceed further  */}
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
        </div>
  )
}

export default Alert

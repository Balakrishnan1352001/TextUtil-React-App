import React from 'react'

export default function About(props) {

//     const [mystyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white'
        
// })
   
// const [btntext, setBtnText] = useState("Enable Dark Mode")

// const toggleStyle = () =>{
//     if(mystyle.color === 'black'){
//         setMyStyle ({
//             color:'white',
//             backgroundColor:'black',
//             border: '1px solid white'
//      })
//         setBtnText("Enable Light Mode");
//     }
//     else {
//         setMyStyle ({
//             color:'black',
//             backgroundColor:'white'
//     })
//     setBtnText("Enable Dark Mode");
//     }
//     }

let mystyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    border: '1px solid',
    borderColor:  props.mode === 'dark'?'white':'#042743'
}

return (
    
    <div className="container">
        <h1 className='my-3'  style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyze your text</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Free to use</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatibile</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container">
             <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btntext}</button>
        </div> */}
        
    </div>
  )
}

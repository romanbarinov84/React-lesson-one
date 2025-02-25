import { useState } from "react"
import Button from "./buttons/Button.jsx"


function StateVsRef(){
    const [value, setValue ] = useState("")
    return(
        <div>
            <h3>Input value : {value}</h3>
            <input type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
             className="control" />
        </div>
    )
}

export default function FeedBackSection(){
    const [name, setName] = useState("")
    const [hasError, setHasError] = useState(false)
    const [reason, setReason] = useState('help')
    
    function handleNameChange(event){
     setName(event.target.value)
     setHasError(event.target.value.trim().length === 0)
    }

    function toggleError(){
        setHasError(!hasError)
    }

    return(
        <section>
            <h3>Feedback setings</h3>

            <button onClick={toggleError}>Toggle Error</button>

            <form>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" className="control" value={name} onChange={handleNameChange} placeholder="Enter your name" style={{border:hasError ? `3px solid red` : null}} />
                <label htmlFor="reason">Enter ypur quesstion</label>
                <select id="reason" className="control" value={reason} onChange={event => setReason(event.target.value)}>
                    <option value="advice">Your advices</option>
                    <option value="help">need help</option>
                    <option value="call">call remove</option>
                    <option value="remove">Another options</option>
                </select>
                
                <pre>
                    Name: {name}
                    <br />
                    Reason : {reason}
                </pre>

                <Button disabled={hasError}>Send</Button>

            
            </form>
            < hr/>

             <StateVsRef/>
        </section>
    )
}
import React, { useState }from 'react'
import NameForm from '../Components/NameForm'
import ColorForm from '../Components/ColorForm'
import Modal from '../Components/Modal'
import '../App.css';

function Form({addHero, heroes}){

    const [ nameValue, setNameValue ] = useState("")
    const [ secretIDValue, setSecretIDValue ] = useState("")

    const [ primaryColor, setPrimaryColor ] = useState()
    const [ secondaryColor, setSecondaryColor ] = useState()


    const handleSubmit = e => {
        e.preventDefault()
        if(!nameValue) return
        addHero(nameValue, secretIDValue)
        setNameValue("")
        setSecretIDValue("")
    }

    const handleAdd = (name, secretID, css) => {
        addHero(nameValue, secretIDValue, css)
        if(!nameValue) return
        setNameValue("")
        setSecretIDValue("")

    }

    return (
        <div className="form-container">

            <ColorForm 
                primaryColor={primaryColor}
                setPrimaryColor={setPrimaryColor}
                secondaryColor={secondaryColor}
                setSecondaryColor={setSecondaryColor}
            />

            <NameForm
                handleSubmit={handleSubmit}
                nameValue={nameValue}
                setNameValue={setNameValue}
                secretIDValue={secretIDValue}
                setSecretIDValue={setSecretIDValue}
                handleAdd={handleAdd}
            />
            
        </div>
    )
    
}
      
    
        
            
    




export default Form

/* return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="input-container-form">
                <input 
                    type="text"
                    onChange={e => setNameValue(e.target.value)}
                    value={nameValue}
                    placeholder="Enter Hero Name"
                    />
                <input 
                    type="text"
                    onChange={e => setSecretIDValue(e.target.value)}
                    value={secretIDValue}
                    placeholder="Enter Secret ID"
                    />
            </div>
            <button onClick={() => handleAdd}>Add Hero</button>
        </form>
    </div> */
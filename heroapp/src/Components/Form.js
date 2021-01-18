import React, { useState }from 'react'
import NameForm from '../Components/NameForm'
import ColorForm from '../Components/ColorForm'
import Modal from '../Components/Modal'
import '../App.css';

function Form({addHero, heroes, primaryColor, secondaryColor, setPrimaryColor, setSecondaryColor, addColor, nameColor, setNameColor}){

    const [ nameValue, setNameValue ] = useState("")
    const [ secretIDValue, setSecretIDValue ] = useState("")

    const bgStyle = {
        background: `linear-gradient(130deg, ${primaryColor} 56.59%, ${secondaryColor} 57%)`,
        color: `${nameColor}`
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        if(!nameValue) return
        addHero(nameValue, secretIDValue, primaryColor, secondaryColor, bgStyle)
        setNameValue("")
        setSecretIDValue("")
        setPrimaryColor("#000000")
        setSecondaryColor("#000000")
        setNameColor("")
    }

    const handleAdd = (name, secretID) => {
        addHero(nameValue, secretIDValue, primaryColor, secondaryColor, bgStyle)
        if(!nameValue) return
        setNameValue("")
        setSecretIDValue("")
        setPrimaryColor("#000000")
        setSecondaryColor("#000000")
        setNameColor('')
    }

    return (
        <div className="form-container">

            <ColorForm 
                primaryColor={primaryColor}
                setPrimaryColor={setPrimaryColor}
                secondaryColor={secondaryColor}
                setSecondaryColor={setSecondaryColor}
                nameColor={nameColor}
                setNameColor={setNameColor}
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
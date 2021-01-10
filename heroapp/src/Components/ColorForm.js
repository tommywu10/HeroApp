import React from 'react'
import '../App.css';

export default function ColorForm( {primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor}){
    
    return (
    <div className="color-form-container">
        <p>Choose your hero's colors:</p>

        <div className="color-form-input">
            <input 
                type="color" 
                id="primary-color" 
                name="primary" 
                value={primaryColor}
                onChange={e => setPrimaryColor(e.target.value)} 
                />
            <label htmlFor="primary">Primary color</label>
            
            <input 
                type="color" 
                id="secondary-color" 
                name="secondary" 
                value={secondaryColor}
                onChange={e => setSecondaryColor(e.target.value)}/>
            <label htmlFor="secondary">Secondary color</label>

        </div>
    </div>
    )
}
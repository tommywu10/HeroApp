import React from 'react'

export default function NameForm({ handleSubmit, setNameValue, nameValue, secretIDValue, setSecretIDValue, handleAdd }){

    return (
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
                <button disabled={!nameValue || !secretIDValue} onClick={() => handleAdd}>Add Hero</button>
            </form>
        </div>

        
    )
}

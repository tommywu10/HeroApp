import React from 'react'

function Hero({hero, revealHero, index, removeHero}){

    return (
        <div className="hero" style={hero.css}>
            { hero.isRevealed ? hero.secretID : hero.name}
            <div className="button-container-hero">
                <button id="reveal-button" onClick={() => revealHero(index)}>{hero.isRevealed ? "Unreveal" : "Reveal"}</button>
                <button id="delete-button" onClick={() => removeHero(index)}>Delete</button>
            </div>
        </div>
    )
}

export default Hero
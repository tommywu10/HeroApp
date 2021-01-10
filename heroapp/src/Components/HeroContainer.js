import React from 'react'
import Hero from '../Components/Hero';

export default function HeroContainer( {heroes, revealHero, removeHero, primaryColor, secondaryColor}){

    return (
        <div className="hero-container">
        {heroes.map((hero, index) => (
          <Hero 
            key={index}
            index={index}
            hero={hero}
            revealHero={revealHero}
            removeHero={removeHero}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            
          />
        ))}
      </div>
    )
}
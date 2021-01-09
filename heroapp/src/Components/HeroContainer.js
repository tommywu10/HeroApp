import React from 'react'
import Hero from '../Components/Hero';

export default function HeroContainer( {heroes, revealHero, removeHero}){
    return (
        <div className="hero-container">
        {heroes.map((hero, index) => (
          <Hero 
            key={index}
            index={index}
            hero={hero}
            revealHero={revealHero}
            removeHero={removeHero}
          />
        ))}
      </div>
    )
}
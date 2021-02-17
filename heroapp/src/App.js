import React, { useState, useEffect } from 'react';

import Form from './Components/NameTag/Form';
import Header from './Components/NameTag/Header';
import HeroContainer from './Components/NameTag/HeroContainer';
import HeroSearch from './Components/HeroSearch/HeroSearch';
import heroData from './data/all.json'

import axios from 'axios'; 

import './App.css';



function App(){

  const [ heroes, setHeroes ] = useState([

    {
      name: "Batman", 
      secretID: "Bruce Wayne",
      isRevealed: false,
      isHardCoded: true,
      style: {
        background: "linear-gradient(130deg, black 56.59%, yellow 57%)",
        color: "white",
      },
    },
    {
      name: "Spider-Man", 
      secretID: "Peter Parker",
      isRevealed: false,
      isHardCoded: true,
      style: {
        background: "linear-gradient(130deg, red 56.59%, blue 57%)",
        color: "white",
      },
    },
    {
      name: "Hulk", 
      secretID: "Eric Banner",
      isRevealed: false,
      isHardCoded: true,
      style: {
        background: "linear-gradient(130deg, green 56.59%, purple 57%)",
        color: "white",
      },
    },

  ])

  const [ primaryColor, setPrimaryColor ] = useState("#000000")
  const [ secondaryColor, setSecondaryColor ] = useState("#FFFF00")
  const [ nameColor, setNameColor ] = useState("")

  const addHero = (name, secretID, primaryColor, secondaryColor, bgStyle) => {
    const newHeroes = [...heroes, {name, secretID, primaryColor, secondaryColor, bgStyle}]
    setHeroes(newHeroes)
    
  }
  
  const revealHero = (index) => {
    const newHeroes = [...heroes]

    if(!newHeroes[index].isRevealed){
      newHeroes[index].isRevealed = true
      setHeroes(newHeroes)
    } else {
      newHeroes[index].isRevealed = false
      setHeroes(newHeroes)
    }

    console.log(newHeroes[index])
  }

  const removeHero = (index) => {
    const newHeroes = [...heroes]
    newHeroes.splice(index, 1)
    setHeroes(newHeroes)
  }

 //Hero Search functions -----------------------------------------------------------------------
/* 
const URL = `https://akabab.github.io/superhero-api/api`
const proxyURL = "https://cors-anywhere.herokuapp.com/"
 */

 const [data, setData] = useState('')

const getHeroes = () => {
  axios.get(heroData)
  .then((response) => {
    const heroNames = response.data.name
    setData(heroNames)
  })
  .catch(error => console.log('Error'))
}

useEffect(() => {
  getHeroes()
}, [])

  return(
    <div className="app">
      <Header />

      {heroes.length === 0 ? <p>Please enter a name.</p> : 
        <HeroContainer 
          heroes={heroes}
          revealHero={revealHero}
          removeHero={removeHero}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
      />}


      <Form
        addHero={addHero}
        heroes={heroes}
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
        secondaryColor={secondaryColor}
        setSecondaryColor={setSecondaryColor}
        nameColor={nameColor}
        setNameColor={setNameColor}
      />

      <HeroSearch 
      heroData={heroData}
      />
    </div>
  )
}

export default App;

import React, {useState, useEffect} from 'react';

export default function HeroSearch({heroData}) {

    const [searchValue, setSearchValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
    }

    const callSearchFunction = e => {
        e.preventDefault()
        setSearchValue("")
        console.log(heroData)
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <img src={``}/>
                <p>{}</p>
                <input 
                    type="text" 
                    value={searchValue} 
                    placeholder="Search for a hero or villain."
                    onChange={e => setSearchValue(e.target.value)}
                />
                <input 
                    onClick={callSearchFunction}
                    type="submit"
                    value="SEARCH"
                    />

                    {/* <ul>
                        {
                            heroData.map((hero, index) => {
                                return(
                                    <li>{hero.name}</li>
                                )
                            })
                        }
                    </ul> */}
            </form >
            
        </div>
        

        
    );
}
import React, { useState } from 'react'
import AddCategory from './GEA_children/AddCategory'
import ItemList from './GEA_children/ItemList'


//The root
const GiftExpertApp = () => {

    //Should be the same type in `setState`
    const [animes, setAnime] = useState([])


    return (
        //Like a div with a column inside  
        <>
            <h1>Looking for your gifs</h1>

            <AddCategory setAnime={setAnime} />
            <hr />
            {
                renderRootUI(animes)
            }
        </>
    )

}

function renderRootUI(animes: string[]): JSX.Element {

    if (animes.length === 0) return <h2>Please input some topic</h2>

    return <ol>
        {
            animes.map((name, index) =>
                //This should have a key to indetify
                <ItemList key={name + index} category={name} />
            )
        }
    </ol>

}


export default GiftExpertApp;
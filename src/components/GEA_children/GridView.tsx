import React from 'react'
import GifData from '../../classes/GifData'

/**
 * 
 * @param category Name of the gifs 
 * @param gifs all gifs to use in the UI build
 * 
 * @description Build the Grid component
 * 
 */
const GridView = ({ category, gifs }: { category: string, gifs: GifData[] }) => {

    
    return (
        <>
            <h2>{category}</h2>
            <br />
            {buildAnimeGrid(gifs)}
        </>
    )
}

function buildAnimeGrid(gifs: GifData[]): JSX.Element {

    return (<div className="wrapper">
        {
            gifs.map((gif) => {
                return <div className="container-gif">
                    <img src={gif.image} alt={gif.title} width="90%" height="70%" />
                    <br />
                    <div className="tooltip">{gif.title}
                        <span className="tooltiptext">{gif.id}</span>
                    </div>
                </div>
            })
        }
    </div>)

}

export default GridView

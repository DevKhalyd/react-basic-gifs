import React, { useState } from 'react'
import { Grid, } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { LoadingComponent } from '../mini_components/LoadingComponent'

const gf = new GiphyFetch('9iZru4MOs4AwaDlo5C4RAWeGWr9Nrg9J')

const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })


/**
 * Show a list with the  trending gifs
 * 
 */
const GiphyGridTest = () => {

    const [data, setData] = useState(true)


    fetchGifs(4).then((v) => {
        console.log('Data from sdk')
        console.log(v)
        setData(false);
    })

    return (
        <>
            {data ? <LoadingComponent /> : <Grid width={800} columns={3} fetchGifs={fetchGifs} />}
        </>
    )
}

export default GiphyGridTest

import React from 'react'
import useFetchGrid from '../../hooks/useGrid'
import { LoadingComponent } from '../mini_components/LoadingComponent'
import GridView from './GridView'


//This file contains the item to show in the list ol
//Each category is to search in the giphy sdk
const ItemList = ({ category }: { category: string }) => {

    //Each time called creates a new instance from this method
    const [loading, gifs] = useFetchGrid(category)

    return (
        <>
            {loading ? <LoadingComponent /> : <GridView category={category} gifs={gifs} />}
        </>
    )

}

export default ItemList


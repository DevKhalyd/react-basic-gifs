import { useState, useEffect } from "react";

import GifData from "../classes/GifData";
import { fetchForValueGifs } from "../giphy_sdk/request_sdk";

/**
 * 
 * @description Allow to handle useState and useEffect
 * 
 * @return loading and gifs [0,1]
*/
//Use whatever params you need
export default function useFetchGrid(category: string): [boolean, GifData[]] {

    const [loading, setLoading] = useState(true)

    const [gifs, setGifs] = useState<GifData[]>([])

    useEffect(() => {

        fetchForValueGifs(category).then(({ data: arrayGitfs }) => {

            let _gifs: GifData[] = []

            arrayGitfs.forEach((gif) => {
                if (gif)
                    _gifs.push(GifData.fromObject(gif))
            })

            setGifs([..._gifs])
            setLoading(false)
        }).catch(err => {
            //    setLoading(false)
            console.log(`Error ${err}`)
            setGifs([])
            setLoading(false)
        })
        //Just run one time
    }, ([category]))

    //Return whatever you want
    return [loading, gifs]
}


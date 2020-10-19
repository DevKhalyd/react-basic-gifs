import { GiphyFetch, } from '@giphy/js-fetch-api'

const gf = new GiphyFetch('9iZru4MOs4AwaDlo5C4RAWeGWr9Nrg9J')

/**
 * 
 * Get the trending gifs
 * 
 * @remarks
 * This method is part of the giphy sdk
 *
 * @params This function don't need params to work
 * 
 * @return Trending Gifs  Promise<GifsResult>
 * 
 * ```javascript
 *   const fetchTrendingGifs: Promise<GifResult> = (offset: number) => gf.trending({ offset, limit: 10 })
 *
 * ```
 * 
 * @release
 */

const fetchTrendingGifs = (offset: number = 25) => gf.trending({ limit: 10, offset: offset, rating: 'g' })

/**
 * 
 * @param searchFor Allow to search with that word
 * 
 * @return Promise<GifsResult>
 * 
 * @catch { data: gifs }
 * 
 */
const fetchForValueGifs = (searchFor: string) => gf.search(searchFor, { lang: 'en', limit: 10 })

export {
    fetchTrendingGifs,
    fetchForValueGifs
}

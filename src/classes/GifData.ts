
/**
 * 
 * @param images is an object that contains images from diffentes sizes
 * 
 * @property image is the original photo url to show in grid
 * 
 * @property url is where the gif is showned in Giphy (Storage)
 * 
 */
class GifData {


    readonly id: string
    readonly title: string
    readonly url: string
    //This read like string
    readonly image: string


    constructor(id: string, title: string, url: string, images: any) {
        this.id = id
        this.title = title
        this.url = url
        //Read from the object 
        this.image = images?.original?.url ?? ''
    }


    static fromObject(gf: any): GifData {

        const id = gf.id
        const title = gf.title
        const url = gf.url
        const images = gf.images

        return new GifData(id, title, url, images)
    }


    public toString(): string {
        return `id: ${this.id}\n` +
            `title: ${this.title}\n` +
            `url: ${this.url}\n` +
            `image: ${this.image}\n`
    }

}

export default GifData

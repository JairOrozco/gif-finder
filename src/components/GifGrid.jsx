import { getDataGifs } from "../utils/getDataGifs";

export const GifGrid = ( { category } ) => {

    getDataGifs(category);

    return (
        <>
            <h3> {category} </h3>
            <p> Hola Mundo </p>
        </>
    )
}
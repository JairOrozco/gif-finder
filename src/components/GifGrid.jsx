import { useState, useEffect } from "react";

// Función de fetch
import { getDataGifs } from "../utils/getDataGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( { category } ) => {

    const [dataImages, setDataImages] = useState([]);

    const getDataImages = async () => {
        const dataImages = await getDataGifs(category);
        setDataImages(dataImages)
        return dataImages
    }
    
    useEffect( () => {
        getDataImages();
    }, []);


    return (
        <>
            <h3> { category } </h3>
            <ol>
                {
                    dataImages.map( ({ id, title }) => {
                        return (
                            <li key={ id }> { title } </li>
                        )
                    })
                }
            </ol>
        </>
    )
}
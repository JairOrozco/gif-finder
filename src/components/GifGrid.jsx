import { useState, useEffect } from "react";

// Función de fetch
import { getDataGifs } from "../utils/getDataGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( { category } ) => {

    const [dataImages, setDataImages] = useState([]);

    const getDataImages = async () => {
        const apiDataImages = await getDataGifs(category);
        setDataImages(apiDataImages)
    }
    
    useEffect( () => {
        getDataImages();
    }, []);


    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid"> 
                {
                    dataImages.map( ( data ) => (
                            <GifItem 
                                key={ data.id }
                                {...data}
                            />
                        )
                    )
                }
            </div>
        </>
    )
}
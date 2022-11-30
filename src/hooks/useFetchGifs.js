import { useState, useEffect } from "react";
import { getDataGifs } from '../utils/getDataGifs'




export const useFetchGifs = ( category ) => {

    const [dataImages, setDataImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );

    const getDataImages = async () => {
        const apiDataImages = await getDataGifs(category);
        setDataImages( apiDataImages )
        setIsLoading( false )
    }
    
    useEffect( () => {
        getDataImages();
    }, []);


    return {
        dataImages,
        isLoading
    }
}

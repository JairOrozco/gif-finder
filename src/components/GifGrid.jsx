
// Componentes y funciones
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";




export const GifGrid = ( { category } ) => {


    const { dataImages, isLoading } = useFetchGifs( category )

    console.log( { isLoading } )



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
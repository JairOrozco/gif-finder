import { useState } from "react";

// Componentes
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Dragon Ball', 'One Punch'] )

    const onAddCategory = () => {
        setCategories( [...categories, 'Valorant'] );
    }

    

    return (
        <>
            {/* Titulo de la app */}
            <h1>GifExpertApp</h1>

            {/* Buscador de gifs */}
            <AddCategory />


            {/* Listado de gifs encontrados */}
            <button onClick={ onAddCategory }> Agregar </button>
            
            <ol>
                { categories.map(categoryItem => {
                    return <li key={ categoryItem }> {categoryItem} </li>
                }) }
            </ol>

                {/* Gif item */}
        </>
    )
} 
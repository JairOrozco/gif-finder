import { useState } from "react";

// Componentes
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [] )

    const onAddCategory = (newCategory) => {
        setCategories( [newCategory, ...categories] );
    }

    

    return (
        <>
            {/* Titulo de la app */}
            <h1>GifExpertApp</h1>

            {/* Buscador de gifs */}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
                //setCategories={ setCategories }
            />


            {/* Listado de gifs encontrados */}
            <button onClick={ onAddCategory }> Agregar </button>
            
            <ol>
                { 
                    categories.map( (category) => {
                        return <li key={ category }> {category} </li>
                    } ) 
                }
            </ol>

                {/* Gif item */}
        </>
    )
} 
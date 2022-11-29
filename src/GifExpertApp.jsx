import { useState } from "react";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball', 'One Punch'])

    console.log(categories)

    return (
        <>
            {/* Titulo de la app */}
            <h1>GifExpertApp</h1>

            {/* Buscador de gifs */}


            {/* Listado de gifs encontrados */}
            <ol>
                { categories.map(categoryItem => {
                    return <li key={ categoryItem }> {categoryItem} </li>
                }) }
            </ol>
                {/* Gif item */}
        </>
    )
} 
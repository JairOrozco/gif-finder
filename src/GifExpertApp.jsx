import { useState } from "react";

// Componentes
import { AddCategory, GifGrid } from "./components";




export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [] )

    const onAddCategory = (newCategory) => {

        const categoryLowerCase = newCategory.toLowerCase()
        let categoriesLowerCase = categories.map(item => {
            return item.toLowerCase()
        })

        if(categoriesLowerCase.includes(categoryLowerCase)) return;

        setCategories( [categoryLowerCase, ...categories] );
    }

    

    return (
        <>
            
            <h1>GifExpertApp</h1>
            
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
                //setCategories={ setCategories }
            />
            
            { 
                categories.map( (category) => 
                    (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                )
            }

        </>
    )
} 
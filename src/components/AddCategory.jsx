import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [ inputValue, setInputValue ] = useState('')
    
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1 ) return;

        setCategories( (categories) => [inputValue, ...categories])
        setInputValue('');
    }

    return (

        <form onSubmit={ onSubmitForm }>
            <input
            type='text'
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>
        
    )
}
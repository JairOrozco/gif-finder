import { useState } from "react"

export const AddCategory = () => {

    const [ inputValue, setInputValue ] = useState('')
    
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(inputValue)
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
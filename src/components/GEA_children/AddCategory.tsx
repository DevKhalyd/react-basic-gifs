import React, { useState } from 'react'

//NOTE: When use a component you should use destructuring for cath the element from props
//NOTE: When you use TypeScreipt you should receive the component like this:
//NOTE: ( {variableName} : {variableName : type} )

/**
 * 
 * @target Show an input text and add a text to the list main
 * 
 * @param setAnime is a function that allow to update the UI
 */
const AddCategory = ({ setAnime }: { setAnime: Function }) => {

    //Value refers to the text input value
    const [value, setValue] = useState('')


    //Any because I know that element is a event from the input 
    const onChange = ({ target: { value } }: any) =>
        setValue(value)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (value.trim().length > 0) {
            setAnime((anims: any) => [value, ...anims])
            setValue('')
        }

    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Type your topic"
                    onChange={onChange}
                    value={value}
                />
            </form>
        </>
    )
}

export default AddCategory


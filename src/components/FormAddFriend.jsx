import React, { useState } from 'react'
import Button from './Button'

const FormAddFriend = ({handleAddFriend}) => {
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('https://i.pravatar.cc/500?u=')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !imageUrl) return;

        const newUUID = crypto.randomUUID()

        setImageUrl(`https://i.pravatar.cc/500?u=${newUUID}`);
        setName('');
        const newFriend = {
            id: newUUID,
            name: name,
            image: `https://i.pravatar.cc/500?u=${newUUID}`,
            balance: 0,
        }

        handleAddFriend(newFriend)
        
        console.log(newFriend)
    }
    return (
        <form action="submit" onSubmit={handleSubmit} className="form-add-friend">
            <label htmlFor="name">👯 Name</label>
            <input 
            id='name' 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="imageURL">Picture URL</label>
            <input 
            type='text' 
            id='imageURL' 
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}/>

            <Button>Add</Button>
        </form>
    )
}

export default FormAddFriend
import React, { useEffect, useState } from 'react'
import Button from './Button'

const FormSplitBill = ({selectedFriend}) => {
    const {name} = selectedFriend;

    const [bill, setBill] = useState('')
    const [userExpense, setUserExpense] = useState('')
    const [friendExpense, setFriendExpense] = useState('')
    const [whoPays, setWhoPays] = useState('user')

    const paidByFriend = bill ? bill - userExpense : ''

    useEffect(()=> {
        setBill('')
        setUserExpense('')
        setFriendExpense('')
        setWhoPays('')
    }, [selectedFriend])
    
  return ( 
    <form action="submit" className="form-split-bill">
        <h2>Split a bill with <span style={{color: 'green'}}>{name}</span></h2>
        <label htmlFor="" type='text'>Bill Value</label>
        <input 
        type="text" 
        value={bill}

        onChange={(e) => setBill(Number(e.target.value))}/>
        <label htmlFor="" type='text'>Your expense</label>
        <input 
        type="text" 
        value={userExpense}
        onChange={(e) => setUserExpense(Number(e.target.value) > bill ? userExpense : Number(e.target.value) )}/>

        <label htmlFor="" type='text' >{name} expense</label>

        <input 
        type="text" 
        value={paidByFriend}
        disabled
        />

        <label htmlFor="" type='text'>Who is paying the bill ?</label>
        <select 
        value={whoPays}
        onChange={(e) => setWhoPays(e.target.value)}
        >
            <option value="user">You</option>
            <option value="friend" >{name}</option>
        </select>

        <Button>Split Bill</Button>

    </form>
  )
}

export default FormSplitBill
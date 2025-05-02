import Button from "./Button"

const FriendCard = ({ friend, onSelection, selectedFriend }) => {
    const { id, name, image } = friend

    const isSelected = selectedFriend?.id === id
    return (

        <li key={id} className={isSelected ? 'selected' : ''}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            {friend.balance < 0
                && <p className="red">🥲 You owe {friend.name} ${Math.abs(friend.balance)}</p>}
            {friend.balance > 0
                && <p className="green">🤑 {friend.name} owes you ${friend.balance}</p>}
            {friend.balance === 0
                && <p className="">🤝 You and <b>{friend.name}</b> are even</p>
            }
            <Button onClick={()=> onSelection(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
        </li>
    )
}

export default FriendCard
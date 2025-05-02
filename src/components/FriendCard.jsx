
const FriendCard = ({ friend }) => {
    const {id, name, image, balance} = friend
    return (

    <li key={id}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        {friend.balance < 0 
        && <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>}
        {friend.balance > 0 
        && <p className="green">{friend.name} owes you ${friend.balance}</p>}
        {friend.balance === 0 
        && <p className="red">You and {friend.name} are even</p>
        }
        <button className="btn-select">Select</button>
    </li>
)
  }
  
  export default FriendCard
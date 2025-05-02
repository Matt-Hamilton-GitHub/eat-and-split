import FriendCard from "./FriendCard";

  
const FriendsList = ({friends, onSelection, selectedFriend}) => {
   
    return <ul>
      {friends.map((f) => {
        return <FriendCard 
        friend={f} 
        key={f.id} 
        selectedFriend={selectedFriend} 
        onSelection={onSelection} />
      })}
    </ul>
  }

  export default FriendsList
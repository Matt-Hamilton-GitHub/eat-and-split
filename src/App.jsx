import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

function App() {
  const [friends, setFriends] = useState([])
  const [showBtn, setShowBtn] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  const handleAddFriend = (newFriend) =>{
    setFriends(prev => [...prev, newFriend])
  }

  const handleSelectFriend = (friend) =>{

    setSelectedFriend(curr => curr?.id === friend.id ? null : friend)
    setShowBtn(false)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList 
        friends={friends}  
        selectedFriend={selectedFriend}
        onSelection={handleSelectFriend}
       
        />
        {showBtn && <FormAddFriend handleAddFriend={handleAddFriend}/>}
        <Button onClick={() => setShowBtn(prev => !prev)}>{showBtn ? 'Close' : 'Add Friend'}</Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
    </div>
  );
}

export default App;
import FriendCard from "./FriendCard";

const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  
const FriendsList = () => {
    const friendsListDefault = initialFriends;
  
    return <ul>
      {friendsListDefault.map((f) => {
        return <FriendCard friend={f} />
      })}
    </ul>
  }

  export default FriendsList
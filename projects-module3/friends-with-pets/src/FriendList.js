import React from "react";
import friends from "./friends"
import Friend from "./Friend"


function FriendList () {
    const mappedFriends = friends.map (friend => <Friend name={friend.name} age = {friend.age} pets = {friend.pets}/>)
    return (
        <div>{mappedFriends}</div>
    )
}

export default FriendList

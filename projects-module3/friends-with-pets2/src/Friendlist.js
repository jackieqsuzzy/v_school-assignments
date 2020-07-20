import React from "react"
import FriendContainer from "./FriendContainer"
import friends from "./friends"

function FriendList (){
    const mappedFriends = friends.map (friend => <Friend name = {friend.name} age = {friend.age} pets = {friend.age}/>)
    return (
        <div>{mappedFriends}</div>
    )
}

export default FriendList
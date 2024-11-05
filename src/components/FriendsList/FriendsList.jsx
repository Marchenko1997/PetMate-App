// @ts-nocheck

import { useFriends } from "../../hooks/useFriends";
import FriendsItem from "./FriendsItem/FriendsItem";
import { CardsListContainer } from "./FriendsList.styled";


const FriendsList = () => {
  const { friends } = useFriends();

  return (
    <CardsListContainer>
      {friends.map((friend) => (
        <FriendsItem key={friend._id} friend={friend} />
      ))}
    </CardsListContainer>
  );
};

export default FriendsList;


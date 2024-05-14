

const FriendListItem = ({ friend }) => {
  const { id, avatar, name, isOnline } = friend;
  return (
    <li key={id} >
      <div>
        <img src={avatar} alt="avatar" width="48" />
        <p >{name}</p>
        <p >
          {isOnline ? (
            <span>Online</span>
          ) : (
            <span>Offline</span>
          )}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
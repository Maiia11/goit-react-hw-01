import css from './FriendListItem.module.css'

const FriendListItem = ({ friend }) => {
  const { id, avatar, name, isOnline } = friend;
  return (
    <li key={id} >
      <div>
        <img src={avatar} alt="avatar" width="48" />
        <p >{name}</p>
        <p >
          {isOnline ? (
            <span className={css.online}>Online</span>
          ) : (
          <span className={css.ofFline}>Offline</span>
          )}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
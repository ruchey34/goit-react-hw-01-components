import s from "../FriendList/FriendList.module.css";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <li className={s.item} key={id}>
          <span className={isOnline ? s.green : s.red}></span>
          <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;

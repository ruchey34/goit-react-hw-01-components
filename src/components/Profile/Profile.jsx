import s from '../Profile/Profile.module.css';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
    return (
         <div className={s.profile}>
        <div className={s.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={s.avatar}
            />
            <p className={s.name}>{username}</p>
            <p className={s.tag}>{tag}</p>
            <p className={s.location}>{location}</p>
        </div>
  
    <ul className={s.stats}>
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followewrs: PropTypes.string,
        views: PropTypes.string,
        likes: PropTypes.string
    })
}

export default Profile
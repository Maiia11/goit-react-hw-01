import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.container}>
            <div className={css.card}>
                <img className={css.imgCard}
                    src={image}
                    alt="User avatar" />
                <p>{name}</p>
                <p className={css.textCard}>@{tag}</p>
                <p className={css.textCard}>{location}</p>
            </div>
            <ul className={css.ulCard}>
                <li className={css.liCard}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.liCard}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.liCard}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>)
}

export default Profile
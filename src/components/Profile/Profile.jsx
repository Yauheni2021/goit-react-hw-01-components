import PropTypes  from "prop-types"

export const Profile = user => {
    const { username, tag, location, avatar, stats } = user;
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{styles.Followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{styles.views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{styles.likes}</span>
                </li>
            </ul>
        </div>
    )
};



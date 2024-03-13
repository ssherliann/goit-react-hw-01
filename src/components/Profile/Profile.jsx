import styles from "../Profile/Profile.module.css"; 

export default function Profile({ name, tag, location, image, stats }) {
    const { followers, views, likes } = stats;
    
    return (
    <div className={styles["container-profile"]}> 
        <div>
            <img
                src={image}
                alt="User avatar"
                className={styles["profile-avatar"]} 
            />
            <p className={styles["profile-name"]}>{name}</p> 
            <p className={styles["profile-tag"]}>@{tag}</p> 
            <p className={styles["profile-location"]}>{location}</p> 
        </div>

        <ul className={styles["profile-stats"]}> 
            <li>
                <span>Followers </span>
                <span>{followers}</span>
            </li>
            <li>
                <span>Views </span>
                <span>{views}</span>
            </li>
            <li>
                <span>Likes </span>
                <span>{likes}</span>
            </li>
        </ul>
    </div>
    );
}
import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
    <div className={styles.friendListItem}>
        <img src={avatar} alt="Avatar" className={styles.friendAvatar} />
        <p className={styles.friendName}>{name}</p>
        <p className={isOnline ? styles.online : styles.offline}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
    );
}

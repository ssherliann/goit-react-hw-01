import FriendListItem from '../FriendListItem/FriendListItem';
import styles from '../FriendList/FriendList.module.css'; 

export default function FriendList({ friends }) {
    return (
        <ul className={styles['container-friend']}> 
            {friends.map((friend) => (
                <li key={friend.id} className={styles['friend']}> 
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}

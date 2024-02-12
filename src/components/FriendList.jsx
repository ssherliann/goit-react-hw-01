import FriendListItem from './FriendListItem';
import "../css/FriendList.css";

export default function FriendList({ friends }) {
    return (
        <>
        <ul className='container-friend'>
            {friends.map((friend) => (
            <li key={friend.id} className='friend'>
                <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                />
            </li>
            ))}
        </ul>
        </>
    );
}

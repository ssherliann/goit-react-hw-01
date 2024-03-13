export default function FriendListItem({ avatar, name, isOnline }) {
    return (
    <div style = {{ padding: '15px'}}>
        <img src={avatar} alt="Avatar" width="48" className="friend-avatar" style={{ width: '100px'}}/>
        <p style={{fontSize: '30px', }}>{name}</p>
        {isOnline ? (
            <p style={{ color: 'green', fontSize: '20px' }}>Online</p>
        ) : (
            <p style={{ color: 'red', fontSize: '20px' }}>Offline</p>
        )}
    </div>
    );
}

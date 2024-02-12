import "../css/Profile.css";

export default function Profile({ name, tag, location, image, stats }) {
    const { followers, views, likes } = stats;
    
    return (
    <div className="container-profile">
        <div>
            <img
                src={image}
                alt="User avatar"
                className="profile-avatar"
            />
            <p className="profile-name">{name}</p>
            <p className="profile-tag">@{tag}</p>
            <p className="profile-location">{location}</p>
        </div>

        <ul className="profile-stats">
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
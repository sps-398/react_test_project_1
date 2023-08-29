import './UserItem.css';

function UserItem(props) {
    return (
        <div className="user-item">
            <span>{props.userName}{' is '}</span>
            <span>{props.age}{' years old'}</span>
        </div>
    )
}

export default UserItem;
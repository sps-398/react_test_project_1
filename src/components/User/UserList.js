import Card from "../UI/Card";
import './UserList.css';
import UserItem from './UserItem.js';

function UserList(props) {
    return (
        <Card classes={'user-list'}>
            {props.userList.map(user => {
                return <UserItem key={Math.random().toString()} userName={user.userName} age={user.age} />
            })}
        </Card>
    )
}

export default UserList;
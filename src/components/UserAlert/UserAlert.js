import Dialog from "../UI/Dialog";
import './UserAlert.css';

function UserAlert(props) {
    return (
        <div className="overlay">
            <Dialog messageTitle={props.messageTitle} message={props.message} onCancel={props.hideUserAlert} />
        </div>
    )
}

export default UserAlert;
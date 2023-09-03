import Dialog from "../UI/Dialog";
import './UserAlert.css';
import ReactDOM from "react-dom";

function UserAlert(props) {
    function Modal(props) {
        return <div className="overlay" onClick={props.onConfirm}>
            <Dialog messageTitle={props.messageTitle} message={props.message} onConfirm={props.onConfirm} />
        </div>;
    }
    return (
        <>
            {ReactDOM.createPortal(
                <Modal
                    onClick={props.hideUserAlert}
                    messageTitle={props.messageTitle}
                    message={props.message}
                    onConfirm={props.hideUserAlert}
                />, document.getElementById('modal'))}
        </>
    )
}

export default UserAlert;
import Button from "./Button";
import './Dialog.css';
import Card from "./Card";

function Dialog(props) {
    function hideDialog() {
        props.onCancel();
    }

    return (
        <Card classes={'dialog'}>
            <div className="message-title">
                <h2 className="message_title_text">{props.messageTitle}</h2>
            </div>
            <div className="dialog_inner">
                <div className="message">{props.message}</div>
                <Button type="button" classes={'dialog-btn'} value={'Ok'} onClick={hideDialog}></Button>
            </div>
        </Card>
    )
}

export default Dialog;
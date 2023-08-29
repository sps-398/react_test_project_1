import './Button.css';

function Button(props) {
    function triggerBtnClick() {
        props.onClick();
    }

    return (
        <button type={props.type} className={`btn ${props.classes}`} onClick={triggerBtnClick}>Ok</button>
    )
}

export default Button;
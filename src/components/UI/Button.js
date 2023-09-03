import './Button.css';

function Button(props) {

    return (
        <button type={props.type} className={`btn ${props.classes}`} onClick={props.onClick}>Ok</button>
    )
}

export default Button;
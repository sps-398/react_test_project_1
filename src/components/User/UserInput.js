import Card from '../UI/Card';
import './UserInput.css';
import React, { useState } from 'react';

function UserInput(props) {
    const [enteredUserName, setUserName] = useState('');
    const [enteredAge, setAge] = useState('');

    function userNameInputHandler(e) {
        setUserName(e.target.value)
    }

    function ageInputHandler(e) {
        setAge(e.target.value);
    }

    function formSubmitHandler(e) {
        e.preventDefault();

        if(enteredUserName.trim().length === 0 || enteredAge === '') {
            props.showUserAlert('Invalid Input', 'Please enter username and age correctly before submiting.');
            return;
        }

        if(enteredAge <= 0) {
            props.showUserAlert('Invalid Input', 'Please enter age greater than 0.');
            return;
        }

        const user = {
            userName: enteredUserName,
            age: enteredAge
        }

        props.addUser(user);

        setUserName('');
        setAge('');
    }

    return (
        <Card classes={`add_user_form_container ${props.classes}`}>
            <form className="add_user_form" onSubmit={formSubmitHandler} >
                <div className="form_control_input">
                    <label>Username</label>
                    <input type="text" value={enteredUserName} onChange={userNameInputHandler} ></input>
                </div>
                <div className="form_control_input">
                    <label>Age</label>
                    <input type="number" value={enteredAge} onChange={ageInputHandler} ></input>
                </div>
                <div className="form_control_action">
                    <button type="submit">Add User</button>
                </div>
            </form>
        </Card>
    )
}

export default UserInput;
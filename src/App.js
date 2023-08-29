import './App.css';
import UserInput from './components/User/UserInput';
import UserList from './components/User/UserList';
import React, { useState } from 'react';
import UserAlert from './components/UserAlert/UserAlert';

const dummy = [
  { userName: 'Sam', age: '22' },
  { userName: 'Max', age: '25' },
  { userName: 'Tim', age: '28' }
]


function App() {
  const [userList, setUserList] = useState(dummy);
  const [alertBox, setAlertBox] = useState({ status: 'hidden' });

  function addUserHandler(user) {
    setUserList(prevState => {
      return [...prevState, user];
    })
  }

  function showUserAlert(msgTitle, msg) {
    setAlertBox({
      status: 'visible',
      messageTitle: msgTitle,
      message: msg
    });
  }

  function hideUserAlert() {
    setAlertBox({ status: 'hidden' });
  }

  return (
    <div className="App">
      <UserInput classes={'userInput'} addUser={addUserHandler} showUserAlert={showUserAlert}/>
      <UserList userList={userList}/>
      {alertBox.status === 'visible' ? <UserAlert messageTitle={alertBox.messageTitle} message={alertBox.message} hideUserAlert={hideUserAlert}/> : ''}
    </div>
  );
}

export default App;
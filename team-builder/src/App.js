import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const initialFriendForm = {
  name: '',
  age: '',
  gender: '',
  job: ''
}

function App() {
  const [teamMemberForm, setTeamMemberForm] = useState(initialFriendForm)
  return (
    <div className="App">
     
    </div>
  );
}

export default App;

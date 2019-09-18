import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form'

const initialFriendForm = {
  name: '',
  age: '',
  gender: '',
  job: ''
}


function App() {
  const [teamMemberForm, setTeamMemberForm] = useState(initialFriendForm)
  return (
    <div >
     <Form />
    </div>
  );
}

export default App;

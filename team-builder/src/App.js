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
  const [teamMembers, setTeamMembers] = useState([])

const onNameChanged = e => {
  console.log(e.target.value);
  
  setTeamMemberForm({
    ...teamMemberForm,
    name: e.target.value
  })
}
const onAgeChanged = e => {
  setTeamMemberForm({
    ...teamMemberForm,
    age: e.target.value
  })
}
  const onGenderChanged = e => {
    setTeamMemberForm({
      ...teamMemberForm,
      gender: e.target.value
    })
  }
const onJobChanged = e => {
  setTeamMemberForm({
    ...teamMemberForm,
    job: e.target.value
  })
}

  return (
    <div >
     <Form 
     teamMemberForm={teamMemberForm}
     onNameChanged ={onNameChanged}
     onAgeChanged = {onAgeChanged}
     onGenderChanged = {onGenderChanged}
     onJobChanged = {onJobChanged}
     />

     {
       
     }
    </div>
  );
}

export default App;

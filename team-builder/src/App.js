import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import TeamMember from './components/TeamMember';

import Form from './components/Form';

const initialFriendForm = {
  name: '',
  age: '',
  gender: '',
  job: ''
}


function App() {
  const [teamMemberForm, setTeamMemberForm] = useState(initialFriendForm)
  const [teamMembers, setTeamMembers] = useState([{
    age: "24",
    name: "Maaruf",
    job: "Student",
    gender: "male"
  }])

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
       teamMembers.map(member => <TeamMember person={member}/>)
     }
    </div>
  );
}

export default App;

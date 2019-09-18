import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import TeamMember from './components/TeamMember';

import Form from './components/Form';

const initialFriendForm = {
  name: '',
  email: '',
  gender: '',
  role: ''
}

const initalTeam = [
  {name: "Maaruf", email: 23, gender:"male", role:"student"},
  {name: "Dani", email: 23, gender:"female", role:"student"},
  {name: "Richany", email: 23, gender:"female", role:"student"},
]


function App() {
  const [teamMemberForm, setTeamMemberForm] = useState(initialFriendForm)
  const [teamMembers, setTeamMembers] = useState(initalTeam)

const onNameChanged = e => {
  
  setTeamMemberForm({
    ...teamMemberForm,
    name: e.target.value
  })
}
const onemailChanged = e => {
  setTeamMemberForm({
    ...teamMemberForm,
    email: e.target.value
  })
}
  const onGenderChanged = e => {
    setTeamMemberForm({
      ...teamMemberForm,
      gender: e.target.value
    })
    // console.log(teamMemberForm)
  }
const onroleChanged = e => {
  setTeamMemberForm({
    ...teamMemberForm,
    role: e.target.value
  })
}

const saveMember = e => {
  e.preventDefault();

  const newMember = {
    name: teamMemberForm.name,
    email: teamMemberForm.email,
    role: teamMemberForm.role,
    gender: teamMemberForm.gender,
  }
const newMembers = teamMembers.concat(newMember)
  setTeamMembers(newMembers)
  setTeamMemberForm(initialFriendForm)
}

  return (
    <div >
     <Form 
     teamMemberForm={teamMemberForm}
     onNameChanged ={onNameChanged}
     onemailChanged = {onemailChanged}
     onGenderChanged = {onGenderChanged}
     onroleChanged = {onroleChanged}
     onSubmit = {saveMember}
     />

     {
       teamMembers.map(member => <TeamMember person={member}/>)
      
     }
    </div>
  );
}

export default App;

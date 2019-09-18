import React, {useState} from 'react';
import uuid from 'uuid';
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
  {id: uuid(), name: "Maaruf", email: 'an@Email.mail', gender:"male", role:"student"},
  {id: uuid(), name: "Dani", email: 'sweet@sweetemail.com', gender:"female", role:"student"},
  {id: uuid(), name: "Richany", email: 'say@waht.com', gender:"female", role:"student"},
]


function App() {
  const [teamMemberForm, setTeamMemberForm] = useState(initialFriendForm)
  const [teamMembers, setTeamMembers] = useState(initalTeam)
  const [memberToEdit, setMember] = useState()

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
     memberToEdit ={memberToEdit}
     />

     {
       teamMembers.map(member => <TeamMember person={member}/>)
      
     }
    </div>
  );
}

export default App;

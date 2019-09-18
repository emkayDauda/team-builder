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

const initalTeam = [
  {name: "Maaruf", age: 23, gender:"male", job:"student"},
  {name: "Dani", age: 23, gender:"female", job:"student"},
  {name: "Richany", age: 23, gender:"female", job:"student"},
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
    // console.log(teamMemberForm)
  }
const onJobChanged = e => {
  setTeamMemberForm({
    ...teamMemberForm,
    job: e.target.value
  })
}

const saveMember = e => {
  e.preventDefault();

  const newMember = {
    name: teamMemberForm.name,
    age: teamMemberForm.age,
    job: teamMemberForm.job,
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
     onAgeChanged = {onAgeChanged}
     onGenderChanged = {onGenderChanged}
     onJobChanged = {onJobChanged}
     onSubmit = {saveMember}
     />

     {
       teamMembers.map(member => <TeamMember person={member}/>)
      
     }
    </div>
  );
}

export default App;

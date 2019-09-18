import React from 'react'
import styled from 'styled-components'


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        margin: 0px 20px 5px;

    }

    label {
        margin-left: 22px;
        margin-top: 5px;
    }

    button {
        margin: 12px 20px 5px;
    }
`

export default function Form(props){
    const {onNameChanged, onGenderChanged, onroleChanged, onemailChanged, onSubmit} = props
    const {name, email, gender, role} = props.teamMemberForm
    return (
        <StyledForm>
            <label>Name</label>
            <input value={name} onChange ={onNameChanged}/>

            <label>Email</label>
            <input value={email} onChange ={onemailChanged}/>

            <label>Gender</label>
            <input value={gender} onChange={onGenderChanged}/>


            <label>Role</label>
            <input value={role} onChange={onroleChanged}/>

            <button onClick={onSubmit}>Submit</button>

        </StyledForm>
    );
}
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
    const {onNameChanged, onGenderChanged, onJobChanged, onAgeChanged, onSubmit} = props
    const {name, age, gender, job} = props.teamMemberForm
    return (
        <StyledForm>
            <label>Name</label>
            <input value={name} onChange ={onNameChanged}/>

            <label>Age</label>
            <input value={age} onChange ={onAgeChanged}/>

            <label>Gender</label>
            <input value={gender} onChange={onGenderChanged}/>


            <label>Job</label>
            <input value={job} onChange={onJobChanged}/>

            <button onClick={onSubmit}>Submit</button>

        </StyledForm>
    );
}
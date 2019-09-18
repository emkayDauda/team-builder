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

    return (
        <StyledForm>
            <label>Name</label>
            <input />

            <label>Age</label>
            <input />

            <label>Gender</label>
            <input />


            <label>Job</label>
            <input />

            <button>Submit</button>

        </StyledForm>
    );
}
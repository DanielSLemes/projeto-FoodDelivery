import styled from "styled-components"
import {  TextField } from "@material-ui/core";


export const Container = styled.div`
background-color:#2E8B57;
width:100vw;
min-height:100vh;
`

export const Form= styled.form`
display:flex;
flex-direction:column;
width:100vw;
align-items:center;

`
export const InputConfig = styled.div`
display:flex;
justify-content:center;
width:90%;
font-size:30px;
margin:2vh 0 0 0;
background-color: white;
`

export const Button= styled.button`
width:90%;
height:8vh;
border:none;
font-size:4.5vw;
background-color:#006400;
color:#ffff;
`
export const ContainerButton = styled.div`
margin-top:2vh;

`
export const ButtonAnimation = styled.span`
cursor:pointer;
`
export const SignUp = styled.p`
cursor:pointer;
height: 18px;
font-family: Roboto;
font-size: 4vw;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: #ffff;
margin-top:3vh;
`

export const Input = styled(TextField)`
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    /* -webkit-box-shadow: 0 0 0 30px white inset !important; */
}
`
export const ButtonConfig = styled.div`
width:100%;
margin-top:2vh;
display: flex;
justify-content: center;
`
export const ImageDiv = styled.div`
text-align:center;
`
export const Image = styled.img`
width:55%;
height:55%;
`
export const DivAnimation = styled.div`
margin:5vh 0 0 0;
`




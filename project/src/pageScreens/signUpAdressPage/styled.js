import styled from "styled-components"

import { TextField } from "@material-ui/core";


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
margin-top:2vh;
`
export const InputConfig = styled.div`
display:flex;
justify-content:center;
width:90%;
font-size:30px;
margin:2vh 0 0 0;
background-color:#ffff;
border-radius: 4px 4px 0 0;
`
export const Button = styled.button`
width:100%;
height:7vh;
border:none;
font-size:4.5vw;
background-color:#006400;
color:#ffff;
cursor:pointer;
margin:2vh 0 5vh 0;
border-radius: 4px 4px 0 0;
`
export const InputCep = styled.input` 
width:100%;
height:7vh;
background-color:#ffff;

`
export const ContainerButton = styled.div`
margin-top:2vh;
`
export const ButtonSignUp = styled.div`
width:90vw;
margin:0 auto;

`
export const Input = styled(TextField)`
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
/* -webkit-box-shadow: 0 0 0 30px white inset !important; */
}
`
export const Image = styled.div`
text-align:center;
margin-top:4vh;
`
export const BackConfig = styled.p`
display:flex;
justify-content:flex-start;
align-items:center;
padding-left:5vw;
height: 64px;
border-bottom:1px solid #ffff; 
width: 100vw;
`
export const ImageConfig = styled.img`
width:7vw;
height:6vh;
`

export const Title = styled.h3`
  color:#ffff;
  margin:3vh 0 3vh 0;
  font-size:6vw;
  font-family: Roboto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
`

export const ButtonCep = styled.span`
display:flex;
justify-content:center;
align-items:center;
font-size:3.7vw;
width:25vw;
color:#ffff;
background-color:#006400;

`
import styled from 'styled-components'
import {TextField, Typography} from '@material-ui/core'

export const ProfileEditContainer = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: Roboto;
`

export const Header = styled.div`
    width: 100%;
    height: 64px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
`
export const Title = styled.div`
    width: 175px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HeaderTitle = styled.h1`
    font-size: 16px;
    font-weight: normal;
    letter-spacing: -0.39px;
`
export const Container = styled.div`
    background-color:#ffff;
    width:100vw;
    margin-top: 10px;
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:100vw;
    align-items:center;
    background-color:#ffff;

`
export const InputConfig = styled.div`
    width:90%;
    font-size:30px;
    color: black;
`
export const Input = styled(TextField)`
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
`
export const ButtonConfig = styled.div`
    width:90%;
    margin-top:2vh;
`

import styled from 'styled-components'
import {IconButton, Typography} from '@material-ui/core'

export const ProfilePageContainer = styled.div`
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
    justify-content: center;
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

export const ContainerInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between;
    padding: 10px;
`
export const Retangle = styled.div`
    width: 100%;
    height: 76px;
    background-color: #eeeeee;
    display: flex;
    justify-content:space-between;
    padding: 10px;
`
export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const DivIcon = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 16px;
`
export const DivHistory = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 16px;
`
export const CardOrder = styled.div`
    width: 320px;
    height: 102px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    padding: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const Footer = styled.div`
    width: 100%;
    height: 49px;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
    position: fixed;
    bottom: 0;
`

export const DivFooter = styled.div`
    display: flex;
    justify-content: space-around;
`
import React from "react"
import Logo from "../../assets/Img/logo.png"
import { LogoImage, Container } from "./styled"
import { goToLoginPage } from "../../routes/Cordinator"
import { useHistory } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const SplashPage = () => {
    
    const history = useHistory();

    setTimeout(function(){
        goToLoginPage(history); 
   }, 3000);


    return (
        <Container>
            <LogoImage src={Logo} />          
        </Container>
    )
}

export default SplashPage
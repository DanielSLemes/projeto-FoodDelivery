import { useHistory } from "react-router-dom";
import axios from 'axios'
import React, { useEffect } from 'react';
import { useForm } from "../../hooks/useForm";
import { goToSignUpPage } from "../../routes/Cordinator";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, InputConfig, Form, SignUp, Input, ButtonConfig,ImageDiv, Image, Button, DivAnimation} from "./styled"
import LOGO from "../../assets/Img/logo.png"
import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
import { AnimationLoginPage } from "../../Animation/AnimationLoginPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#006400",
    },
    secondary: {
      main: "#2E8B57",
    },
  },
});

const LoginPage = () => {
  const { form, onChange } = useForm({ senha: "", email: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      history.push("/restaurantes");
    }
  }, [history]);

  const handleLoginPage = () => {
    const body = {
      email: form.email,
      password: form.senha,
    };
    axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        console.log(response.data)
        history.push("/restaurantes");
      })
      .catch((err) => {
        alert("Não foi possivel completar a sua solicitação, tente novamente mais tarde.")
      });
  };
  return (
    <Container>
      <ImageDiv>
        <Image src={LOGO} />
      </ImageDiv>
   
      <ThemeProvider theme={theme}>
        <Form onSubmit={handleLoginPage}>
          <InputConfig>
            <Input
              fullWidth="bool"
              color="secondary"
              variant={"filled"}
              label="E-mail"
              value={form.email}
              type="email"
              name="email"
              placeholder="E-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onChange={handleInputChange}>
            </Input>
          </InputConfig>
          <InputConfig>
            <Input
              fullWidth="bool"
              color="secondary"
              variant={"filled"}
              label="Senha"
              value={form.senha}
              type={"password"}
              name="senha"
              placeholder="senha"
              required
              onChange={handleInputChange}>   
            </Input>

          </InputConfig>
          <ButtonConfig>
            <Button onClick={handleLoginPage}>Entrar</Button>
          </ButtonConfig>
          <SignUp onClick={() => goToSignUpPage(history)}>Não possui cadastro? Click aqui</SignUp>
        </Form>
      </ThemeProvider>
      <DivAnimation>
        <AnimationLoginPage />
      </DivAnimation>
      
    </Container>
  );
}
export default LoginPage;
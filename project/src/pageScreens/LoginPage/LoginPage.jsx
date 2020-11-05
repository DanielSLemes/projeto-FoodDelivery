import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import axios from 'axios'
import LOGO from "../../assets/Img/logo.png"
import { goToSignUpPage } from "../../routes/Cordinator";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, InputConfig, Form, SignUp, Input, ButtonConfig, ImageDiv, Image, Button, DivAnimation } from "./styled"
import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
import { AnimationLoginPage } from "../../Animation/AnimationLoginPage";
import { theme } from "../../components/Theme/Theme"

const LoginPage = () => {
  const { form, onChange } = useForm({ senha: "", email: "" })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  }

  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) {
      history.push("/restaurantes")
    }
  }, [history])

  const handleLoginPage = () => {

    const body = {
      email: form.email,
      password: form.senha,
    }

    axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/restaurantes");
      })
      .catch((err) => {
        alert("Não foi possivel completar a sua solicitação, se cadastre para entrar no aplicativo.")
        history.push("/cadastro");
      })
  }
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
        </Form>
 config2

        <ButtonConfig>
        <Button onClick={handleLoginPage}>Entrar</Button>
          </ButtonConfig>
          <SignUp onClick={() => goToSignUpPage(history)}>Não possui cadastro? Click aqui</SignUp>
       
main
      </ThemeProvider>
      <ButtonConfig>
        <Button onClick={handleLoginPage}>Entrar</Button>
      </ButtonConfig>
      <SignUp onClick={() => goToSignUpPage(history)}>Não possui cadastro? Click aqui</SignUp>
      <DivAnimation>
        <AnimationLoginPage />
      </DivAnimation>
    </Container>
  )
}
export default LoginPage;
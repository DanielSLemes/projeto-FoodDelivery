import React, { useEffect } from "react"
import axios from 'axios'
import {
IconButton, 
Typography, 
Divider,
Button,
} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
ProfileEditContainer,
Container,
Header,
Title,
HeaderTitle,
Form,
InputConfig,
Input,
ButtonConfig,
} from './Styled'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import {goToProfilePage} from '../../routes/Cordinator'
import { useForm } from "../../hooks/useForm";
import {BASE_URL} from '../../constants/urls'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E86E5A",
      contrastText: 'black'
    },
    secondary: {
      main: "#008000",
    },
  },
});

const ProfileEditPage = () => {
  useProtectedPage()
  const history = useHistory()
  const {form, onChange} = useForm({
    name: "", 
    email: "", 
    cpf: ""
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
    }
  }, [history]);

  const handleEditProfile = (event) => {
    event.preventDefault()
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf
    }
    axios
    .put(`${BASE_URL}/profile`, body, {headers: {
      auth: localStorage.getItem("token")
    }})
    .then((response) => {
      alert("Dados atualizados com sucesso!")
    })
    .catch((err) => {
      alert("Não foi possível atualizar os dados.")
      console.log(err)
    })
  }

    return (
      <ThemeProvider theme={theme}>
        <ProfileEditContainer>
            <Header>
                <IconButton onClick={() => goToProfilePage(history)}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <Title>
                  <HeaderTitle>Editar</HeaderTitle>
                </Title>
                <div></div>
            </Header>
            <Container>
                  <Form>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="Nome"
                          value={form.name}
                          type="name"
                          name="name"
                          placeholder="Nome"
                          required
                          onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="E-mail"
                          value={form.email}
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          required
                          onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="CPF"
                          value={form.cpf}
                          type="text"
                          name="cpf"
                          placeholder="CPF"
                          required
                          onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <ButtonConfig>
                        <Button onClick={handleEditProfile} fullWidth="bool" size="large" variant="contained" color="primary">Salvar</Button>
                      </ButtonConfig>
                  </Form>
            </Container>

            
        </ProfileEditContainer>
      </ThemeProvider>  
    )
}

export default ProfileEditPage

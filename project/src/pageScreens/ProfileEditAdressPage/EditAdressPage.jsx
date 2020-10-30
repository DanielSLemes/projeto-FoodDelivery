
import React, { useEffect } from "react"
import axios from 'axios'
import {
IconButton, 
Typography, 
Divider,
Button,
} from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
AddressEditContainer,
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

const EditAdressPage = () => {
    useProtectedPage()
    const history = useHistory()
    const {form, onChange} = useForm({
      street: "", 
      number: "", 
      neighbourhood: "",
      city: "",
      state: "",
      complement: "",
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

    const handleEditAdress = () => {
      const body = {
        street: form.street,
        number: form.number, 
        neighbourhood: form.neighbourhood,
        city: form.city,
        state: form.state,
        complement: form.complement,
      }
      axios
      .put(`${BASE_URL}/address`, body, {headers: {
        auth: localStorage.getItem("token")
      }})
      .then((response) => {
        alert("Dados atualizados com sucesso!")
        window.localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        alert("Não foi possível atualizar os dados.")
        console.log(err)
      })
    }

    return (
      <ThemeProvider theme={theme}>
        <AddressEditContainer>
            <Header>
                <IconButton onClick={() => goToProfilePage(history)}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <Title>
                  <HeaderTitle>
                    Endereço
                  </HeaderTitle>
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
                          label="Logradouro"
                          value={form.street}
                          type="text"
                          name="street"
                          placeholder="Logradouro"
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
                          label="Número"
                          value={form.number}
                          type="number"
                          name="number"
                          placeholder="Número"
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
                          label="Complemento"
                          value={form.complement}
                          type="text"
                          name="complementq"
                          placeholder="Apto / Bloco"
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
                          label="Bairro"
                          value={form.neighbourhood}
                          type="text"
                          name="neighbourhood"
                          placeholder="Bairro"
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
                          label="Cidade"
                          value={form.city}
                          type="text"
                          name="city"
                          placeholder="Cidade"
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
                          label="Estado"
                          value={form.state}
                          type="text"
                          name="state"
                          placeholder="Estado"
                          required
                          onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <ButtonConfig>
                        <Button onClick={handleEditAdress} fullWidth="bool" size="large" variant="contained" color="primary">Salvar</Button>
                      </ButtonConfig>
                  </Form>
            </Container>

            
        </AddressEditContainer>
      </ThemeProvider>
    )
}

export default EditAdressPage

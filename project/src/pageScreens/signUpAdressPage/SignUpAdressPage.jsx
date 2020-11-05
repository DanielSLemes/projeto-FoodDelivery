import React, { useState, useEffect } from "react"
import { BASE_URL } from "../../const/BaseUrl/BASE_URL";

import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { ThemeProvider } from "@material-ui/core/styles";
import { BackConfig, Form, Title, Container, Input, ButtonSignUp, InputConfig, ImageConfig, Image, Button, ButtonCep } from "./styled";
import { goBack } from "../../routes/Cordinator"
import { AnimationBack } from "../../Animation/AnimationBack";
import { theme } from "../../components/Theme/Theme";

const SignUpAdressPage = () => {
    const [cep, setCep] = useState([])

    const { form, onChange } = useForm({
        street: cep,
        number: "",
        neighbourhood: cep,
        city: cep,
        state: cep,
        complement: ""
    });

    const history = useHistory();

    useEffect(() => {

        const token = window.localStorage.getItem("token")
        if (!token) {
            history.push("/cadastro");
        }
    }, [history]);

    const backRemoveToken = () => {
        if (window.confirm("Se você voltar, não poderá usar os dados de CPF e E-mail cadastrados na primeira tentativa. Deseja realmente voltar?")) {
            localStorage.removeItem('token')
            goBack(history)
        }
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    };
    const onChangeCep = (event) => {
        setCep(event.target.value);
    }

    const pegarCep = () => {
        axios
            .get(`https://viacep.com.br/ws/${cep}/json/unicode/`)
            .then((resposta) => {
                setCep(resposta.data)
            })
            .catch((erro) => {
                alert("CEP não encontrado")
            });
    };

    const handleAdress = () => {
        const body = {
            street: cep.logradouro,
            number: form.number,
            neighbourhood: cep.bairro,
            city: cep.localidade,
            state: cep.uf,
            complement: form.complement
        }
        axios
            .put(`${BASE_URL}/address`, body, {
                headers: {
                    auth: window.localStorage.getItem("token")
                }
            })
            .then((response) => {
                window.localStorage.setItem("token", response.data.token);

            })
            .catch((err) => {
                alert("Não foi possivel completar a sua solicitação, tente novamente mais tarde.")
            });
    }

    return (
        <Container>
            <BackConfig onClick={backRemoveToken}> <AnimationBack /> </BackConfig>
            <Title>Meu endereço</Title>
            <ThemeProvider theme={theme}>
                <Form >
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="Cep"
                            value={cep.cep}
                            type="text"
                            name="cep"
                            placeholder="CEP"
                            required
                            onChange={onChangeCep}
                            onBlur={pegarCep}
                        >
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="Logradouro"
                            value={cep.logradouro}
                            type="text"
                            name="street"
                            placeholder="Rua / Av."
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="Número"
                            value={form.number}
                            type="text"
                            name="number"
                            placeholder="Número"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="Complemento"
                            value={form.complement}
                            type="text"
                            name="complement"
                            placeholder="Apto / Bloco"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="Bairro"
                            value={cep.bairro}
                            type="text"
                            name="neighbourhood"
                            placeholder="Bairro"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="Cidade"
                            value={cep.localidade}
                            type="text"
                            name="city"
                            placeholder="Cidade"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="Estado"
                            value={cep.uf}
                            type="text"
                            name="state"
                            placeholder="Estado"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                </Form >
                <Button onClick={handleAdress}>Salvar</Button>
            </ThemeProvider>
            <ButtonSignUp>
                <Button onClick={handleAdress}>Salvar</Button>
            </ButtonSignUp>
        </Container>
    )
}
export default SignUpAdressPage

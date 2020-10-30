import axios from "axios";
import React, { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
import { useForm } from "../../hooks/useForm";
import { Select, DivContainerCard, CardAdd, TitleCard, AddCardConfig } from "./styled";


const Card = (props) => {
    const [quantity, setQuantity] = useState(1)
    

    const onChangeCard = (event) => {
        setQuantity(event.target.value)
    }
    const { id } = useForm()
    const addCart = () => {
        // const newProduct = { id: props.setProductId }
        
        // const newCart = [...cartProducts,newProduct]

        props.setIsOpen(false)

        const body = {
            products: [{
                id:props.productId,
                quantity: quantity
            }, {
                quantity: quantity,
                id: props.productId
            }],
            paymentMethod: "creditcard"
        }
        console.log("ta vindo algo aki?", body)
        axios
            .post(`${BASE_URL}/restaurants/${props.productId}/order`, body, {
                headers: {
                    auth: window.localStorage.getItem("token")
                }
            })
            .then((response) => {

                console.log("caiu aki nesse handleproducts???", response.data.restaurant.products.id)
            })

            .catch((err) => {
                console.log("hummmm caiu aki", err.message);
            });


    }

    return (
        <DivContainerCard>
            <TitleCard>Selecione a quantidade desejada</TitleCard>
            <Select
                onChange={onChangeCard}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </Select>
            <AddCardConfig>
                <CardAdd onClick={addCart}>ADICIONAR AO CARRINHO</CardAdd>
            </AddCardConfig>
        </DivContainerCard>
    )
}

export default Card
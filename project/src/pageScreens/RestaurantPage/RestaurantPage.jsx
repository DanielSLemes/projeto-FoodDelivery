import React, { useEffect, useState } from "react"
import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
import {
    Container, DivImage, DivFlex,
    Category, Card, Name, Image, Description,
    Price, ButtonCard, DivPriceButtonConfig,
    DivContainer, DivTimePrice, ImageLogo,
    RestaurantName, RestaurantCategory, RestaurantDelivery,
    RestaurantShipping, RestaurantAddress, BackConfig, Title, ImageConfig,
    HeaderConfig, Teste
} from "./styled"
import axios from "axios";
import Back from "../../assets/Img/back.png"
import Modal from "@material-ui/core/Modal";
import CardModal from "./Card"
import { useHistory, useParams } from "react-router-dom";
import { goToCard, goToFeedPage, goToRestaurantePage } from "../../routes/Cordinator"


const RestaurantePage = () => {
    const [product, setProduct] = useState([])
    const [restaurant, setRestaurant] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [productId, setProductId] = useState([])
    useEffect(() => {

        handleProducts()
    }, []);
    const history = useHistory();

    const pathParams = useParams()
console.log("o que tem aki?",productId)
    const handleProducts = () => {

        axios
            .get(`${BASE_URL}/restaurants/${pathParams.id}`, {
                headers: {
                    auth: window.localStorage.getItem("token")
                }
            })
            .then((response) => {

                console.log("caiu aki nesse handleproducts???", response.data)
                setProduct(response.data.restaurant.products)
                setRestaurant(response.data.restaurant)
            })
            .catch((err) => {
                console.log("hummmm caiu aki", err.message);
            });
    }

   const handleAddCart = (id) => {
       setProductId(id)
       setIsOpen(true)
   }


    return (
        <Container>
            <HeaderConfig>
                <BackConfig onClick={() => goToFeedPage(history)}> <ImageConfig src={Back} width="15px" height="20px" /> </BackConfig>
                <Teste>
                    <Title>Restaurante</Title>
                </Teste>
            </HeaderConfig>

            <DivContainer>
                <ImageLogo src={restaurant.logoUrl} width="328px" height="120px" object-fit="contain" />
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantCategory>{restaurant.category}</RestaurantCategory>
                <DivTimePrice>
                    <RestaurantDelivery> {restaurant.deliveryTime}<span > min </span></RestaurantDelivery>
                    <RestaurantShipping>Frete R${restaurant.shipping}</RestaurantShipping>
                </DivTimePrice>
                <RestaurantAddress>{restaurant.address}</RestaurantAddress>
            </DivContainer>



            {product.map((item) => {
                return (
                    <div key={item.id}>
                        <Category>{item.category}</Category>
                        <Card>
                            <DivImage>
                                <Image src={item.photoUrl} width="97px" height="112.6px" object-fit="contain" />
                            </DivImage>
                            <DivFlex>
                                <Name>{item.name}</Name>
                                <Description>{item.description}</Description>
                                <Price>R${item.price.toFixed(2)}</Price>
                                <DivPriceButtonConfig>
                                    <ButtonCard onClick= {()=>handleAddCart(item.id)}>Adicionar</ButtonCard>
                                </DivPriceButtonConfig>

                            </DivFlex>
                        </Card>
                    </div>

                )
            })
            }

            < Modal open = {isOpen}>
                <CardModal productId = {productId}
                setIsOpen = {setIsOpen}/>
            </Modal>

        </Container>
    )
}

export default RestaurantePage

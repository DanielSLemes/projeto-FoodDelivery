import styled from 'styled-components'
import { Card, CardContent, CardMedia } from '@material-ui/core'

export const RestaurantCardWrapper = styled(Card)`
width: 328px;
height: 188px;
border-radius: 8px;
border: solid 1px #b8b8b8;
margin: 8px auto;
`

export const RestaurantImage = styled(CardMedia)`
height: 120px;
`

export const RestaurantInfo = styled(CardContent)`
padding: 12px 16px 0 !important;
`

export const RestaurantTitle = styled.h2`
margin-top: 0;
margin-bottom: 2px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
letter-spacing: -0.39px;
color: #e86e5a;
`

export const RestaurantDetails = styled.div`
display: flex;
justify-content: space-between;
gap: 8px;
`

export const DeliveryTimeText = styled.p`
margin: 0;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
letter-spacing: -0.39px;
color: #b8b8b8;
flex-grow: 1;
`

export const ShippingText = styled.p`
margin: 0;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
letter-spacing: -0.39px;
color: #b8b8b8;
text-align: end;
flex-grow: 1;
`
import React, { useState } from "react"
import { FeedPageContainer, FilterBox, FilterItem, FilterText, Footer, Header, HeaderTitle, HeaderTitleBox, RestaurantsListContainer, SearchBox, SearchPlaceholder, SectionButton } from "./styled"
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as HomePageSelected } from '../../assets/icons/homepage-selected.svg'
import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/shopping-cart.svg'
import { ReactComponent as AvatarIcon } from '../../assets/icons/avatar.svg'
import useRequestData from "../../hooks/useRequestData"
import { useHistory } from "react-router-dom"
import { goToCartPage, goToProfilePage, goToRestaurantSearchPage } from "../../routes/Cordinator"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import Loading from "../../components/Loading/Loading"

const FeedPage = () => {
	const history = useHistory()
	const [restaurantsList, updateRestaurantsList] = useRequestData({}, '/restaurants')
	const [filter, setFilter] = useState("")

	const restaurants = restaurantsList.restaurants
	console.log("o que tem aki?",restaurants)
	const categories = restaurants && Array.from(new Set(restaurants.map(item => item.category)))
	console.log("o que tem nesse?",categories)
	const renderFilter = () => (
		categories.map(item => {
			return (
				<FilterItem
					key={item}
					onClick={()=>setFilter(item === filter ? "" : item )}
					style={{color: item === filter && "#000000"}}
				>
					<FilterText>
						{item}
					</FilterText>
				</FilterItem>
			)
		})
	)
	console.log("o que tem nesse outro?",FilterItem)
	const renderRestaurants = () => (
		restaurants.filter(item => filter === "" ? 1 : item.category === filter)
		.map(item => {
			return (
				<RestaurantCard
					key={item.id}
					restaurantId={item.id}
					logoUrl={item.logoUrl}
					name={item.name}
					deliveryTime={item.deliveryTime}
					shipping={item.shipping}
					history={history}
				/>
			)
		})
	)

	return (
		<FeedPageContainer>
					<SearchBox onClick={()=>goToRestaurantSearchPage(history)}>
				<SearchIcon />
				<SearchPlaceholder>Restaurante</SearchPlaceholder>
			</SearchBox>
			<FilterBox>
				{categories && renderFilter()}
			</FilterBox>
			<RestaurantsListContainer>
				{restaurants ? renderRestaurants() : <Loading/>}
			</RestaurantsListContainer>
			<Footer>
				<SectionButton><HomePageSelected /></SectionButton>
				<SectionButton onClick={()=>goToCartPage(history)}><ShoppingCartIcon /></SectionButton>
				<SectionButton onClick={()=>goToProfilePage(history)}><AvatarIcon /></SectionButton>
			</Footer>
		</FeedPageContainer>
	)
}

export default FeedPage


// import { useHistory } from "react-router-dom";
// import axios from 'axios'
// import React, { useEffect, useState } from 'react';
// import { useForm } from "../../hooks/useForm";
// import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
// // import { Input } from "@material-ui/core";
// import { Input } from "./styled"
// import _ from "lodash"

// // const _ = require("lodash");



// const Teste = () => {
// 	const [restaurantList, setRestaurantList] = useState([]);
// 	const [search, setSearch] = useState();

// 	const onChangeInput = (event) => {
// 		setSearch(event.target.value)
// 	}

// 	const TestFilter = () => {


// 		axios
// 			.get(`${BASE_URL}/restaurants`, {
// 				headers: {
// 					auth: window.localStorage.getItem("token")
// 				}
// 			})
// 			.then((response) => {
// 				console.log(response.data.restaurants)
// 				setRestaurantList(response.data.restaurants)


// 			})
// 			.catch((err) => {
// 				alert("Não foi possivel completar a sua solicitação, tente novamente mais tarde.")
// 			});
// 	}




// 	const renderRestaurantSearch = () => {
// 		if (search === "") {
// 			return (
// 				<p>Busque por nome de restaurante</p>
// 			)
// 		} else {
// 			const filteredRestaurants = restaurants.filter(item => {
// 				return item.name.toLowerCase().includes(search.toLowerCase())
// 			})
// 	return (
// 		<div>

// 			<Input
// 				fullWidth="bool"
// 				variant={"filled"}
// 				type="name"
// 				label="faça sua pesquisa"
// 				onChange={onChangeInput}
// 				value={search.name}
// 				name="name"
// 				placeholder={"faça sua pesquisa"} />
// 			<button onClick={TestFilter}>aperte</button>



// 			{restaurantList.map((item) => {
//           return (
// 		  <div>

//            <p key={item.id}>{item.name}</p>
//         <img src={item.logoUrl} width={"200px"}/>
//         <p key={item.id}>{item.deliveryTime}</p>
//         <p key={item.id}>{item.shipping}</p>
        		
//       </div>
     
//         )
//     })} 
// 	{/* {search.filter((ite)=> ite.name)} */}





// 		</div>
// 	)
// }

// export default Teste;
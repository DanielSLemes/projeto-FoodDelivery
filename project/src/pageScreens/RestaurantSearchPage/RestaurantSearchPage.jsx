import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goBack } from '../../routes/Cordinator'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import useRequestData from '../../hooks/useRequestData'
import { BackButton, BackButtonDiv, Header, HeaderTitle, HeaderTitleBox, RestaurantsListContainer, ASearch, RestaurantSearchPageContainer, SearchBox, SearchInput, SearchPlaceholder, Input } from "./styled"
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { theme } from '../../components/Theme/Theme'
import { ThemeProvider } from "@material-ui/core/styles";
import { AnimationSearch } from '../../Animation/AnimationSearch'
import { AnimationBack } from '../../Animation/AnimationBack'

const RestaurantSearchPage = () => {
	const history = useHistory()
	const [search, setSearch] = useState("")
	const [restaurantsList, updateRestaurantsList] = useRequestData({}, '/restaurants')
	const restaurants = restaurantsList.restaurants

	const renderRestaurantSearch = () => {
		if (search === "") {
			return (

				<SearchPlaceholder>Busque por nome de restaurante <ASearch><AnimationSearch /></ASearch> </SearchPlaceholder>


			)
		} else {
			const filteredRestaurants = restaurants.filter(item => {
				return item.name.toLowerCase().includes(search.toLowerCase())
			})
			console.log(filteredRestaurants)
			if (filteredRestaurants.length === 0) {
				return (
					<SearchPlaceholder>{"Não encontramos :("}</SearchPlaceholder>
				)
			} else {
				return (
					filteredRestaurants.map(item => {
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
			}
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<RestaurantSearchPageContainer>
				<Header>
				
						<BackButton onClick={() => goBack(history)}><AnimationBack /></BackButton>
					
					<HeaderTitleBox>
						<HeaderTitle>Busca</HeaderTitle>
					</HeaderTitleBox>
				</Header>
				<SearchBox>
					<Input
						fullWidth="bool"
						color="secondary"
						variant={"filled"}
						label="Restaurante"
						value={search}
						type="string"
						name="search"
						placeholder="Restaurante"
						required
						onChange={event => setSearch(event.target.value)}>
					</Input>
				</SearchBox>
				<RestaurantsListContainer>
					{/* {search === "" ? renderSearchPlaceholder() : renderRestaurantSearch()} */}
					{renderRestaurantSearch()}
				</RestaurantsListContainer>

			</RestaurantSearchPageContainer>
		</ThemeProvider>
	)
}

export default RestaurantSearchPage
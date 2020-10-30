import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goBack } from '../../routes/Cordinator'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import useRequestData from '../../hooks/useRequestData'
import { BackButton, Header, HeaderTitle, HeaderTitleBox, RestaurantsListContainer, RestaurantSearchPageContainer, SearchBox, SearchInput, SearchPlaceholder } from "./styled"
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'

const RestaurantSearchPage = () => {
	const history = useHistory()
	const [search, setSearch] = useState("")
  const [restaurantsList, updateRestaurantsList] = useRequestData({}, '/restaurants')
	const restaurants = restaurantsList.restaurants
	
  const renderRestaurantSearch = () => {
		if (search === "") {
			return (
				<SearchPlaceholder>Busque por nome de restaurante</SearchPlaceholder>
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
    <RestaurantSearchPageContainer>
      <Header>
				<BackButton onClick={()=>goBack(history)}>
					<BackIcon/>
				</BackButton>
				<HeaderTitleBox>
					<HeaderTitle>Busca</HeaderTitle>
				</HeaderTitleBox>
			</Header>
			<SearchBox>
				<SearchIcon />
				<SearchInput
					name="search"
					placeholder='Restaurante'
					autoFocus
					onChange={event => setSearch(event.target.value)}
					value={search}
				/>
			</SearchBox>
			<RestaurantsListContainer>
				{/* {search === "" ? renderSearchPlaceholder() : renderRestaurantSearch()} */}
				{renderRestaurantSearch()}
			</RestaurantsListContainer>
    </RestaurantSearchPageContainer>
  )  
}

export default RestaurantSearchPage
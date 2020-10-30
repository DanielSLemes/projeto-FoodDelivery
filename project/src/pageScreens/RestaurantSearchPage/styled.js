import styled from 'styled-components'

export const RestaurantSearchPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: Roboto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto) 1fr;
  align-content: start;
`

export const Header = styled.div`
  width: 100vw;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`

export const BackButton = styled.span`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 10px;
  left: 16px;
  cursor: pointer;
`

export const HeaderTitleBox = styled.div`
  width: 175px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.39px;
`

export const SearchBox = styled.div`
  height: 56px;
  margin: 8px 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-items: center;
  z-index: 200;
  position: relative;

  svg {
    position: absolute;
    left: 17px;
    cursor: pointer;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 54px;
  margin: 0;
  padding-left: 56.3px;
  padding-right: 8px;
  border-radius: 2px;
  border: none;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #d0d0d0;
    letter-spacing: -0.39px;
  }
`

export const RestaurantsListContainer = styled.div`
  align-self: stretch;
  padding: 4px 16px;
  overflow-y: scroll;
`

export const SearchPlaceholder = styled.p`
  margin: 12px 0;
  text-align: center;
  letter-spacing: -0.39px;
`
import styled from 'styled-components'

export const FeedPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: Roboto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto) 1fr auto;
  justify-content: center;
  align-content: start;
`

export const Header = styled.div`
  width: 100%;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: flex-end;
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
  padding-left: 17px;
  padding-right: 8px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-items: center;
  gap: 15.3px;
  cursor: text;

  svg {
    cursor: pointer;
  }
`

export const SearchPlaceholder = styled.p`
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #d0d0d0;
  cursor: text;
`

export const FilterBox = styled.div`
  box-sizing: border-box;
  height: 42px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const FilterItem = styled.span`
  width: 87px;
  height: 18px;
`

export const FilterText = styled.p`
  margin: 0;
  width: 87px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
`

export const RestaurantsListContainer = styled.div`
  align-self: stretch;
  padding: 4px 16px;
  position: relative;
  overflow-y: scroll;
`

export const Footer = styled.div`
  align-self: end;
  width: 100%;
  height: 49px;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  display: flex;
  justify-content: space-around;
`

export const SectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  
  svg {
    cursor: pointer;
  }
`
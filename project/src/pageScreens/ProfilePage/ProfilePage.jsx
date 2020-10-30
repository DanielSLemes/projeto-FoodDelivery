
// import React from "react"
// import {
// IconButton, 
// Typography, 
// Divider
// } from '@material-ui/core'
// import CreateIcon from '@material-ui/icons/Create';
// import { ReactComponent as HomePageIcon } from '../../assets/icons/homepage.svg'
// import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/shopping-cart.svg'
// import { ReactComponent as AvatarSelectedIcon } from '../../assets/icons/avatar-selected.svg'
// import {
// ContainerInfo,
// Header,
// Title,
// HeaderTitle,
// DivText,
// DivIcon,
// Retangle,
// DivHistory,
// CardOrder,
// Footer,
// DivFooter,
// ProfilePageContainer,
// } from './Style'
// import Loading from '../../components/Loading/Loading'
// import useProtectedPage from '../../hooks/useProtectedPage'
// import useRequestData from '../../hooks/useRequestData'
// import { useHistory } from 'react-router-dom'
// import {goToProfileEditPage, goToEditAdressPage, goToFeedPage, goToCartPage} from '../../routes/Cordinator'

// const ProfilePage = () => {
//     useProtectedPage()
//     const history = useHistory()
//     const [userProfile, updateUserProfile] = useRequestData({}, '/profile')
//     const [orderList, updateOrderList] = useRequestData({}, '/orders/history')
//     const user = userProfile.user
//     const order = orderList.orders

//     const renderUser = () => {
//         return(
//             user.map((item) => {
//                 return(
//                     <div key={item.id}>
//                         <ContainerInfo>
//                             <DivText>
//                                 <Typography>{item.name}</Typography>
//                                 <Typography>{item.email}</Typography>
//                                 <Typography>{item.cpf}</Typography>
//                             </DivText>
//                             <DivIcon>
//                                 <IconButton onClick={() => goToProfileEditPage(history)}>
//                                     <CreateIcon/>
//                                 </IconButton>          
//                             </DivIcon>
//                         </ContainerInfo>
//                         <Retangle>
//                             <DivText>
//                                 <Typography style={{color: "grey"}}>Endereço cadastrado</Typography>
//                                 <Typography>{item.address}</Typography>
//                             </DivText>
//                             <DivIcon>
//                                 <IconButton onClick={() => goToEditAdressPage(history)}>
//                                     <CreateIcon/>
//                                 </IconButton>   
//                             </DivIcon>
//                         </Retangle>
//                     </div>
//                 )
                
//             })
// =======
//             <div key={user.id}>
//                 <ContainerInfo>
//                     <DivText>
//                         <Typography>{user.name}</Typography>
//                         <Typography>{user.email}</Typography>
//                         <Typography>{user.cpf}</Typography>
//                     </DivText>
//                     <DivIcon>
//                         <IconButton onClick={() => goToProfileEditPage(history)}>
//                             <CreateIcon/>
//                         </IconButton>          
//                     </DivIcon>
//                 </ContainerInfo>
//                 <Retangle>
//                     <DivText>
//                         <Typography style={{color: "grey"}}>Endereço cadastrado</Typography>
//                         <Typography>{user.address}</Typography>
//                     </DivText>
//                     <DivIcon>
//                         <IconButton onClick={() => goToEditAdressPage(history)}>
//                             <CreateIcon/>
//                         </IconButton>   
//                     </DivIcon>
//                 </Retangle>
//             </div>
                
            
//         )
//     }


//     const renderOrders = () => {
//         if (order > 0){
//             return(
//                 order.map((item) => {
//                     return(
//                         <CardOrder key={item.id}>
//                             <Typography variant="h6" color="primary">Nome do restaurante</Typography>
//                             <Typography variant="subtitle2">data</Typography>
//                             <Typography variant="h5">Total</Typography>
//                         </CardOrder>
//                     )
//                 })
//             )
//         } else {
//             return(
//                 <Typography 
//                 align="center"
//                 style={{marginTop: 30}}>Você não realizou nenhum pedido</Typography>
//             )
//         }
        
//     }
    
    

//     return (
//         <ProfilePageContainer>
//             <Header>
//                 <Title>
//                     <HeaderTitle>Meu perfil</HeaderTitle>
//                 </Title>
//             </Header>
//             <div>

//                 {user ? renderUser() : <Loading />}

//             </div>
//             <DivHistory>
//                 <Typography>Histórico de pedidos</Typography>
//                 <Divider variant="middle" />
//                 <div>
//                     {order ? renderOrders() : <Loading/>}
//                 </div>
//             </DivHistory>
//             <Footer>
//                 <DivFooter>
//                     <IconButton onClick={() => goToFeedPage(history)}>
//                         <HomePageIcon/>
//                     </IconButton>
//                     <IconButton onClick={() => goToCartPage(history)}>
//                         <ShoppingCartIcon/>
//                     </IconButton>  
//                     <IconButton>
//                         <AvatarSelectedIcon/>
//                     </IconButton>               
//                 </DivFooter>
//             </Footer>
//         </ProfilePageContainer>
//     )
// }


// export default ProfilePage

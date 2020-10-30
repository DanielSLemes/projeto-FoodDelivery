import React from 'react'
import ErrorImageSource from '../../assets/Img/error.jpg'
import Typography from '@material-ui/core/Typography'
import { ErrorImage, ErrorPageContainer } from './Styled'

const ErrorPage = () => {
  return(
    <ErrorPageContainer>
      <ErrorImage alt={'Erro404'} src={ErrorImageSource}/>
      <Typography color={'primary'} variant={'h6'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
    </ErrorPageContainer>
  )
}

export default ErrorPage
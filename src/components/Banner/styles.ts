import styled from 'styled-components'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-top: 340px;
`

export const Titulo = styled.h2`
  max-width: 450px;
  font-size: 36px;
`

export const Precos = styled.p`
  margin-top: 24px;
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`

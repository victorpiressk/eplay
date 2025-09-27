import styled from 'styled-components'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    padding-top: 340px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
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

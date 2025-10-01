import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .container {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 32px;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
    left: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Titulo = styled.h2`
  max-width: 450px;
  font-size: clamp(20px, 3vw, 36px);
  margin: 0;
`

export const Precos = styled.p`
  margin-top: 16px;
  font-size: clamp(14px, 2vw, 24px);

  span {
    text-decoration: line-through;
    opacity: 0.7;
  }
`
// export const Imagem = styled.div`
//   width: 100%;
//   height: 100vw;
//   background-image: url(${bannerImg});
//   background-repeat: no-repeat;
//   background-size: 100%;
//   font-weight: bold;

//   .container {
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-end;
//   }

//   ${TagContainer} {
//     position: absolute;
//     top: 32px;
//   }
// `

// export const Titulo = styled.h2`
//   padding-top: 28vw;
//   max-width: 450px;
//   font-size: 36px;
// `

// export const Precos = styled.p`
//   margin-top: 24px;
//   font-size: 24px;

//   span {
//     text-decoration: line-through;
//   }
// `

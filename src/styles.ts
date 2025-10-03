import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  cinzaClaro: '#a3a3a3',
  verde: '#10ac84'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
    color: ${cores.branca};
  }

  body {
    background-color: ${cores.preta};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 70%;
    }

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }

  }
`

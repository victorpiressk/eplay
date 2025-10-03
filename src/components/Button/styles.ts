import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branca)};
  border-radius: 8px;
  padding: 8px 16px;
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  padding: 8px 16px;
  background-color: transparent;
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`

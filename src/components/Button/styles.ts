import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  padding: 8px 16px;
  background-color: transparent;
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  padding: 8px 16px;
  background-color: transparent;
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`

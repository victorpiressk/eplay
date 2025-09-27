import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline-block;
  border-radius: 8px;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
`

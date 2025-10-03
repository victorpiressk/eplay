import styled from 'styled-components'
import { cores } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font_weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
`

export const Link = styled(HashLink)`
  color: ${cores.cinzaClaro};
  margin-right: 8px;
`

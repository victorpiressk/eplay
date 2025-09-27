import Product from '../Product'
import { Container, Title, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
          infos={['-10%', 'R$ 150']}
          image="https://dummyimage.com/222x250"
        />
        <Product
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
          infos={['-10%', 'R$ 150']}
          image="https://dummyimage.com/222x250"
        />
        <Product
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
          infos={['-10%', 'R$ 150']}
          image="https://dummyimage.com/222x250"
        />
        <Product
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
          infos={['-10%', 'R$ 150']}
          image="https://dummyimage.com/222x250"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList

import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import iconeCarrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <>
      <S.HeaderBar>
        <div>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link to="/categories">Categorias</Link>
              </S.LinkItem>
              <S.LinkItem>
                <a href="#">Novidades</a>
              </S.LinkItem>
              <S.LinkItem>
                <a href="#">Promoções</a>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.LinkCart href="#">
          0 - produto(s)
          <img src={iconeCarrinho} alt="Carrinho" />
        </S.LinkCart>
      </S.HeaderBar>
    </>
  )
}

export default Header

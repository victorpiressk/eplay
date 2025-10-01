import { useEffect, useState } from 'react'
import Button from '../Button'
import Tag from '../Tag'
import { Imagem, Titulo, Precos } from './styles'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [destaque, setDestaque] = useState<Game>()

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setDestaque(res))
  }, [])

  if (!destaque) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Imagem style={{ backgroundImage: `url(${destaque.media.cover})` }}>
        <div className="container">
          <Tag size="big">Destaque do dia</Tag>
          <div>
            <Titulo>{destaque.name}</Titulo>
            <Precos>
              De <span>{formataPreco(destaque.prices.old)}</span> <br />
              por apenas {formataPreco(destaque.prices.current)}
            </Precos>
          </div>
          <Button
            type="link"
            to={`/product/${destaque.id}`}
            title="Clique aqui para aproveitar essa oferta"
          >
            Aproveitar
          </Button>
        </div>
      </Imagem>
    </>
  )
}

export default Banner

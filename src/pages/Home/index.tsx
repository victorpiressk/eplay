import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import imgResident from '../../assets/images/resident.png'
import imgDiablo from '../../assets/images/diablo.png'
import imgStarWars from '../../assets/images/star_wars.png'
import imgZelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 250,00'],
    image: imgResident
  },
  {
    id: 2,
    title: 'Diablo IV',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['5%', 'R$ 290,00'],
    image: imgDiablo
  },
  {
    id: 3,
    title: 'Star Wars Jedi: Survivor',
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['10%', 'R$ 250,00'],
    image: imgStarWars
  },
  {
    id: 4,
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['10%', 'R$ 250,00'],
    image: imgZelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['17/05'],
    image: imgResident
  },
  {
    id: 6,
    title: 'Diablo IV',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['17/05'],
    image: imgDiablo
  },
  {
    id: 7,
    title: 'Star Wars Jedi: Survivor',
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['17/05'],
    image: imgStarWars
  },
  {
    id: 8,
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['17/05'],
    image: imgZelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home

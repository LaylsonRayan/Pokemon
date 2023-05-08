import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Card from '../components/Card'

type Pokemon = {
  name: string;
  url: string;
  id: number;
}

type Props = {
  pokemons: Pokemon[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const maxPokemons = 300
  const api = 'http://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((item: Pokemon, index: number) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-red-600 text-center text-5xl mr-16">Poke<span className="text-black">Next</span></h1>
        <Image src="/images/pokeball.png" width={50} height={50} alt="PokeNext"/>
      </div>
      <div className="flex flex-wrap justify-between items-center max-w-[1100px] m-auto">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  )
}

export default Home

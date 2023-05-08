import Image from 'next/image'
import { ReactNode } from 'react';
import Styles from './styles.module.css'

interface Pokemon{
    weight: ReactNode;
    height: ReactNode;
    types: any;
    id: any;
    name: string
  }
  
  interface PokemonProps{
    pokemon: Pokemon;
  }
  
  export const getStaticPaths = async () => {
    const maxPokemons = 300;
    const api = 'http://pokeapi.co/api/v2/pokemon/';
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();
  
    const paths = data.results.map((pokemon: any, index: number) => {
      return {
        params: {pokemonId: (index+1).toString()},
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async (context: { params: { pokemonId: any; }; }) => {
    const id = context.params.pokemonId;
  
    const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`);
  
    const data = await res.json();
  
    return {
      props: {pokemon: data},
    };
  };
  
  export default function Pokemon({pokemon}: PokemonProps){
    return (
      <div className="items-center ">
        <h1 className="text-4xl capitalize bg-zinc-900 text-white p-12 m-3 w-[300px] ">
          {pokemon.name}
        </h1>
        <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
        width={200} height={200} alt={pokemon.name}/>
        <div>
          <h3 className="m-24 text-[19,2px]">Numero:</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div>
          <h3 className="m-24 text-[19,2px]">Tipo:</h3>
          <div className="flex items-center justify-center p-[96px_16px] text-white bg-teal-600 mr-[8px] border-solid rounded-md uppercase text-[12.8] ">
            {pokemon.types.map((item: { type: { name: string }; }, index: any) =>(
              <span key={index} className={`${Styles.type} ${Styles['type_'+ item.type.name]}`}>{item.type.name}</span>
            ))}
          </div>
        </div>
        <div className=" flex items-center justify-center mt-[8px]">
          <div className="m-4 p-4 flex items-center justify-center flex-col ">
            <h4 className="border-r border-solid">Altura:</h4>
            <p>{pokemon.height}</p>
          </div>
          <div>
            <h4>Peso:</h4>
            <p>{pokemon.weight}</p>
          </div>
        </div>
      </div>
    )
  }
  
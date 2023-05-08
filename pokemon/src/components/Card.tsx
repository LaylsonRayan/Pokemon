import Link from 'next/link'
import Image from 'next/image'

interface Pokemon {
    id: any;
    name: string;
  }
  
  interface CardProps {
    pokemon: Pokemon;
  }
  
  export default function Card({ pokemon }: CardProps) {
    return (
      <div className="flex justify-center items-center flex-col p-[16px] mb-8 w-[23%] rounded-2xl border-s-red-600 border-2 shadow-[5px_5px_-12px_rgba(0,0,0,0.5)] bg-zinc-950 text-white">
        <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
        width={120} height={120} alt={pokemon.name}/>
        <p className="flex justify-center items-center m-4 bg-red-600 rounded-[5px] p-[5px] text-white">
            #{pokemon.id}
        </p>
        <h3 className="capitalize mb-4 text-[22px]">
            {pokemon.name}
        </h3>
        <Link href={`/pokemon/${pokemon.id}`}>
            <a className="no-underline bg-white text-gray-900 p-[112px_19.2px] border-r-[80px] font-bold hover:text-red-600 ">
                Detalhes
            </a>
        </Link>
      </div>
    );
  }
  
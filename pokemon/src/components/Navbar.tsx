import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
    return(
        <nav className="flex items-center gap-2 py-4 px-4 mb-8 bg-zinc-800 text-white">
            <div className="flex items-center ml-17  ">
                <Image src="/images/pokeball.png" className="w-30 h-30" alt="PokeNext"/>
                <h1>PokeNext</h1>
            </div>
            <ul className="flex list-none ">
                <li className="mr-5 text-white no-underline p-1.5 transition hover:delay-4 border-b-2 border-solid border-transparent border-white">
                    <Link href="/">Home</Link>
                </li>
            <li className="mr-5 text-white no-underline p-1.5 transition hover:delay-4 border-b-2 border-solid border-transparent border-white">
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}
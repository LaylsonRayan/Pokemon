import Image from 'next/image'

export default function About(){
    return(
        <div className="text-center">
            <h1 className="font-2xl mb-4">Sobre o Projeto</h1>
            <p className="mb-6 max-w-lg m-auto leading-6">Esse projeto foi criado utilizando Typescript com os Frameworks Next e Tailwind CSS, 
            esse projeto também foi criado como um teste na implementação do next em um projeto real, utilizando uma API real 
            e etc.</p>
            <Image src="/images/charizerd.pgn" width={300} height={300} alt="Charizard"/>
        </div>
    )
}
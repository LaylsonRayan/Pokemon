import { FC, ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

interface LayoutProps{
    children: ReactNode;
}

export const Layout: FC<LayoutProps>= ({children}) =>{
    return <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <title>PokeNext</title>
        </Head>
        <Navbar />
        <main className="min-h-70vh">{children}</main>
        <Footer />
    </>;
}
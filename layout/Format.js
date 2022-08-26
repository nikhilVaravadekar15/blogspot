import Head from 'next/head'
import Header from "../components/Header"
import Footer from '../components/Footer'

function Format({ children }) {
    return (
        <>
            <Head>
                <title>Blogspot</title>
                <link rel="icon" href="/icon__blog.png" />
            </Head>

            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Format

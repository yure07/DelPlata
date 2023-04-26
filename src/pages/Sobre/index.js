import Header from '../../components/Header/index.js'
import Filter from '../../components/Filter/index.js'
import Footer from '../../components/Footer/index.js'
import './sobre.css'
export default function Sobre () {
    return(
        <>
        <Header/>
        <Filter/>
        <main className='container-about'>
            <h1>Quem Somos</h1>
            <p>DelPlata, uma Loja de Prata em Cafarnaum Bahia.</p>
            <p> <b>Erivânia Rosa, Fundadora da Marca,</b> sempre foi apaixonada por prata e acessórios de qualidade, 
                e percebeu que não havia uma loja especializada em prata na região. 
                Com sua visão empreendedora, ela decidiu criar sua própria loja de prata, 
                que se tornaria uma referência local e levaria o nome de DelPlata.</p>
            <p>Erivânia decidiu transformar sua paixão em negócio e abrir sua própria loja de prata. 
                Com muita determinação e planejamento cuidadoso, ela buscou o conhecimento necessário sobre o 
                mercado de joias de prata, estudou as tendências de moda e design, e pesquisou fornecedores confiáveis.</p>
            <p>A DelPlata foi inaugurada com grande entusiasmo pela comunidade local, que recebeu a loja com 
                curiosidade e interesse. A qualidade das peças de prata, a dedicação de Erivânia em oferecer um 
                excelente atendimento ao cliente conquistou rapidamente a confiança dos clientes.</p>
        </main>
        <Footer/>
        </>
    )   
}
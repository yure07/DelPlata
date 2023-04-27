import { useContext } from "react"
import { useParams } from "react-router-dom"
import { DataContext } from "../../context/Dataprovider.js"
import Header from "../../components/Header/index.js"
import Filter from "../../components/Filter/index.js"
import Footer from "../../components/Footer/index.js"

export default function Geral (){
    const value = useContext(DataContext)
    const [produtos] = value.produtos
    const params = useParams()

    return(
        <>
            <Header/>
            <Filter/>

            <section className='container-catalog'>
            {produtos.map((produto)=>{
                if (produto.name === params.name){
                    return(
                    <div className='card-product' key={produto.id}>
                        <a href={`/produto/${produto.title}/${produto.id}`} id='link'>
                            <div className='image-product' style={ {backgroundImage: `url(${produto.image})` } }></div>
                            <strong>{produto.title}</strong>
                            <p>R$ {produto.price}</p>
                            <p>R$ {produto.priceNow}</p>
                        </a>
                    </div>
                    )
                }
            })
            
            
            }
            </section>

            <Footer/>
        </>
    )
}
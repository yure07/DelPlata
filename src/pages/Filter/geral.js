import { useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { DataContext } from "../../context/Dataprovider.js"
import Header from "../../components/Header/index.js"
import Filter from "../../components/Filter/index.js"
import Footer from "../../components/Footer/index.js"

export default function Geral (){
    const value = useContext(DataContext)
    console.log(value)
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
                        <Link to={`/produto/${produto.title}/${produto.id}`} id='link'>
                            <div className='image-product' style={ {backgroundImage: `url(${produto.image})` } }></div>
                            <strong>{produto.title}</strong>
                            <p>R$ {produto.price}</p>
                            <p>{produto.priceNow}</p>
                        </Link>
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
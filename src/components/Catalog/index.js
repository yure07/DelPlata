import './catalog.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Catalog () {
    const [products, setProducts] = useState([])

    const requisition = async () => {
        await axios.get('../data/db.json')
        .then((response)=>{
            setProducts(response.data.produtos)
        })
        .catch((e)=>{
            console.log("HOUVE UM ERRO NA REQUISIÇÃO" + e)
        })
    }

    useEffect(()=>{
        requisition()
    },[]) 
    
    return(
        <section className='container-catalog'>

            {products.map((item)=>{
                return(
                <div className='card-product' key={item.id}>
                    <Link to={`/produto/${item.title}/${item.id}`} id='link'>
                        <div className='image-product' style={ {backgroundImage: `url(${item.image})` } }></div>
                        <strong>{item.title}</strong>
                        <p>R$ {item.price}</p>
                        <p>{item.priceNow}</p>
                    </Link>
                </div>
                )
            })}

        </section>
    )
}
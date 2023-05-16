import '../../components/init.jsx'
import './produtos.css'
import Header from '../../components/Header/index.js'
import Filter from '../../components/Filter/index.js'
import Footer from '../../components/Footer/index.js'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../context/Dataprovider.js'
import { useParams } from 'react-router-dom'
import {GrPrevious, GrNext} from 'react-icons/gr'

export default function Produto () {
    const value = useContext(DataContext)
    const [produtos] = value.produtos
    const [details, setDetails] = useState([])
    const params = useParams()

    const img = document.querySelector(".tink-img")
    const imgs = [details.image, details.image2, details.image3]

    if(details.image4 !== undefined){imgs.push(details.image4)}
    
    let count = 0

    useEffect(()=>{
        window.scrollTo(0, 0)
        produtos.forEach(produto =>{
            if (produto.id === parseInt(params.id)){
                setDetails(produto)
            }
        })
    },[params.id, produtos])

    const next = () => {
        count++
        if(count >= imgs.length) {
            count = 0
            img.style.backgroundImage = `url(${imgs[count]})`
        } else {
            img.style.backgroundImage = `url(${imgs[count]})`
        }
    }

    const back = () => {
        count--
        if(count<0){
            count = imgs.length-1
            img.style.backgroundImage = `url(${imgs[count]})`
        } else {
            img.style.backgroundImage = `url(${imgs[count]})`
        }
    }

    return(
        <>
        <Header/>
        <Filter/>
        {
            <div className='container-product'>
               
               <div className='carousel'>
                <div className='slider'>
                <h1 id='title-mobile'>{details.title}</h1>
                    <div className='tink-img' style={{backgroundImage: `url(${details.image})`}}></div>
                    
                    <div className='btn'>
                        <button onClick={back}>
                            <GrPrevious size={25} />
                        </button>
                        <button onClick={next}>
                            <GrNext size={25}/>
                        </button>
                    </div>

                    </div>
               </div>
               
                <div className='infos'>
                    <strong id='title-pc'>{details.title}</strong>

                    <p>{details.overview}</p>
                    <div className='silver'>Prata 925</div>

                    <p>R$ {details.price}</p>
                    <p> {details.priceNow}</p>
                    <p>ou em até <b>{details.parcel}</b> </p>
                    
                    {details.priceNow === 'ESGOTADO' ? 
                    <button className='product-off'>ESGOTADO</button>
                    : 
                    <a href={details.buy} target="_blank">
                    <button className='buy-product'>Comprar</button>
                    </a>
                }

                </div>
            </div>
        } 
        <Footer/>  
        </>
    )
}
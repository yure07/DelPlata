import './filter.css'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../context/Dataprovider.js'

export default function Filter () {
    const value = useContext(DataContext)
    const [produtos] = value.produtos

    const [colar, setColar] = useState('')
    const [brinco, setBrinco] = useState('')
    const [anel , setAnel] = useState('')
    const [piercing, setPiercing] = useState('')
    const [tornozeleira, setTornozeleira] = useState('')
    const [masculino, setMasculino] = useState('')
    const [berloque, setBerloque] = useState('')
    const [pulseira, setPulseira] = useState('')
    const [infantil, setInfantil] = useState('')

    useEffect(()=>{
        produtos.forEach(item=>{
            if(item.name === "colar"){
                setColar(item.name)
            } else if(item.name === "brinco"){
                setBrinco(item.name)   
            } else if(item.name === "anel"){
                setAnel(item.name)
            } else if(item.name === "piercing"){
                setPiercing(item.name)
            } else if(item.name === "tornozeleira"){
                setTornozeleira(item.name)
            } else if(item.name === "masculino"){
                setMasculino(item.name)
            } else if(item.name === "berloque"){
                setBerloque(item.name)
            } else if(item.name === "pulseira") {
                setPulseira(item.name)
            } else if(item.name === "infantil") {
                setInfantil(item.name)
            }
        })
    },[])

    return(
        <nav>
            <div className='container-filter'>
               
               {
                <ul>
                    
                  <Link to={`/filter/${colar}`}> <li>colares</li> </Link>
                  <Link to={`/filter/${anel}`}> <li>anéis</li> </Link>
                  <Link to={`/filter/${brinco}`}> <li>brincos</li> </Link>
                  <Link to={`/filter/${tornozeleira}`}> <li>tornozeleiras</li> </Link>
                  <Link to={`/filter/${masculino}`}> <li>masculino</li> </Link>
                  <Link to={`/filter/${infantil}`}> <li>infantil</li> </Link>
                  <Link to={`/filter/${piercing}`}> <li>piercing</li> </Link>
                  <Link to={`/filter/${pulseira}`}> <li>pulseiras</li> </Link>
                  <Link to={`/filter/${berloque}`}> <li>berloques</li> </Link>  

                </ul>
}   
            </div>
        </nav>
    )
}
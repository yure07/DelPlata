import React from 'react'
import './header.css'
import logo from '../../assets/logo-com-fundo.jpeg'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/Dataprovider.js'

export default function Header () {
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

    const refLinks = useRef();

    let showsidebar = false

     function toggleSidebar () {
        let links = refLinks.current

        showsidebar = !showsidebar
        if(showsidebar) {
            links.style.marginLeft = '-10vw'
            links.style.animationName = 'Sidebar'
        } else {
            links.style.marginLeft = '-100vw'
            links.style.animationName = 'SidebarClose'
        }
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth > 768 && showsidebar) {
            toggleSidebar()
        }
    })

    return(
        <header class="header" id="header-daddy">

        <Link to='/'><img src={logo} alt="1" width="70px"/></Link>

        <button onClick={toggleSidebar} class="btn-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>

        <nav class="navlinks" id="links" ref={refLinks}>
            <button onClick={toggleSidebar} class="btn-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
                <Link to="/" id='link1'>Início</Link>
                <Link to='https://www.instagram.com/delplata._/' target='_blank'>Contato</Link>
                <Link to="/sobre">Sobre</Link>
                
            <nav className='menu-mobile'>
                <ul>
                  <Link to={`/filter/${colar}`}> <li>Colares</li> </Link>
                  <Link to={`/filter/${anel}`}> <li>Anéis</li> </Link>
                  <Link to={`/filter/${brinco}`}> <li>Brincos</li> </Link>
                  <Link to={`/filter/${tornozeleira}`}> <li>Tornozeleiras</li> </Link>
                  <Link to={`/filter/${masculino}`}> <li>Masculino</li> </Link>
                  <Link to={`/filter/${infantil}`}> <li>Infantil</li> </Link>
                  <Link to={`/filter/${piercing}`}> <li>Piercing</li> </Link>
                  <Link to={`/filter/${pulseira}`}> <li>Pulseiras</li> </Link>
                  <Link to={`/filter/${berloque}`}> <li>Berloques</li> </Link>
                </ul>
            </nav>

            
        </nav>

    </header>
    )
}
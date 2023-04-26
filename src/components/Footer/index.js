import './footer.css'
import logo from '../../assets/logo-com-fundo.jpeg'
import cartoes from '../../assets/mercado-pago.png'
import {BsInstagram, BsWhatsapp} from 'react-icons/bs/index.esm.js'
import { Link } from 'react-router-dom'

export default function Footer () {
    return(
        <>
        <footer>
            <img src={logo} alt="1" width="70px" className='logo-img'/>

            <p>
            44880-000
            <p>Cafarnaum - BA</p>
            </p>

            <img src={cartoes} alt="1" width="230px"/>

            <div className='icons-socials'>
               <Link to='https://www.instagram.com/delplata._/' target='_blank'> <BsInstagram/> </Link>
               <Link to='https://wa.link/rn6a84' target='_blank'> <BsWhatsapp/> </Link>
            </div>
        </footer>
        <div className='container-2-footer'>
            <p>DEL PLATA  &copy; 2023</p>
            <p>Feito por - <a href='https://yurerafael.dev/' target='_blank'>Yure Rafael</a></p>
        </div>
        </>
    )
}
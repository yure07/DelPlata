import './logistic.css'
import {BsCreditCard, BsBox} from 'react-icons/bs/index.esm.js'
import {RiArrowGoBackLine} from 'react-icons/ri/index.esm.js'

export default function Logistic () {

    return(
        <div className='container-logistic'>
    
            <div className='info'>
                <label><BsCreditCard/></label>
            <p>EM ATÉ 5X  <p>SEM JUROS</p> </p>
            </div>

            <div className='info'>
                <label><BsBox/></label>
            <p>FRETE GRÁTIS <p>EM PEDIDOS ACIMA DE R$199,99</p> </p>
            </div>

        </div>
    )
}
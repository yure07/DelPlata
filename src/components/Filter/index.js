import './filter.css'
import { Link } from 'react-router-dom'

export default function Filter () {
    return(
        <nav>
            <div className='container-filter'>
               
               {
                <ul>
                    
                  <Link to={"/filter/colar"}> <li>colares</li> </Link>
                  <Link to={"/filter/anel"}> <li>anéis</li> </Link>
                  <Link to={"/filter/brinco"}> <li>brincos</li> </Link>
                  <Link to={"/filter/masculino"}> <li>masculino</li> </Link>
                  <Link to={"/filter/infantil"}> <li>infantil</li> </Link>
                  <Link to={"/filter/piercing"}> <li>piercing</li> </Link>
                  <Link to={"/filter/pulseira"}> <li>pulseiras</li> </Link>
                  <Link to={"/filter/berloque"}> <li>berloques</li> </Link>  
                  <Link to={"/filter/escapulario"}> <li>ESCAPULÁRIOS</li> </Link>
                </ul>
}   
            </div>
        </nav>
    )
}
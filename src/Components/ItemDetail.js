import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

const ItemDetail = ({nombre, precio, imagen, id, stock, descripcion}) => {

  const [agregado, setAgregado] = useState(false);
  
  const  agregadoOk = () => {
    setAgregado(true);
  }

  useEffect(()=>{
    console.log("funca", agregado);
  }, [agregado])

    return (
        <div className="detail-outside flex-box">
            <div className="detail-row">
              <img src={imagen} alt={`${id}-${nombre}`} className=" bordesRedondeados" />
              <section className="">
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
                <h2>${precio}</h2>
              </section>
            </div>
            {!agregado &&
              <ItemCount stock={stock} initial="1" onAdd={agregadoOk}/>
            }{agregado  &&
              <div className= "detail-outside">
              <h3>Agregado!</h3>
              <Link to={`/cart`}><Button variant="outline-primary">Ir al carrito</Button></Link>
              </div>
            }
        </div>
        
    )
}

export default ItemDetail


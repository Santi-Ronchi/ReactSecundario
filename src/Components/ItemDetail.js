import { useState, useEffect, useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount'

const ItemDetail = ({nombre, precio, imagen, id, stock, descripcion}) => {

  const [agregado, setAgregado] = useState(false);

  const { myData, addProducto } = useContext(CartContext);

  const sendItem = (cantidad) => {
    addProducto(id, nombre, precio, cantidad);
  };

  const  agregadoOk = (cantidad) => {
    sendItem(cantidad);
    setAgregado(true);
  }

  useEffect(()=>{}, [agregado])

    return (
        <div className="detail-outside flex-box-detail">
            <div className="detail-row">
              <img src={imagen} alt={`${id}-${nombre}`} className=" bordesRedondeados" />
              <section className="">
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
                <h2>${precio}</h2>
              </section>
            </div>
            {!agregado &&
              <div className= "detail-outside">
                <br/>
                <ItemCount stock={stock} initial="1" onAdd={agregadoOk}/>
              </div>
            }{agregado  &&
              <div className= "detail-outside">
                <br/>
              <h3>Agregado!</h3>
              <Link to={`/cart`}><Button variant="outline-primary">Ir al carrito</Button></Link>
              </div>
            }
        </div>
        
    )
}

export default ItemDetail


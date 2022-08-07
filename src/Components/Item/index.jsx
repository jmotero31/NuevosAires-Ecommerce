import React from 'react'
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './styles.css'
import {useNavigate} from "react-router-dom"
import Card from 'react-bootstrap/Card';


const Item = ({producto}) => {

  const navigate = useNavigate()

  const handledetail= ()=>{
    // console.log("Navega hacia el detail")
    navigate(`/detail/${producto.id}`)
  }


return (
  <li className='estilo23'>
  <Card style={{ width: '18rem', height: '30rem', padding: '1rem'}}>
  <Card.Img variant="top" src={producto.image} style={{ width: '100%', height: '220px'}} />
  <Card.Body id="abajo">
    <Card.Title>{producto.title}</Card.Title>
    <Card.Text>
    $ {producto.price}
    </Card.Text>
    <div className="iu"><button variant="primary " onClick = {handledetail} className="buttonAddCart">Ver más</button></div>
  </Card.Body>
</Card>
</li>
  )
}
export default Item
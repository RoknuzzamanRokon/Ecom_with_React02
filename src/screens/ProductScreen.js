import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'


function ProductScreen({match}) {
  // const productId = match.params.id;
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  console.log('product:', product);
  return (
    <div> 
      <h2>{product.name}</h2>
       
    </div>
  )
}


export default ProductScreen;


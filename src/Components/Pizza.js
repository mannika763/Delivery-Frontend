import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from './Action/CartAction';


function Pizza({pizza}) {


const [variant, setVariant]= useState('small');
const [quantity, setQuantity] = useState(1);
const [show, setShow] = useState(false);
const dispatch = useDispatch();

function addToCartHandler(){
  dispatch(addToCart(pizza, quantity, variant))
}


const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return ( 
    <> 

{/* <Container>
  <Row>
    {data.map((pizza) => ( */}
      <Col md={5} key={pizza.name}>
        <Card key={pizza._id} style={{ width: '18rem', margin: '30px' }}>
          <Card.Img
            variant="top"
            src={pizza.image}
            style={{ height: '250px', cursor: 'pointer' }}
            onClick={() => handleShow(pizza)}
          />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>
              <Row>
                <Col md={6}>
                  <h6>Variant</h6>
                  <select value={variant} onChange={(e) => setVariant(e.target.value)}>
                    {pizza.varients.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </Col>
                <Col md={6}>
                  <h6>Quantity</h6>
                  <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((v, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </Col>
              </Row>
            </Card.Text>
            <Row>
              <Col md={6}>Price: {pizza.prices[0][variant] * quantity} /-Rs</Col>
              <Col md={6}>
                <Button className="bg-warning text-white" onClick={addToCartHandler}>AddToCart</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
        {/* ))}
  </Row>
</Container> */}

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Card.Img variant="top" src={pizza.image}
       style={{height: "230px", objectFit: "cover"}}
       />
          </div>
         <div>
          <h5>Description: </h5>
          <h6>{pizza.description}</h6>
          </div> </Modal.Body>
       
      </Modal>

    

    </>
  )
}

export default Pizza

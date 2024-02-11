
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { addToCart } from '../Action/CartAction';
import {Delete} from '../Action/CartAction';
import { MdDelete } from "react-icons/md";


function CartScreen() {

    const cartState= useSelector(state=>state.CartReducer);
    const cartItem = cartState.cartItem;
    console.log("see rendering", cartState)
    const dispatch = useDispatch(); 
    console.log('After rendering CartScreen');

    const handleDelete = () => {
        console.log("clikc")
        dispatch(Delete(cartItem));
      };

      const subTotal = cartItem.reduce((x,item)=> x+item.price, 0)

  return (
    <>
    <Container>
  <Row>
    <Col md={6}>
      <h1>My Cart</h1>
      <Row>
        {cartItem.map((item, index) => (
          <React.Fragment key={index}>
            <Col md={7} >
              <h5>{item.name} [{item.varient}]</h5>  
              <h6>
                {" "}
                Price: {item.quantity} * {item.prices[0][item.varient]} = {" "}
                {item.quantity * item.prices[0][item.varient]}
              </h6>
              <h6 >Quantity:&nbsp; <FaMinus 
              className='text-danger'
              style={{cursor: "pointer"}}
              onClick={()=>dispatch(addToCart(item, item.quantity-1, item.varient))}
              />&nbsp;{item.quantity}&nbsp;
              <FaPlus className='text-success'
               style={{cursor: "pointer"}}
               onClick={()=>dispatch(addToCart(item, item.quantity+1, item.varient))} 
              />&nbsp;&nbsp;
              <MdDelete 
               className='text-danger'
               style={{cursor: "pointer"}}
               onClick={handleDelete}
              /></h6>
            </Col>
            <Col md={5}>
              <img
                alt={item.name}
                src={item.image}
                style={{ width: "80px", height: "80px" }}
              />
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Col>
    <Col md={4}>
      <h1>Payment Info</h1>
     <h4> SUb Total</h4>
     <h4> Rs: {subTotal}/-</h4>
     <Button >Checkout</Button>
    </Col>
  </Row>
</Container>

    </>
  )

}

export default CartScreen

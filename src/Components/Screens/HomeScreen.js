import React from 'react'
import Pizza from '../Pizza'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { AllData } from '../Action/Action'; 





export default function HomeScreen() {
const dispatch = useDispatch();
const Fulldata = useSelector(state=> state.AllDataReducer)
// console.log(Fulldata)
const {loading, data, err} = Fulldata;


  useEffect(() => {dispatch(AllData())},
   [dispatch]);


  return (
    <>
  
      <Container>
        {
        loading? (<h1>Loading...</h1>)
        : err? (<h1>Error while fetching Data</h1>)
        : (
        <Row>
        {
      data.map((pizza) => (
        <Col md={4} key={pizza.name}>
          <Pizza pizza={pizza} />
        </Col>
      ))
    }
        </Row>
      )  }
      </Container>
    
     
    </>
  )
}

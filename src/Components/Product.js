import { useState, useEffect } from 'react' 

import {Card,Button, Container, Row, Col} from 'react-bootstrap'

import dataProducts from '../FakeData/Products'

import FormProduct from './Form/Product'

function Product() {

    const [dataAddProduct, setDataAddProduct] = useState();

    console.log("Componen Product");
    console.log(dataAddProduct);

    console.log("dataProducts")
    console.log(dataProducts)

    return (
        <Container className="py-5">
            <Row className="mb-5 justify-content-center">
                <Col md="5">
                    <FormProduct setDataAddProduct={setDataAddProduct} />
                </Col>
            </Row>
            <Row>
                {dataProducts.map((product,index)=>(
                    <Col md="3" key={index}>
                        <Card>
                            <Card.Img style={{height: '250px'}} variant="top" src={product.url} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.desc}</Card.Text>
                                <Button variant="primary" className="btn-sm">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Product

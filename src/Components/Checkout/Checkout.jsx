import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './checkout.css'
const Checkout = () => {
    const data = useLoaderData()
    return (
        <div className='checkoutDiv'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <Card.Title>{data.taitle}</Card.Title>
                    <Button variant="primary">Proceed To Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;
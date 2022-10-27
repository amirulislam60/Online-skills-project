import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';


const Details = () => {
    const data = useLoaderData();
    const { id, taitle, img, detail,rating}=data;
    console.log(data);
    return (
        <Card className='mb-5'>
            <Card.Body>
                <Card.Title>{taitle}</Card.Title>
                <Card.Img variant="top" src={img} />
                <Card.Text>
                    {detail.length>200?
                        <p>{detail.slice(0,250)+'...'}<Link to={`/courses/${id}`}>Red more</Link></p>
                    :
                        <p>{detail}</p>
                    }
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted">
              <div>
                <FaStar className='text-warning'></FaStar>
              </div>
              
              </Card.Footer>
        </Card>
    );
};

export default Details;
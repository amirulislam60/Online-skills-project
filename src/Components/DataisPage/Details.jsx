import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaJoint, FaStar } from 'react-icons/fa';


const Details = () => {
    const data = useLoaderData();
    const { id, taitle, img, detail,rating,student}=data;
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
            <Card.Footer className="d-flex justify-content-between">
              <div>
                <FaStar className='text-warning'></FaStar>
                    <span>{rating?.number}</span>
              </div>
              <div>
                    <FaJoint></FaJoint>
                    <span>{student?.number}</span>
              </div>
              </Card.Footer>
        </Card>
    );
};

export default Details;
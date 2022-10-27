import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
const RigthSide = (props) => {
    const data = props.data

    console.log(data)
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-category')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <Row xs={1} md={2} className="g-4">
            {data.map((item) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.detail.slice(0, 80) + '....'}
                            </Card.Text>
                            <Link to={`/details/${item.id}`}>
                                <button> see details</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

            ))}
        </Row>
    );
};

export default RigthSide;
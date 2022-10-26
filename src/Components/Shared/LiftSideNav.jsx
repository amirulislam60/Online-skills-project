import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LiftSideNav = () => {

    const [category,setcategory] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/courses-category')
        .then(res => res.json())
        .then(data =>setcategory(data));
    },[])
    return (
        <div>
            <h2>All Courses</h2>
            {
                category.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>

                </p>)
            }
        </div>
    );
};

export default LiftSideNav;
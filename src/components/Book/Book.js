import React from 'react';
import { Button } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';
import "./Book.css";
import axios from 'axios';
const Book = (props) => {
    const { _id, name, author, description, price, image } = props.book;
    const history = useNavigate();
    const deleteHandler = async () => {
        await axios.delete(`http://localhost:5000/books/${_id}`).then(res => res.data)
            .then(() => history("/"))
        //.then(() => history("/books"))
    }
    return (
        <div className="card">
            <img src={image} alt={name} />
            <article><b>Wrriten By:</b> {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>Rs {price}</h4>
            <Button LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
            <Button onClick={deleteHandler}>Delete</Button>
        </div>
    )
}

export default Book;
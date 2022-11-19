import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, FormLabel, Box, Button, FormControlLabel, Checkbox } from "@mui/material";

const BookDetails = () => {
    const [inputs, setInputs] = useState({});
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    const id = useParams().id;
    //console.log(id);
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/books/${id}`).then(res => res.data).then((data) => setInputs(data.book))
        }
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/books/${id}`, {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            available: Boolean(checked),
            image: String(inputs.image)
        }).then(res => res.data)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        sendRequest().then(() => {
            history("/books");
        });

    }
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }));
    }
    return (
        <form onSubmit={submitHandler}>
            <Box display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={700}
                alignContent={"center"}
                alignSelf="center"
                marginLeft={"auto"}
                marginRight="auto"
                marginTop={5}
            >
                <FormLabel>Name</FormLabel>
                <TextField margin="normal" fullWidth variant="outlined" type="text" name="name" value={inputs.name} onChange={handleChange} />
                <FormLabel>Author</FormLabel>
                <TextField margin="normal" fullWidth variant="outlined" type="text" name="author" value={inputs.author} onChange={handleChange} />
                <FormLabel>Description</FormLabel>
                <TextField margin="normal" fullWidth variant="outlined" type="text" name="description" value={inputs.description} onChange={handleChange} />
                <FormLabel>Price</FormLabel>
                <TextField margin="normal" fullWidth variant="outlined" type="number" name="price" value={inputs.price} onChange={handleChange} />
                <FormLabel>Image</FormLabel>
                <TextField margin="normal" fullWidth variant="outlined" type="text" name="image" value={inputs.image} onChange={handleChange} />
                <FormControlLabel control={<Checkbox checked={checked} />} label="available" onChange={() => setChecked(!checked)} />
                <Button type="submit" variant="contained">Update book</Button>
            </Box>

        </form>
    )
}

export default BookDetails;
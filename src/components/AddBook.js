import React, { useState } from 'react'
import { TextField, FormLabel, Box, Button, FormControlLabel, Checkbox } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
    const [checked, setChecked] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        author: "",
        description: "",
        price: "",
        image: ""
    });
    const history = useNavigate();

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }));
        // console.log(e.target.name, e.target.value)
    }

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/books", { 
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
        console.log({ ...inputs, available: checked });
        sendRequest().then(() => history("/books"));
        setChecked(false);
        setInputs({
            name: "",
            author: "",
            description: "",
            price: "",
            image: ""
        });

    }
    return (
        <form onSubmit={submitHandler}>
            <Box display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={600}
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
                <Button type="submit" variant="contained">add book</Button>
            </Box>

        </form>
    )
}

export default AddBook;
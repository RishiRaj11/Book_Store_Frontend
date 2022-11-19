import { Typography, Box, Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div style={{ background: 'url("https: //rivetedlit.com/wp-content/uploads/2020/12/Unknown-19-1.jpeg")' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Button LinkComponent={Link} to="/books" sx={{ marginTop: 10, background: "orangered" }} variant="contained">
                    <Typography>
                        View All Products
                    </Typography>
                </Button>
            </Box>
        </div>
    )
}

export default Home;
import { Typography, Box } from '@mui/material';
import React from 'react'

const About = () => {
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography sx={{ fontFamily: 'fantasy' }} variant="h3">
                    This is a CURD Application
                </Typography>
                <Typography sx={{ fontFamily: 'fantasy' }} variant="h4">
                    Using Mern Stack
                </Typography>
            </Box>
        </div>
    )
}

export default About;
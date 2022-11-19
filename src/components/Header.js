import React, { useState } from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky" >
                <Toolbar >
                    <Typography>
                        <Button LinkComponent={Link} to="/" ><LibraryBooksIcon /></Button>

                    </Typography>
                    <Tabs indicatorColor='secondary' textColor='white' value={value} onChange={(e, val) => { setValue(val) }} >
                        <Tab label="Book" LinkComponent={NavLink} to="/books" />
                        <Tab label="Add Book" LinkComponent={NavLink} to="/add" />
                        <Tab label="About us" LinkComponent={NavLink} to="/about" />

                    </Tabs>
                </Toolbar>

            </AppBar>


        </div>
    )
}

export default Header;
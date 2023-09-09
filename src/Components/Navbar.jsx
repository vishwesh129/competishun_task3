import { Box, Button, Center } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


export default function NavBar() {
    return (
        <div>
            <Center>
                <Box className="fixed-navbar">
                    <Button variant='ghost' className='no-hover-bg'><Link to="/">Recipe</Link></Button>
                    <Button variant='ghost' className='no-hover-bg'><Link to="/calorie">Calorie</Link></Button>
                    <Button variant='ghost' className='no-hover-bg'><Link to="/diet">Diet</Link></Button>
                </Box>
            </Center>
        </div>
    )
}

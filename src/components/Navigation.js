import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mdi/react';
import { mdiAccountCowboyHat } from '@mdi/js';
import './Navigation.css';
import { Navbar } from 'react-bootstrap';
// import MenuIcon from '@mui/icons-material/Menu';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function Navigation(){
//     return (
//     <Navbar>  
//     <div>
//         Navigation!
//         <Link to='/project'>
//            <p>Projects</p> 
//         </Link>
//         <Link to='/aboutme'>
//            <p>About Me</p> 
//         </Link>
//         <Link to='/resume'>
//            <p>Resume</p> 
//         </Link>
//         <Link to='/contact'>
//            <p>Contact</p> 
//         </Link>
//     </div>
//     </Navbar>  
// )}

function Navigation(){
    return(
    <Box sx={{ flexGrow: 1 }}>
        <Navbar className='d-flex justify-content-between'>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Icon path={mdiAccountCowboyHat} size={1} />
        </IconButton>
        <Typography className='d-flex justify-content-evenly' variant="h6" component="div" sx={{ flexGrow: 1 }}   >
          <Link to = '/aboutme' color="common.white">
          About Me
          </Link>
          <Link to = '/project' color="common.white">
          My Projects
          </Link>
          <Link to = '/resume' color="common.white">
          Resume
          </Link>
          <Link to = '/contact' color="common.white">
          Contact
          </Link>
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
    </Navbar>
  </Box>
);
}


export default Navigation
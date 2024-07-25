import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(45deg, #6a1b9a 30%, #ab47bc 90%)',
          boxShadow: 'none', // Optional: Remove shadow if you want a flat look
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            LearnSphere
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/courses">Courses</Button>
          <Button color="inherit" component={Link} to="/aboutus">About Us</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

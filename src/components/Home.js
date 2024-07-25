import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Emily Clark',
    role: 'Student',
    text: 'This platform has transformed my learning experience. The courses are well-structured, and the support is fantastic!',
    avatar: 'emily.jpg',
  },
  {
    name: 'Michael Johnson',
    role: 'Professional',
    text: 'The depth of content and the quality of instructors are top-notch. I highly recommend it to anyone looking to upskill.',
    avatar: 'michael.jpg',
  },
  {
    name: 'Samantha Lee',
    role: 'Freelancer',
    text: 'The flexibility of the courses allows me to learn at my own pace. Great platform with diverse learning options!',
    avatar: 'samantha.jpg',
  },
  {
    name: 'David Smith',
    role: 'Entrepreneur',
    text: 'I have gained valuable knowledge and skills that have directly impacted my business. Excellent resources and community!',
    avatar: 'david.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Teacher',
    text: 'The platform provides great tools for educators to enhance their teaching methods. It’s a fantastic resource!',
    avatar: 'olivia.jpg',
  },
];

const Home = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h2" gutterBottom>Welcome to LearnSphere</Typography>
        <Typography variant="h5" paragraph>
          Your journey to knowledge and skill starts here. Explore our diverse range of courses and take your learning to the next level.
        </Typography>
        <Button variant="contained" color="primary" size="large" href="/courses">Get Started</Button>
      </Box>
      <Box sx={{ marginY: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>What Our Users Say</Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 80, height: 80, margin: '0 auto', marginBottom: 2, border: '3px solid #3f51b5' }}
                  />
                  <Typography variant="h6" gutterBottom>{testimonial.name}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>{testimonial.role}</Typography>
                  <Typography variant="body1">{testimonial.text}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;

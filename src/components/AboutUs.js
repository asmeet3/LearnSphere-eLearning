import React from 'react';
import { Container, Typography, Box, Avatar, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion'; 

const teamMembers = [
  { name: 'Alice Johnson', role: 'CEO', image: 'alice.jpg' },
  { name: 'Bob Smith', role: 'CTO', image: 'bob.jpg' },
  { name: 'Carol Davis', role: 'CMO', image: 'carol.jpg' },
];

const AboutUs = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h2" gutterBottom>About Us</Typography>
        <Typography variant="body1" paragraph>
          We are a dedicated team of educators and technologists committed to providing high-quality online education.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to make learning accessible and enjoyable for everyone, everywhere.
        </Typography>
      </Box>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Our Team</Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 100, height: 100, margin: '0 auto', marginBottom: 2 }}
                />
                <Typography variant="h6" gutterBottom>{member.name}</Typography>
                <Typography variant="body1" color="text.secondary">{member.role}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutUs;

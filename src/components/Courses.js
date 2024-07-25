import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

import reactCoursePNG from '../assets/react-course.PNG';
import jsCourseJPG from '../assets/js-course.JPG';
import pythonCourseJPG from '../assets/python-course.JPG';
import marketingCourseJPG from '../assets/marketing-course.JPG';
import mlCourseJPG from '../assets/ml-course.JPG';
import projectCourseWEBP from '../assets/project-course.WEBP';
import awsCourseJPG from '../assets/aws-course.JPG';
import tableauCourseWEBP from '../assets/tableau-course.WEBP';
import cybersecurityJPG from '../assets/cybersecurity-course.JPG'; 

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn the basics of React', image: reactCoursePNG, url: 'https://v2.scrimba.com/learn-react-c0e' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript', image: jsCourseJPG, url: 'https://learnjavascript.online/app.html' },
  { id: 3, title: 'Python for Data Science', description: 'Explore Python and its applications in data science', image: pythonCourseJPG, url: 'https://cognitiveclass.ai/courses/python-for-data-science' },
  { id: 4, title: 'UI/UX Design Principles', description: 'Understand the fundamentals of UI/UX design', image: marketingCourseJPG, url: 'https://cognitiveclass.ai/courses/python-for-data-science' }, // Update image path if needed
  { id: 5, title: 'Machine Learning Basics', description: 'Get started with machine learning concepts', image: mlCourseJPG, url: 'https://www.freecodecamp.org/learn/machine-learning-with-python/' },
  { id: 6, title: 'Digital Marketing', description: 'Learn strategies for effective digital marketing', image: marketingCourseJPG, url: 'https://www.oxfordhomestudy.com/courses/digital-marketing-certificate-programs-online/digital-marketing-short-course-online#' },
  { id: 7, title: 'Cloud Computing with AWS', description: 'Introduction to AWS cloud services', image: awsCourseJPG, url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-foundations' },
  { id: 8, title: 'Cybersecurity Essentials', description: 'Basics of cybersecurity and best practices', image: cybersecurityJPG, url: 'https://www.classcentral.com/course/swayam-introduction-to-cyber-security-14116' }, // You might need to import this image as well
  { id: 9, title: 'Project Management', description: 'Learn project management methodologies', image: projectCourseWEBP, url: 'https://alison.com/course/diploma-in-project-management-revised-2017' },
  { id: 10, title: 'Data Visualization with Tableau', description: 'Visualize data using Tableau', image: tableauCourseWEBP, url: 'https://www.simplilearn.com/free-tableau-course-skillup' },
];

const Courses = () => {

  return (
    
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>Courses</Typography>
      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <CardMedia
                  component="img"
                  alt={course.title}
                  height="140"
                  image={course.image}
                />
                <CardContent>
                  <Typography variant="h5" component="div">{course.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{course.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={course.url} target="_blank" rel="noopener noreferrer">Get Started</Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses;

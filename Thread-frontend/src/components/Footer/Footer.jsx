import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'black', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        {/* Grid columns */}
        <Grid container spacing={30} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection title="Company" links={['About', 'Blog', 'Jobs', 'Press', 'Partners']} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection title="Solutions" links={['Marketing', 'Analytics', 'Commerce', 'Insights', 'Support']} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection title="Documentation" links={['Guides', 'API Status']} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection title="Legal" links={['Claim', 'Privacy', 'Terms']} />
          </Grid>
        </Grid>

        {/* Footer bottom center text */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" gutterBottom>
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Made with love by Me.
          </Typography>
          <Typography variant="body2">
            Icons made by{' '}
            <Link href="https://www.freepik.com" color="inherit" underline="hover" target="_blank" rel="noopener">
              Freepik
            </Link>{' '}
            from{' '}
            <Link href="https://www.flaticon.com" color="inherit" underline="hover" target="_blank" rel="noopener">
              www.flaticon.com
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

const FooterSection = ({ title, links }) => (
  <>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    {links.map((link, index) => (
      <Typography
        key={index}
        variant="body2"
        component={Link}
        href="#"
        color="inherit"
        underline="hover"
        sx={{ display: 'block', mb: 1 }}
      >
        {link}
      </Typography>
    ))}
  </>
);

export default Footer;




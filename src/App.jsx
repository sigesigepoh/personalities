import React, { useState } from 'react';
import { 
  Container, Typography, Box, Paper, Card, 
  CardMedia, CardContent, CardActions, Button, 
  Collapse, IconButton, Stack, CssBaseline,
  ThemeProvider, createTheme, Divider
} from '@mui/material';
import { NavigateNext, NavigateBefore, School, Person, Segment } from '@mui/icons-material';
import { personalities } from './personalities';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    background: { default: '#3b546d', paper: '#223447' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [index, setIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const currentPerson = personalities[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % personalities.length);
    setShowDescription(false);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + personalities.length) % personalities.length);
    setShowDescription(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh', 
          width: '100vw',
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          background: 'radial-gradient(circle, #25467c 0%, #0a1122 100%)',
          p: 3,
          boxSizing: 'border-box'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h3" component="h1" gutterBottom textAlign="center" 
            sx={{ 
              fontWeight: 800,
              mb: 4, 
              background: 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            Legendary Scientists
          </Typography>
          
          <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 3, border: '1px solid rgba(255,255,255,0.1)', bgcolor: 'rgba(255,255,255,0.05)' }}>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Person fontSize="small" color="primary" />
                <Typography variant="body1"><strong></strong> Aaron Enriquez</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <School fontSize="small" color="primary" />
                <Typography variant="body1"><strong></strong> C-PEITEL3</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Segment fontSize="small" color="primary" />
                <Typography variant="body1"><strong></strong> IT 3B</Typography>
              </Box>
            </Stack>
          </Paper>

          <Card sx={{ 
            borderRadius: 5, 
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden' 
          }}>
            {}
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="380"
                image={currentPerson.image}
                alt={currentPerson.name}
                sx={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)', 
                  '&:hover': {
                    transform: 'scale(1.1)', 
                  }
                }}
              />
              <Box sx={{ 
                position: 'absolute', bottom: 0, left: 0, right: 0, 
                height: '50%', background: 'linear-gradient(transparent, rgba(19,47,76,0.95))',
                pointerEvents: 'none' 
              }} />
            </Box>

            <CardContent sx={{ pt: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                {currentPerson.name}
              </Typography>
              <Divider sx={{ mb: 2, opacity: 0.2 }} />
              
              <Collapse in={showDescription}>
                <Typography variant="body1" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
                  {currentPerson.description}
                </Typography>
              </Collapse>
            </CardContent>

            <CardActions sx={{ justifyContent: 'space-between', px: 3, pb: 3 }}>
              <Button 
                variant="contained" 
                disableElevation
                onClick={() => setShowDescription(!showDescription)}
                sx={{ borderRadius: 10, px: 3 }}
              >
                {showDescription ? "Show Less" : "Read Full Bio"}
              </Button>

              <Stack direction="row" spacing={2}>
                <IconButton onClick={handlePrev} sx={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <NavigateBefore />
                </IconButton>
                <IconButton onClick={handleNext} sx={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <NavigateNext />
                </IconButton>
              </Stack>
            </CardActions>
          </Card>

          <Typography variant="caption" sx={{ display: 'block', mt: 3, textAlign: 'center', color: 'grey.600' }}>
            {index + 1} of {personalities.length} 
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
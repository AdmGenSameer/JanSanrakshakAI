import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Box, Paper } from '@mui/material';
import { AppProvider } from './context/AppContext';
import TabsLayout from './components/TabsLayout';
import SaveAssessmentButton from './components/SaveAssessmentButton';
import FeedbackForm from './components/FeedbackForm';
import GoogleEarthLink from './components/GoogleEarthLink';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {/* Header */}
          <Paper 
            elevation={2} 
            sx={{ 
              p: 4, 
              mb: 4, 
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              color: 'white',
              borderRadius: 3
            }}
          >
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                textAlign: 'center',
                mb: 2
              }}
            >
              🏠 JanSanrakshak AI
            </Typography>
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                textAlign: 'center',
                fontWeight: 400,
                opacity: 0.9
              }}
            >
              Intelligent Rooftop Rainwater Harvesting Assessment
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                textAlign: 'center',
                mt: 2,
                opacity: 0.8,
                maxWidth: 800,
                mx: 'auto'
              }}
            >
              Evaluate your property's potential for sustainable water management with AI-powered 
              analysis and personalized recommendations for optimal rainwater harvesting systems.
            </Typography>
          </Paper>

          {/* Main Content */}
          <TabsLayout />

          {/* Action Buttons */}
          <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            <SaveAssessmentButton />
            <GoogleEarthLink />
            <FeedbackForm />
          </Box>

          {/* Footer */}
          <Paper 
            elevation={1} 
            sx={{ 
              mt: 6, 
              p: 3, 
              textAlign: 'center',
              bgcolor: 'grey.100'
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © 2024 JanSanrakshak AI. Promoting water security through intelligent assessment tools.
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Data sources: IMD, CGWB, GSI | Built with React.js & Material-UI
            </Typography>
          </Paper>
        </Container>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;

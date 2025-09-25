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
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 4 } }}>
            {/* Header */}
            <Paper 
              elevation={4} 
              className="overflow-hidden"
              sx={{ 
                mb: { xs: 3, sm: 4 }, 
                borderRadius: 3,
                position: 'relative',
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDRzMS44IDQgNCA0IDQtMS44IDQtNHptMCAwTTUxIDUxYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAgME0xMiA2YzAtMi4yLTEuOC00LTQtNFM0IDMuOCA0IDZzMS44IDQgNCA0IDQtMS44IDQtNHptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
              </div>
              
              {/* Header Content with Water Animation */}
              <Box sx={{ 
                p: { xs: 3, sm: 4, md: 5 },
                background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="absolute bottom-0 left-0 w-full h-16 opacity-30">
                  <div className="absolute w-full h-full animate-pulse-slow" 
                       style={{
                         backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDE0NDAgMTIwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0NDAuMDAgNTEuMkMxMzMyLjE0IDM0LjEzMzMgMTI0Mi4xIDUxLjIgMTE2MS4wMCA1MS4yQzEwNzkuOSA1MS4yIDEwMTcuNjcgMjUuNiA5MzUuMTAwIDI1LjZDODUyLjUzMyAyNS42IDc4Ni44MzMgNjguMjY2NyA2OTguNTAwIDY4LjI2NjdDNjEwLjE2NyA2OC4yNjY3IDU2Mi4yMDAgMjUuNiA0NjMuNzAwIDI1LjZDMzY1LjIwMCAyNS42IDMxMC4yMDAgOTEuNzMzMyAyMzguMTAwIDkxLjczMzNDMTY2IDkxLjczMzMgOTUuNzczMyA3OS45IDAgNzkuOVYxMjBIMTQ0MFY1MS4yWiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')",
                         backgroundRepeat: "repeat-x",
                         backgroundPosition: "bottom",
                       }}
                  />
                </div>

                <div className="flex flex-col items-center relative z-10">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl md:text-5xl mr-2">💧</span>
                    <Typography 
                      variant="h3" 
                      component="h1"
                      className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                      sx={{ 
                        fontWeight: 800,
                        textAlign: 'center',
                      }}
                    >
                      JanSanrakshak AI
                    </Typography>
                  </div>
                  
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    className="text-lg md:text-xl lg:text-2xl"
                    sx={{ 
                      textAlign: 'center',
                      fontWeight: 500,
                      opacity: 0.9,
                      mb: 2,
                    }}
                  >
                    Intelligent Rooftop Rainwater Harvesting Assessment
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    className="text-sm md:text-base"
                    sx={{ 
                      textAlign: 'center',
                      opacity: 0.8,
                      maxWidth: 800,
                      mx: 'auto'
                    }}
                  >
                    Evaluate your property's potential for sustainable water management with AI-powered 
                    analysis and personalized recommendations for optimal rainwater harvesting systems.
                  </Typography>
                </div>
              </Box>
            </Paper>

          {/* Main Content */}
          <Paper 
            elevation={2} 
            className="shadow-lg transform transition-transform hover:scale-[1.01]"
            sx={{ 
              borderRadius: 3,
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <TabsLayout />
          </Paper>

          {/* Action Buttons */}
          <Box sx={{ 
            mt: { xs: 3, sm: 4 }, 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            flexWrap: 'wrap', 
            gap: 2, 
            justifyContent: 'center' 
          }}>
            <SaveAssessmentButton />
            <GoogleEarthLink />
            <FeedbackForm />
          </Box>

          {/* Footer */}
          <Paper 
            elevation={1} 
            className="bg-gradient-to-r from-gray-50 to-blue-50"
            sx={{ 
              mt: { xs: 4, sm: 6 }, 
              p: { xs: 2, sm: 3 }, 
              textAlign: 'center',
              borderRadius: 2,
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              <div className="flex items-center justify-center">
                <span className="text-xl mr-2">💧</span>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  JanSanrakshak AI
                </Typography>
              </div>
              
              <Typography variant="body2" color="text.secondary">
                © 2024 Promoting water security through intelligent assessment tools
              </Typography>
              
              <Typography variant="caption" color="text.secondary" className="text-xs">
                IMD • CGWB • GSI
              </Typography>
            </div>
          </Paper>
          </Container>
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;

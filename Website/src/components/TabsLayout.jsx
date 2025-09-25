import React, { useState } from 'react';
import { Tabs, Tab, Box, Paper, Typography } from '@mui/material';
import {
  Home as HomeIcon,
  Lightbulb as LightbulbIcon,
  BarChart as BarChartIcon,
  Water as WaterIcon,
  Info as InfoIcon
} from '@mui/icons-material';

import AssessmentTab from './tabs/AssessmentTab';
import RecommendationsTab from './tabs/RecommendationsTab';
import ResultsTab from './tabs/ResultsTab';
import GroundwaterTab from './tabs/GroundwaterTab';
import AboutTab from './tabs/AboutTab';
import { useAppContext } from '../context/AppContext';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </Box>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const TabsLayout = () => {
  const [value, setValue] = useState(0);
  const { state } = useAppContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: 'Assessment',
      icon: <HomeIcon />,
      component: <AssessmentTab />,
      disabled: false
    },
    {
      label: 'Recommendations',
      icon: <LightbulbIcon />,
      component: <RecommendationsTab />,
      disabled: !state.calculation_done
    },
    {
      label: 'Results',
      icon: <BarChartIcon />,
      component: <ResultsTab />,
      disabled: !state.calculation_done
    },
    {
      label: 'Groundwater Info',
      icon: <WaterIcon />,
      component: <GroundwaterTab />,
      disabled: !state.calculation_done
    },
    {
      label: 'About',
      icon: <InfoIcon />,
      component: <AboutTab />,
      disabled: false
    }
  ];

  return (
    <Paper elevation={2}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              minWidth: 120,
              fontSize: '0.95rem',
              fontWeight: 500
            }
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              icon={tab.icon}
              iconPosition="start"
              disabled={tab.disabled}
              {...a11yProps(index)}
              sx={{
                '&.Mui-disabled': {
                  opacity: 0.4
                }
              }}
            />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.disabled && state.calculation_done === false ? (
            <Box 
              sx={{ 
                textAlign: 'center', 
                py: 8,
                color: 'text.secondary'
              }}
            >
              <Typography variant="h6" gutterBottom>
                Complete Assessment First
              </Typography>
              <Typography variant="body2">
                Please complete the assessment form to view this section.
              </Typography>
            </Box>
          ) : (
            tab.component
          )}
        </TabPanel>
      ))}
    </Paper>
  );
};

export default TabsLayout;

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { formatNumber, formatCurrency } from '../utils/calculations';

const MetricsCard = ({ 
  title, 
  value, 
  unit, 
  color = 'primary', 
  icon,
  subtitle,
  description
}) => {
  const formatValue = () => {
    if (unit === '₹' || unit === 'INR') {
      return formatCurrency(value);
    } else if (typeof value === 'number') {
      return formatNumber(value, unit === '%' ? 1 : 0);
    }
    return value;
  };

  return (
    <Card 
      elevation={3} 
      sx={{ 
        height: '100%',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" mb={2}>
          {icon && (
            <Box sx={{ mr: 2, color: `${color}.main` }}>
              {icon}
            </Box>
          )}
          <Typography 
            variant="h6" 
            color={color}
            sx={{ fontWeight: 600 }}
          >
            {title}
          </Typography>
        </Box>
        
        <Typography 
          variant="h3" 
          color="text.primary"
          sx={{ 
            fontWeight: 700,
            mb: 1,
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
          }}
        >
          {formatValue()}
          {unit && unit !== '₹' && unit !== 'INR' && (
            <Typography 
              component="span" 
              variant="h5" 
              color="text.secondary"
              sx={{ ml: 0.5 }}
            >
              {unit}
            </Typography>
          )}
        </Typography>

        {subtitle && (
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {subtitle}
          </Typography>
        )}

        {description && (
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ fontSize: '0.85rem' }}
          >
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricsCard;

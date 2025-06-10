import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Paper,
    useTheme,
    alpha
} from '@mui/material';
import {
    Home as HomeIcon,
    Search as SearchIcon,
    ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    const theme = useTheme();

    //   const handleSearch = () => {
    //     // Navigate to search page or trigger search
    //     window.location.href = '/search';
    //   };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    minHeight: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    py: 4
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        p: 6,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        maxWidth: 600,
                        width: '100%'
                    }}
                >
                    {/* Large 404 Number */}
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: '6rem', sm: '8rem', md: '10rem' },
                            fontWeight: 'bold',
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 2,
                            lineHeight: 1
                        }}
                    >
                        404
                    </Typography>

                    {/* Main Heading */}
                    <Typography
                        variant="h4"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 2
                        }}
                    >
                        Page Not Found
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            mb: 4,
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            maxWidth: 400,
                            mx: 'auto'
                        }}
                    >
                        The page you're looking for doesn't exist or has been moved.
                        Don't worry, let's get you back on track!
                    </Typography>

                    {/* Action Buttons */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 4
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<HomeIcon />}
                            onClick={()=>navigate('/')}
                            sx={{
                                px: 3,
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: 'none',
                                fontSize: '1rem',
                                minWidth: { xs: '100%', sm: 'auto' }
                            }}
                        >
                            Go Home
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => window.history.back()}
                        sx={{
                            px: 3,
                            py: 1.5,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontSize: '1rem',
                            minWidth: { xs: '100%', sm: 'auto' }
                        }}
                        >
                        Go Back
                    </Button>

                    {/* <Button
              variant="text"
              size="large"
              startIcon={<SearchIcon />}
              onClick={handleSearch}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                minWidth: { xs: '100%', sm: 'auto' },
                color: theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08)
                }
              }}
            >
              Search Blog
            </Button> */}
            </Box>
        </Paper>

                {/* Additional Help Text */ }
    <Typography
        variant="body2"
        color="text.secondary"
        sx={{
            mt: 4,
            fontSize: '0.9rem'
        }}
    >
        {/* If you think this is a mistake, please{' '} */}
        {/* <Button
            variant="text"
            size="small"
            sx={{
              textTransform: 'none',
              p: 0,
              minWidth: 'auto',
              textDecoration: 'underline'
            }}
            onClick={() => window.location.href = '/contact'}
          >
            contact us
          </Button> */}
    </Typography>
            </Box >
        </Container >
    );
};

export default ErrorPage;
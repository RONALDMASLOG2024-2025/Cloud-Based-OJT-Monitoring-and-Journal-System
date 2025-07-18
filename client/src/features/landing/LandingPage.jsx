import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    IconButton,
    Toolbar,
    Typography,
    Paper,
} from '@mui/material';
import {
    AccountCircle,
    Handshake,
    School,
    Menu as MenuIcon,
    EditNote,
    BarChart,
} from '@mui/icons-material';

// --- A helper for the dummy image placeholders ---
const DummyImage = () => (
    <Box sx={{
        width: '100%',
        height: 200,
        backgroundColor: 'grey.300',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Typography variant="caption" color="grey.600">Image Placeholder</Typography>
    </Box>
);

// --- Main Landing Page Component ---
export default function CollaborativeLandingPage() {
    const navigate = useNavigate();
    const primaryColor = '#D80073'; // Your preferred pink/magenta color

    return (
        <Box sx={{ backgroundColor: '#fff' }}>
            {/* --- Header --- */}
            <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'text.primary', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <Toolbar>
                    <School sx={{ color: primaryColor, mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        UIC OJT PORTFOLIO
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: primaryColor, '&:hover': { bgcolor: '#b71c62' } }}
                            onClick={() => navigate('/login')}
                            startIcon={<AccountCircle />}
                        >
                            Sign In
                        </Button>
                    </Box>
                    <IconButton sx={{ display: { md: 'none' } }} color="inherit">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <main>
                {/* --- Hero Section: The Central Hub --- */}
                <Box sx={{
                    bgcolor: '#f9fafb',
                    py: { xs: 8, md: 12 },
                    textAlign: 'center'
                }}>
                    <Container maxWidth="md">
                        <Typography
                            component="h1"
                            variant="h2"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: '#111827' }}
                        >
                            Your Central Hub for OJT Success
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ my: 3, maxWidth: '700px', mx: 'auto' }}
                        >
                            Bringing students, coordinators, and companies together.
                            Track your progress, build your portfolio, and launch your career.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: primaryColor,
                                '&:hover': { bgcolor: '#b71c62' },
                                py: 1.5,
                                px: 5,
                                fontSize: '1.1rem',
                                borderRadius: '50px'
                            }}
                            onClick={() => navigate('/login')}
                        >
                            Get Started
                        </Button>
                    </Container>
                </Box>

                {/* --- Features Section: Radiating from the center --- */}
                <Container maxWidth="lg" sx={{ py: 8 }}>
                    <Grid container spacing={4} justifyContent="center">
                        {/* Feature 1 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card elevation={0} sx={{ textAlign: 'center', p: 2 }}>
                                <EditNote sx={{ fontSize: 48, color: primaryColor }} />
                                <Typography variant="h6" fontWeight="bold" mt={2}>Daily Journaling</Typography>
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    Easily log your daily activities, learnings, and reflections.
                                </Typography>
                            </Card>
                        </Grid>
                        {/* Feature 2 */}
                        <Grid item xs={12} sm={6} md={4}>
                             <Card elevation={0} sx={{ textAlign: 'center', p: 2 }}>
                                <BarChart sx={{ fontSize: 48, color: primaryColor }} />
                                <Typography variant="h6" fontWeight="bold" mt={2}>Track Your Progress</Typography>
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    Monitor your completed hours and get performance evaluations.
                                </Typography>
                            </Card>
                        </Grid>
                        {/* Feature 3 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card elevation={0} sx={{ textAlign: 'center', p: 2 }}>
                                <Handshake sx={{ fontSize: 48, color: primaryColor }} />
                                <Typography variant="h6" fontWeight="bold" mt={2}>Employer Connection</Typography>
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    Seamless collaboration between you and your company supervisor.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>

                {/* --- How It Works Section --- */}
                <Box sx={{ bgcolor: '#f9fafb', py: 8 }}>
                    <Container maxWidth="lg">
                        <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
                            A Collaborative Process
                        </Typography>
                        <Grid container spacing={4} mt={4} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" fontWeight="600" gutterBottom>Build Your Professional Story</Typography>
                                <Typography color="text.secondary">
                                    This platform is more than just a requirement—it's the first step in building your professional narrative. From the first day of your OJT to the last, every entry and evaluation helps create a comprehensive portfolio you can share with future employers. Our goal is to provide a single, unified space for this important journey.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {/* This is a placeholder for an image */}
                                <DummyImage />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </main>

            {/* --- Footer --- */}
            <Box component="footer" sx={{ bgcolor: '#333', color: 'white', py: 6 }}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                       OJT Portfolio System
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="#ccc" component="p">
                       University of the Immaculate Conception
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}
import { Box, Button, TextField, Typography, Link } from '@mui/material'
import { useState } from 'react'
import { login, auth } from '../../config/Firebase'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const loginHandler = async () => {
        try {
            const email = form.email
            const password = form.password
            await login(email, password)
            console.log('form' , form)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'white',
                p: 3,
                mt: 10
            }}
        >
            <Box
                sx={{
                    bgcolor: 'white',
                    p: 4,
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <Typography variant="h5" fontWeight={600} textAlign="center" mb={2}>
                    Log In
                </Typography>

                <TextField
                    type="email"
                    label="Email Address"
                    variant="outlined"
                    required
                    fullWidth
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    required
                    fullWidth
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <Button
                    variant="contained"
                    size="large"
                    sx={{ mt: 1 }}
                    onClick={loginHandler}
                >
                    Sign In
                </Button>
                <Typography
                    sx={{
                        mt: 2,
                        fontSize: '0.9rem',
                        textAlign: 'center',
                    }}
                >
                    If don't have account?{' '}
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => navigate('/signup')}
                        sx={{ fontWeight: 600 }}
                    >
                        Signup
                    </Link>
                </Typography>
            </Box>
        </Box>
    )
}

export default LoginForm

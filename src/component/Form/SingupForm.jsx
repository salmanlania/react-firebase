import { Box, Button, TextField, Typography, Link } from '@mui/material'
import { useState } from 'react'
import { login, auth } from '../../config/Firebase'

const SingupForm = () => {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })

    const signupHandler = async () => {
        try {
            const email = form.email
            const password = form.password
            await login(email, password)
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
                bgcolor: '#f5f7fa',
                p: 3,
            }}
        >
            <Box
                sx={{
                    bgcolor: 'white',
                    p: 4,
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    width: 360,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <Typography variant="h5" fontWeight={600} textAlign="center" mb={2}>
                    Create Account
                </Typography>

                <TextField
                    type="text"
                    label="First Name"
                    variant="outlined"
                    required
                    fullWidth
                    value={form.first_name}
                    onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                />
                <TextField
                    type="text"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    value={form.last_name}
                    onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                />
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
                    onClick={signupHandler}
                >
                    Sign Up
                </Button>
                <Typography
                    sx={{
                        mt: 2,
                        fontSize: '0.9rem',
                        textAlign: 'center',
                    }}
                >
                    Already have an account?{' '}
                    <Link
                        component="button"
                        variant="body2"
                        // onClick={loginHandler}
                        sx={{ fontWeight: 600 }}
                    >
                        Login
                    </Link>
                </Typography>
            </Box>
        </Box>
    )
}

export default SingupForm

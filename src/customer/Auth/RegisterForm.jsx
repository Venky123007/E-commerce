import { Button, Grid, IconButton, Input, InputAdornment, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getUser, register } from '../../State/Auth/Action';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const RegisterForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store)

    useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt))
        }
        
    },[jwt,auth.jwt])

    


    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const userData = {
            firstName : data.get("firstName"),
            lastName : data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(register(userData))
        console.log("userDate", userData);
    }

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
 
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
 
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
 
    const handlePasswordChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value,
        });
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                    required
                    id='firstName'
                    name='firstName'
                    label='First Name'
                    fullWidth
                    autoComplete='given-name'
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField 
                    required
                    id='lastName'
                    name='lastName'
                    label='Last Name'
                    fullWidth
                    autoComplete='given-name'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                    required
                    id='email'
                    name='email'
                    label='Email'
                    fullWidth
                    autoComplete='email'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                    required
                    id='password'
                    name='password'
                    label='Password'
                    fullWidth
                    autoComplete='password'
                    type={
                        values.showPassword
                            ? "text"
                            : "password"
                    }
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                    className='bg-[#9155FD] w-full'
                    type='submit'
                    variant='contained'
                    size='large'
                    sx={{padding:".8rem 0", bgcolor:"#9155FD"}}>Register</Button>
                </Grid>
            </Grid>
        </form>

        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p> if you already have an account...?</p>
                <Button onClick={()=>navigate("/login")} className='ml-5 mt-20' sx={{paddingTop:".6rem",marginLeft:".6rem"}} size='small'>Login</Button>
            </div>
        </div>
    </div>
  )
}

export default RegisterForm
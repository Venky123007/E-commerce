import { Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getUser, login } from '../../State/Auth/Action'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(login(userData))
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
                    sx={{padding:".8rem 0", bgcolor:"#9155FD"}}>Login</Button>
                </Grid>
            </Grid>
        </form>


        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p> if you don't have an account...?</p>
                <Button onClick={()=>navigate("/register")} className='ml-7' sx={{paddingTop:".6rem",marginLeft:".6rem"}} size='small'>Register</Button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm
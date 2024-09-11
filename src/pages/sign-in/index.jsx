import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { ToastContainer  } from 'react-toastify';
import Notification from "../../utils/Notification"
  
const SignIn = () => {
    const [form,setForm] = useState({});
    const navigate = useNavigate()
    const handleChange = (event) => {
const {name,value} = event.target
setForm({...form, [name]:value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        if(form.username === "admin" ){
            Notification({title : "Success", type: "success"})
           setTimeout(() => {
            navigate("/admin-layout")
           },2000)
        }else if(form.username === 'student'){
            Notification({title : "Success", type: "success"})
           setTimeout(() => {
            navigate("/student-layout")
           },2000)
        }else{
            Notification({title: "Xatolik yuz berdi", type:"error"})
        }
    }
   
    return (
      <div className='container'>
         <ToastContainer />
        <div className='row mt-5'>
<div className='col-md-6 offset-3'>
<div className='card'>
<div className='card-header'>
<Typography variant="h4" >
        Sign In
      </Typography>
</div>
<div className='card-body'>
    <form  onSubmit={handleSubmit} id='mui'>
    <TextField fullWidth label="fullWidth" name='username' onChange={handleChange} />
    <TextField fullWidth sx={{marginTop:"10px"}} label="password" type='password' name='password' onChange={handleChange} />
    </form>
</div>
<div className='card-footer'>
<Button variant='contained' color="primary" type='submit' form="mui">save</Button>
</div>
</div>
</div>
        </div>
           
       
      </div>
    );
  }
  
  export default SignIn;
  
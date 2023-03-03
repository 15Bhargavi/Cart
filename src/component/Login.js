import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import {Grid,Paper,Avatar, TextField,Box, Button} from '@mui/material'
//import AccountBoxIcon from '@mui/icons-material/AccountBox';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Register from './Register';
const Login=()=> {
  const history = useNavigate();
    const paperStyle={padding:20, height:'70vh',width:400 ,margin:'20px auto'}
  const avatraStyle={backgroundColor:'rgb(165 135 192)'}
  const [input, setInput] = useState({
  
    userId: "",
    password: "",
  
  });
const [data,setData]= useState([]); 
  const getdata = (e) => {
    
    const { value, name } = e.target;
   
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };
  const GetData = (e) => {
    e.preventDefault();

const getuserArr=localStorage.getItem("user");
console.log(getuserArr);

    const { userId, password} = input;

   if (userId === "") {
      alert("Please check UserId");
    } else if (password === "") {
      alert("Please check Password");
    }else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
            return el.userId ===userId && el.password === password
        });

        if (userlogin.length === 0) {
            alert("invalid details")
        } else {
            console.log("user login succesfulyy");

            localStorage.setItem("user_login", JSON.stringify(userlogin))

            history("/Home")
        }
    }
      

     
    
    

  }


  };
                                                                                             
  return (
    <Grid>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m:0.3},
      }}
     
    >
        <Paper elevation={10} style={paperStyle}>
          <Grid align ='center'> 
            <Avatar style={avatraStyle}><VpnKeyIcon /></Avatar> 
            <h2>Log In</h2>
            </Grid>
            <TextField name="userId" id="standard-size-small"  onChange={getdata} size="small" label="User Id" fullWidth  required  helperText="Please Enter UserId "/><br></br> 
           <TextField  name="password" id="standard-size-small" onChange={getdata}  size="small" label="Password" type="password" fullWidth helperText="Please Enter 8digit password" required />
           
            <br></br>
            <Checkbox
            name="checkedB"
            color="primary" 
                />
           I'm Not Robot
           <br></br>
           <div align='center'>
           <Button variant='contained' type="submit" onClick={GetData}  >LOG IN</Button>
           </div>
           <br></br>

<div >
  
Do Not Have Account?
<Link href="Register" underline="none" onClick={Register}>
        {'Register'}
      </Link>
 
</div>
        </Paper>
      </Box>
    </Grid>
  )
}
export default Login;

// import React, { useState } from "react";

// import Link from "@mui/material/Link";
// import { useNavigate } from 'react-router-dom'
// import { Grid, Paper, Avatar, TextField,Button } from "@mui/material";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Login from "./Login";
// import Box from '@mui/material/Box';

// const Register = () => {
//   const history = useNavigate();
//   const paperStyle = {
//     padding: 20,
//     height: "80vh",
//     width: 400,
//     margin: "20px auto",
//   };
//   const avatraStyle = { backgroundColor: "rgb(165 135 192)" };
//   const [input, setInput] = useState({
//     name: "",
//     userId: "",
//     password: "",
//     cpassword: "",
//     contact: "",
//   });
//   const [data,setData]= useState([]);
//   const getdata = (e) => {
    
//     const { value, name } = e.target;
//     console.log(value, name);
//     console.log(input);
//     setInput(() => {
//       return {
//         ...input,
//         [name]: value,
//       };
//     });
//   };
//   const GetData = (e) => {
//     e.preventDefault();
//     const { name, userId, password, cpassword, contact } = input;

//     if (name === "") {
//       alert("Please check Name");
//     } else if (userId === "") {
//       alert("Please check UserId");
//     } else if (password === "") {
//       alert("Please check Password");
//     } else if (cpassword === "" || cpassword !== password) {
//       alert("Please check Password");
//     } else if (contact === "" || contact.length !== 10) {
//       alert("Please check contact ");
//     }else{
      
//       alert("Register Successfully")
//     localStorage.setItem("user",JSON.stringify([...data,input]));
//     history("/Login")
//   }



//   };

//   return (
//     <Grid>
//       <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m:0.3},
//       }}
     
//     >
//       <Paper elevation={10} style={paperStyle}>
//         <Grid align="center">
//           <Avatar style={avatraStyle}>
//             <AccountBoxIcon />
//           </Avatar>
//           <h2>Registration</h2>
//         </Grid>
//         <TextField
//           id="standard-size-small"
//           name="name"
//           size="small"
//           label="Full Name"
//           onChange={getdata}
//           fullWidth
//         />
        
//         <TextField
//          id="standard-size-small"
//           name="userId"
//           size="small"
//           onChange={getdata}
//           label="User Id"

//           fullWidth
//           required
//         />
        
//         <TextField
//           id="standard-size-small"
//           name="password"
//           size="small"
//           label="Password"
//           onChange={getdata}
//           type="password"
//           helperText="Please Enter 8digit password "
//           fullWidth
//           required
//         />
//         <TextField
//          id="standard-size-small"
//           name="cpassword"
//           size="small"
//           label="Confirm Password"
//           type="password"
//           onChange={getdata}
//           helperText="Please Enter same Password"
//           fullWidth
//           required
//         />
//         <TextField
//           type="number"
//           name="contact"
//           size="small"
//           id="standard-size-small"
//           label="Contact"
//           onChange={getdata}
//           fullWidth
//         />
//         <br></br>
//         <br></br>
//         <div>
//           Gender:
//           <RadioGroup
//             row
//             aria-labelledby="demo-row-radio-buttons-group-label"
//             name="row-radio-buttons-group"
//           >
//             <FormControlLabel
//               value="female"
//               control={<Radio />}
//               label="Female"
//             />
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//           </RadioGroup>
//         </div>

//         <div className="f1" align="center" color="blue">
//           <Button type="submit" onClick={GetData} variant="contained">
//             Submit
//           </Button> 
          
//         </div>
//         <div>
//           Already having an Account?
//           <Link href="Login" underline="none" onClick={Login}>
//             {"Login"}
//           </Link>
//         </div>
//       </Paper>
//       </Box>
//     </Grid>
//   );
// };
// export default Register;



import React from 'react'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useForm } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
     {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
    <form onSubmit={handleSubmit(onSubmit)}>
       {/* register your input into the hook by invoking the "register" function */}
      
  <br></br>
      <TextField
          type="Text"
          size="small"
          id="standard-size-small"
          label="Name"  {...register("name")} />
      <br></br>
      
      
      <TextField
          type="text"
          
          size="small"
          id="standard-size-small"
          label="UserId/Email"{...register("example")} />
      <br></br>
  
      <TextField
          type="number"
          
          size="small"
          id="standard-size-small"
          label="Contact" {...register("contact")} />
      <br></br>
    
      {/* include validation with required or other standard HTML validation rules */}
      
      <TextField
          type="password"
       
          size="small"
          id="standard-size-small"
          label="Password" {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <br></br>
      <TextField
          type="password"
        
          size="small"
          id="standard-size-small"
          label="Confirm Password"  {...register("cpassword")} />
      <br></br>
      <div>Gender:</div><RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup><br></br>
      
      <input type="submit" />
    </form>

    </>
  )
}

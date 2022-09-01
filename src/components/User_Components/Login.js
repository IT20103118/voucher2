import axios from "axios";
import React, { useState } from "react";
import Button from '@material-ui/core/Button';

function Login() {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const onLog = (e) => {
      e.preventDefault();
      const userdata = {
        username,
        password,
      };
      // console.log(userdata);
  
      axios
        .post("http://localhost:8080/api/user/login", userdata)
        .then((res) => {
            console.log(res.data);
          if (res.data.success) {
            alert("login Ok");
            
             window.localStorage.setItem("Authorization", res.data.token);
             window.location = "/user/profile";
           
          } else {
            alert("invalid login");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };

    return(
        <div class="row d-flex align-items-center justify-content-center"><br/><br/>
        <div align="center">
         <div style={{width: 1000,background: "#F5F5F5",height:520,backgroundSize:"1500px "}} > 
           <div class="card-body" >  
             <form action="" method="post" name="form" onSubmit={onLog}>
                <div style={{display:'flex'}}>
                                   
                  <div class="row g-0" style={{flex:1}}><br/><br/><br/><br/><br/><br/><br/><br/>
                    <img src="https://tejasconsultancy.co.in/login/login-form-08/images/login-illus-1.svg" style={{objectFit:'cover'}}></img>
                    <br/><br/><br/><br/><br/>    
                  </div>
                 
                  <div class="col-xl-10" style={{flex:1}}><br/>
                    <div class="form-outline mb-5" style={{fontFamily:"times new roman"}}>
                        <h3 style={{fontFamily:"times new roman", marginRight:"50px"}}>&emsp;<b><u>Register&nbsp;User</u></b></h3><br/>
                             
                              <div style={{display:"flex" , alignItems:"center"}}>
                                 <div style={{minWidth :"165px",maxWidth:"100px"}}>
                                  Username 
                                    </div>
                                      <input type="text" class="form-control"  
                                    name="course_name" placeholder='Enter course name'
                                    onChange={(e) => { setUsername(e.target.value) }}/><br/><br/>
                              </div><br/><br/>
                 
                              <div style={{display:"flex" , alignItems:"center"}}>
                                <div style={{minWidth :"165px",maxWidth:"100px"}} >
                                   Password 
                                </div>
                                   <input type="text"   class="form-control" 
                                    name="course_code" placeholder='Enter course code'
                                    onChange={(e) => { setPassword(e.target.value) }}/><br/><br/>
                              </div><br/><br/>
                              <Button variant="contained" className="w-10" style={{background: "#8BC0FF", width: 23+"%",color:"BLACK",borderRadius: 20}}
                                    disableElevation type="submit" >REGISTER</Button>&nbsp; &nbsp; 
                 
                                
                    </div> <br/> <br/>
                  </div>
                  
                </div>
             </form>
           </div>
         </div>
         <br/><br/>
       </div>
       </div>


       
    );
}

export default Login;
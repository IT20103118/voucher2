import React, { useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';


export default function Signup() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [usertype, setUsertype] = useState("");
  const [pwd1, setPassword1] = useState("");
  const [pwd2, setPassword2] = useState("");
  const [status, setStatus] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    let new_user = {
      fName: fName,
      lName: lName,
      gender: gender,
      mobile: mobile,
      username: username,
      usertype: usertype,
      password: pwd1,
      status: status,
    };

    if (pwd1 === pwd2) {
      axios
        .post("http://localhost:8080/api/user", new_user)
        .then(() => {
          alert("Registration Success");
          window.location = "/user/login";
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Password mismatch");
    }
  };


  return (

       <div class="row d-flex align-items-center justify-content-center"><br/><br/>
        <div align="center">
         <div style={{width: 1000,background: "#F5F5F5",height:620,backgroundSize:"1500px "}} > 
           <div class="card-body" >  
             <form action="" method="post" name="form" onSubmit={sendData}>
                <div style={{display:'flex'}}>
                                   
                  <div class="row g-0" style={{flex:1}}><br/><br/><br/><br/><br/><br/><br/><br/>
                    <img src="https://tejasconsultancy.co.in/login/login-form-08/images/login-illus-1.svg" style={{objectFit:'cover'}}></img>
                    <br/><br/><br/><br/><br/>    
                  </div>
                 
                  <div class="col-xl-10" style={{flex:1}}><br/>
                    <div class="form-outline mb-2" style={{fontFamily:"times new roman"}}>
                        <h3 style={{fontFamily:"times new roman", marginRight:"50px"}}>&emsp;<b><u>Register&nbsp;User</u></b></h3><br/>
                             
                              <div style={{display:"flex" , alignItems:"center"}}>
                                 <div style={{minWidth :"165px",maxWidth:"100px"}}>
                                   1. First Name  
                                    </div>
                                      <input type="text" class="form-control"  
                                    name="course_name" placeholder='Enter course name'
                                    onChange={(e) => { setFName(e.target.value) }}/><br/><br/>
                              </div>
                 
                              <div style={{display:"flex" , alignItems:"center"}}>
                                <div style={{minWidth :"165px",maxWidth:"100px"}} >
                                   2. Course Code 
                                </div>
                                   <input type="text"   class="form-control" 
                                    name="course_code" placeholder='Enter course code'
                                    onChange={(e) => { setLName(e.target.value) }}/><br/><br/>
                              </div>
                 
                              <div style={{display:"flex" , alignItems:"center"}}>
                                 <div style={{minWidth :"165px",maxWidth:"100px"}} >
                                   3. Subtitle  
                                </div>
                                   <input type="text"  class="form-control" 
                                   name="subtitle" placeholder='Enter subtitle '
                                   onChange={(e) => { setGender(e.target.value) }}/><br/><br/>
                              </div>
                 
                              <div style={{display:"flex" , alignItems:"center"}}>
                                <div style={{minWidth :"165px",maxWidth:"100px"}} >
                                   4. Lecture Name 
                                </div>
                                  <input type="text"   class="form-control" 
                                   name="lecture_name" placeholder='Enter lecture name'
                                   onChange={(e) => { setMobile(e.target.value) }}/><br/><br/>
                              </div>
                 
                              <div style={{display:"flex" , alignItems:"center"}}>
                                <div style={{minWidth :"165px",maxWidth:"100px"}} >
                                    5. Description 
                                </div>
                                   <input type="text"  class="form-control" 
                                    name="description" placeholder='Enter description'
                                    onChange={(e) => { setUsername(e.target.value) }}/><br/><br/>
                              </div>
                 
                              <div style={{display:"flex" , alignItems:"center"}}>
                                <div style={{minWidth :"145px",maxWidth:"100px"}} >
                                    6. Course Added Date  
                                </div>
                                   <select style={{marginLeft:"20px"}} type="text" class="form-control" 
                                    name="courseadded_date" placeholder='Enter Course added Date'
                                    onChange={(e) => { setUsertype(e.target.value) }}>
                                         <option value="">Select Faculty</option>
                                         <option value="yes">yes</option>
                                         <option value="No">No</option>
                                        </select><br/><br/> 
                              </div><br/>
                              <div style={{display:"flex" , alignItems:"center"}}>
                                <div style={{minWidth :"145px",maxWidth:"100px"}} >
                                    6. Course Added Date  
                                </div>
                                   <input style={{marginLeft:"20px"}} type="text" class="form-control" 
                                    name="courseadded_date" placeholder='Enter Course added Date'
                                    onChange={(e) => { setStatus(e.target.value) }}/><br/><br/> 
                              </div><br/>
                              <div style={{display:"flex" , alignItems:"center"}}>
                                <div style={{minWidth :"145px",maxWidth:"100px"}} >
                                    6. Course Added Date  
                                </div>
                                   <input style={{marginLeft:"20px"}} type="text" class="form-control" 
                                    name="courseadded_date" placeholder='Enter Course added Date'
                                    onChange={(e) => { setPassword1(e.target.value) }}/><br/><br/> 
                              </div><br/>
                              <div style={{display:"flex" , alignItems:"center"}}>
                                <div style={{minWidth :"145px",maxWidth:"100px"}} >
                                    6. Course Added Date  
                                </div>
                                   <input style={{marginLeft:"20px"}} type="text" class="form-control" 
                                    name="courseadded_date" placeholder='Enter Course added Date'
                                    onChange={(e) => { setPassword2(e.target.value) }}/><br/><br/> 
                              </div><br/>
                 
                              
                 
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
     

                               
  )
}


//https://cdni.iconscout.com/illustration/premium/thumb/sign-up-page-1886582-1598253.png"
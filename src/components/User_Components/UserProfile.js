import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateUserProfile from './UserUpdate';


import CircularProgress from '@material-ui/core/CircularProgress';

const UserProfile = () => {
    const [fName, setFName] = useState(null)
    const [lName, setLName] = useState(null)
    const [gender, setGender] = useState(null)
    const [mobile, setMobile] = useState(null)
    const [username, setUsername] = useState(null)
    const [usertype, setUsertype] = useState(null)
    const [status, setStatus] = useState(null)
    const [password, setPassword] = useState(null)
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUserData = async () => {
            try {
               const config = {
                  headers: {
                     Authorization: localStorage.getItem("Authorization")
                  },
               }
               await axios.get("http://localhost:8080/api/user/profile", config)
                  .then((res) => {
                    setFName(res.data.User.fName)
                    setLName(res.data.User.lName)
                    setGender(res.data.User.gender)
                    setMobile(res.data.User.mobile)
                    setUsername(res.data.User.username)
                    setUsertype(res.data.User.usertype)
                    setStatus(res.data.User.status)
                    setPassword(res.data.User.password)
                    setLoading(false)
    console.log(getUserData);
            }).catch((error) => {
                console.log(error.message)
              })
         } catch (error) {
            console.log(error.message)
         }
      }
      getUserData()
    }, [])
   
    //update staff member account details
    const updateUserProfile = () => {
      setShow(true)
    }

    //logout the staff menber account
         const userLogout = () => {
            if (window.confirm('Are you sure you wish to logout from this Account?')) {
            localStorage.removeItem('Authorization')
          
            window.location = "/"
            }
          }

        //   if (loading) {
        //     return <div className="d-flex justify-content-center" style={{ paddingTop: 400 }}>
        //        <CircularProgress hidden={false} />
        //     </div>
        //  }


      return (
                          <div class="bod" style={{background:"#F8F8FF"}}  >
                       
                 <div class="container">
              <div class="main-body">
            <div class="row gutters-sm">
        <div class="col-md-4 mb-4">
            <div class="d-flex flex-column align-items-center text-center">
                <div class="mt-3">
                  
      </div>
           </div>
               </div>
                   <div class="col-md-8">
                       <div class="card-body">
                           <div class="row">
                              <div class="col-sm-3">
                           <h6 class="mb-0 "><b>First Name</b></h6>
                       </div>
                   <div class="col-sm-9 text-secondary" >
                {fName}
            </div>
                </div>
                    <hr/>
                       <div class="row">
                          <div class="col-sm-3">
                             <h6 class="mb-0"><b>Last Name</b></h6>
                         </div>
                     <div class="col-sm-9 text-secondary">
                  {lName}
               </div>
           </div>
               <hr/>
                    <div class="row">
                       <div class="col-sm-3">
                           <h6 class="mb-0"><b>Gender</b></h6>
                              </div>
                         <div class="col-sm-9 text-secondary">
                     {gender}
                 </div>
              </div>
                    <hr/>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0"><b>Mobile</b></h6>
                                   </div>
                               <div class="col-sm-9 text-secondary">
                            {mobile}
                         </div>
                    </div>
                 <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0"><b>Username</b></h6>
                           </div>
                              <div class="col-sm-9 text-secondary">
                                {username}
                              </div>
                           </div>
                        <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0"><b>UserType</b></h6>
                           </div>
                              <div class="col-sm-9 text-secondary">
                              {usertype}
                          </div>
                      </div>
                  <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                           <h6 class="mb-0"><b>Status</b></h6>
                              </div>
                                 <div class="col-sm-9 text-secondary">
                                    {status}
                                </div>
                             </div>
                          <hr/> 
                    <div class="row">
                        <div class="col-sm-12">
                           <div class="row">
                              <div class="col-sm-12"><br/>
                                  <center>
                <button style={{background: "#151B54", color:"#ffff"}} onClick={userLogout} class="btn btn " target="__blank">Log Out</button>&nbsp;&nbsp;&nbsp;
            <button style={{background: "#9F000F", color:"#ffff"}} onClick={updateUserProfile} class="btn btn " target="__blank">Update Details</button></center>
              </div>
                  </div>     
                      </div>  
                          </div>
                           </div>
                      </div>
                   </div>
                   <UpdateUserProfile
          upfName ={fName}
          uplName ={lName}
          upgender ={gender}
          upmobile ={mobile}
          upusername ={username}
          upusertype ={usertype}
          upstatus ={status} 
          uppwd= {password}
          show={show}
          onHide={() => setShow(false)}/>    
                </div>
           </div>
    

          
      </div>
   )
}
 
export default UserProfile;


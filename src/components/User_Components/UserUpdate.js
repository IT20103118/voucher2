import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';


const UpdateUserProfile = ({
    upfName,
    uplName,
    upgender,
    upmobile,
    upusername,
    upusertype,
    upstatus,
    // uppwd,
    show, 
    onHide
}) => {
    const [fName, setFName] = useState(upfName);
    const [lName, setLName] = useState(uplName);
    const [gender, setGender] = useState(upgender);
    const [mobile, setMobile] = useState(upmobile);
    const [username, setUsername] = useState(upusername);
    const [usertype, setUsertype] = useState(upusertype);
    const [status, setStatus] = useState(upstatus);
    // const [password, setPassword] = useState(uppwd);
  
    

    const updateUserProfile = async (e) => {
      e.preventDefault()
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      };

      const updateObject = {
      fName: fName,
      lName: lName,
      gender: gender,
      mobile: mobile,
      username: username,
      usertype: usertype,
      status: status,
      }

      await axios.put('http://localhost:8080/api/user/update', updateObject, config)
      .then((res) => {
        // toast.success('Your details updated successfully',{position:toast.POSITION.TOP_CENTER});
        window.setTimeout(function() {
          window.location = "/profile"
      }, 2000);
        
      })
      .catch((err) => {
        console.log(err)
        alert(err.message)
      })
    }

    return (
      <div >
      <Modal  show={show} onHide={onHide} animation={true} size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered>
          <div style={{background: "#E6E6FA"}}>
        <Modal.Header closeButton> 
          <Modal.Title style={{color: "black"}} id="contained-modal-title-vcenter" className="text-color" >Update My Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={updateUserProfile} className="text-color" >  
            <div className="form-group row mb-3"></div>

              <div className="col-sm-6">
                <small className="text-muted">First Name</small>
                <input type="text" className="form-control form-control-user" Value={fName}
                onChange={(e) => setFName(e.target.value)} required/>
              </div>
              <div className="col-sm-6">
                <small className="text-muted">Last Name</small>
                <input type="text" className="form-control form-control-user" Value={lName}
                onChange={(e) => setLName(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Gender</small>
                <input type="text" className="form-control form-control-user" Value={gender}
                onChange={(e) => setGender(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Mobile</small>
                <input type="text" className="form-control form-control-user" Value={mobile}
                onChange={(e) => setMobile(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Username</small>
                <input type="text" className="form-control form-control-user" Value={username}
                onChange={(e) => setUsername(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted"> Change User Type </small>
                <input type="text" className="form-control form-control-user" Value={usertype}
                onChange={(e) => setUsertype(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Change Status</small>
                <input type="text" className="form-control form-control-user" Value={status}
                onChange={(e) => setStatus(e.target.value)} required/>
              </div>


            <br/> <br/>
 
            <center><Button variant="contained" style={{background: "#151B54",color:"white", width: 50+"%"}} className="w-10" 
            startIcon={<SendIcon />} disableElevation type="submit">Update my details</Button></center>
          </form>
        </Modal.Body>
        </div>
      </Modal>
      </div>
    );
};

export default UpdateUserProfile;
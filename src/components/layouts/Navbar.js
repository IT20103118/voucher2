import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";

export default class StaffNavbar extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{height:80}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <img
          src={image}
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt=""/> */}

        <Navbar.Brand href="#" style={{fontSize:30}}>&nbsp;INFACT SOLUTION</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> &nbsp;&nbsp;&nbsp;&nbsp;
       
            <Nav className="me-auto">
           
            <Nav.Link href="/home1">Home</Nav.Link>
            <Nav.Link href="/requestproduct">Request Item</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/adminlogin">Admin</Nav.Link>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
          </Nav>
         
          <form className="d-10" >
          <input id="searchNav" className="form-control me-5" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}/>
          </form>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 
          <Nav>
              <IconButton aria-label="cart" href="/cart">
              <ShoppingCartIcon fontSize="medium"  style={{color: "#FFFFFF"}}/>
              </IconButton>&nbsp; 

              <IconButton aria-label="profile" href="/profile" style={{color: "#FFFFFF"}} >
              <PersonIcon fontSize="large" />
              </IconButton>  &nbsp;&nbsp;&nbsp;&nbsp;  
           
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
        
    //   <div>
    //     <nav
    //       class="navbar navbar-expand-lg "
    //       style={{
    //         backgroundColor: "#DAE7F8",
    //         // position: "relative",
    //         // display: "flex",
    //         // alignItems: "center",
    //         // paddingTop: "0.5rem",
    //         // paddingBottom: "0.5rem",
    //         // flexDirection: "row",
    //       }}
    //     >
    //       <div class="container">
    //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //             <li class="nav-item">
    //               <a
    //                 class="nav-link"
    //                 aria-current="page"
    //                 href="#"
    //                 style={{
    //                   color: "black",
    //                   fontFamily: "times new roman",
    //                   fontSize: 20,
    //                   marginLeft: 50,
    //                   marginRight: 50,
    //                 }}
    //               >
    //                 <b>Dashboard</b>
    //               </a>
    //             </li>

    //             <li class="nav-item">
    //               <a
    //                 class="nav-link"
    //                 aria-current="page"
    //                 href="#"
    //                 style={{
    //                   color: "black",
    //                   fontFamily: "times new roman",
    //                   fontSize: 20,
    //                   marginLeft: 20,
    //                   marginRight: 50,
    //                 }}
    //               >
    //                 <b>User List</b>
    //               </a>
    //             </li>

    //             <li class="nav-item">
    //               <a
    //                 class="nav-link"
    //                 aria-current="page"
    //                 href="#"
    //                 style={{
    //                   color: "black",
    //                   fontFamily: "times new roman",
    //                   fontSize: 20,
    //                   marginLeft: 10,
    //                   marginRight: 50,
    //                 }}
    //               >
    //                 <b>Voucher List</b>
    //               </a>
    //             </li>

    //             <li class="nav-item">
    //               <a
    //                 class="nav-link"
    //                 aria-current="page"
    //                 href="#"
    //                 style={{
    //                   color: "black",
    //                   fontFamily: "times new roman",
    //                   fontSize: 20,
    //                   marginLeft: 40,
    //                   marginRight: 50,
    //                 }}
    //               >
    //                 <b>Particular List</b>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>

      //   <div>
      //     <nav
      //       class="navbar navbar-expand-lg"
      //       style={{
      //         background: "#060b26",
      //         height: "100px",
      //         position: "relative",
      //         display: "flex",
      //         alignItems: "center",
      //         paddingTop: "0.5rem",
      //         paddingBottom: "0.5rem",
      //       }}
      //     >
      //       <br /> <br />
      //       <button
      //         class="navbar-brand"
      //         style={{ background: "#FFA500", height: "100px", width: "220px" }}
      //       >
      //         <b>SLIIT ResearchWeb</b>
      //       </button>
      //       <div class="container">
      //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
      //           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      //             <li class="nav-item">
      //               <a
      //                 class="nav-link"
      //                 aria-current="page"
      //                 href="/staffdashboard"
      //                 style={{ color: "#ffff" }}
      //               >
      //                 Dashboard
      //               </a>
      //             </li>{" "}
      //             &nbsp;&nbsp; &nbsp;&nbsp;
      //             <li class="nav-item">
      //               <a
      //                 class="nav-link"
      //                 aria-current="page"
      //                 href="/topic/displayresearchtopic"
      //                 style={{ color: "#ffff" }}
      //               >
      //                 Research Topics
      //               </a>
      //             </li>{" "}
      //             &nbsp;&nbsp; &nbsp;&nbsp;
      //             <li class="nav-item dropdown">
      //               <a
      //                 class="nav-link dropdown-toggle"
      //                 href="#"
      //                 id="navbarDropdown"
      //                 role="button"
      //                 data-bs-toggle="dropdown"
      //                 aria-expanded="false"
      //                 style={{ color: "#ffff" }}
      //               >
      //                 Faculties
      //               </a>
      //               <ul
      //                 class="dropdown-menu"
      //                 aria-labelledby="navbarDropdown"
      //                 style={{ background: "#ffff" }}
      //               >
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     Faculty of Computing
      //                   </a>
      //                 </li>
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     Faculty of Business
      //                   </a>
      //                 </li>
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     Faculty of Engineering
      //                   </a>
      //                 </li>
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     Faculty of Humanities & Sciences
      //                   </a>
      //                 </li>
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     School of Architechture
      //                   </a>
      //                 </li>
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     Faculty of Graduate Studies and Research
      //                   </a>
      //                 </li>
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     SLIIT Academy
      //                   </a>
      //                 </li>
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     SLIIT International
      //                   </a>
      //                 </li>
      //               </ul>
      //             </li>{" "}
      //             &nbsp;&nbsp; &nbsp;&nbsp;
      //             <li class="nav-item dropdown">
      //               <a
      //                 class="nav-link dropdown-toggle"
      //                 href="#"
      //                 id="navbarDropdown"
      //                 role="button"
      //                 data-bs-toggle="dropdown"
      //                 aria-expanded="false"
      //                 style={{ color: "#ffff" }}
      //               >
      //                 Libraries
      //               </a>
      //               <ul
      //                 class="dropdown-menu"
      //                 aria-labelledby="navbarDropdown"
      //                 style={{ background: "#ffff" }}
      //               >
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     SLIIT Online Library
      //                   </a>
      //                 </li>
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     Digital Library
      //                   </a>
      //                 </li>
      //                 <li>
      //                   <a class="dropdown-item" href="#">
      //                     Research & Publication
      //                   </a>
      //                 </li>
      //               </ul>
      //             </li>{" "}
      //             &nbsp;&nbsp; &nbsp;&nbsp;
      //             <li class="nav-item">
      //               <a
      //                 class="nav-link"
      //                 aria-current="page"
      //                 href="/requestsupervisor"
      //                 style={{ color: "#ffff" }}
      //               >
      //                 Supervior Request
      //               </a>
      //             </li>{" "}
      //             &nbsp;&nbsp; &nbsp;&nbsp;
      //             <li class="nav-item">
      //               <a
      //                 class="nav-link"
      //                 aria-current="page"
      //                 href="/requestcosupervisor"
      //                 style={{ color: "#ffff" }}
      //               >
      //                 Co-Supervior Request
      //               </a>
      //             </li>{" "}
      //             &nbsp;&nbsp; &nbsp;&nbsp;
      //           </ul>
      //           <form class="d-flex">
      //             <input
      //               class="form-control me-2"
      //               type="search"
      //               placeholder="Search"
      //               aria-label="Search"
      //             />{" "}
      //           </form>{" "}
      //           &nbsp;&nbsp;
      //           <i
      //             class="fa fa-search fa-lg"
      //             aria-hidden="true"
      //             type="submit"
      //             style={{ color: "#ffff" }}
      //           ></i>{" "}
      //           &nbsp;&nbsp;&nbsp;&nbsp;
      //           <IconButton
      //             aria-label="profile"
      //             href="/staffprofile"
      //             style={{ color: "#FFFFFF" }}
      //           >
      //             <PersonIcon fontSize="large" />
      //           </IconButton>
      //         </div>
      //       </div>
      //     </nav>
      //   </div>
    );
  }
}

// import React, { Component } from "react";
// import PersonIcon from '@material-ui/icons/Person';
// import IconButton from '@material-ui/core/IconButton';

// export default class Navbar extends Component {
//     render(){
//         return(

//     <div>
//        <nav className="navbar navbar-expand-lg " style={{background: "#060b26",  height: "100px"}}>
//        <br/>  <br/>
//        <button classname="navbar-brand" style={{background: "#FFA500",height: "100px",width:"220px"}} ><b>ABC Bank</b></button>

//        <div classname="container">
//        <div classname="collapse navbar-collapse" id="navbarSupportedContent">
//        <ul classname="navbar-nav me-auto mb-2 mb-lg-0">

//        <li classname="nav-item">
//           <a classname="nav-link" aria-current="page" href="/" style={{color: "#ffff"}}>Dashboard</a>
//         </li>  &nbsp;&nbsp; &nbsp;&nbsp;

//         <li classname="nav-item">
//           <a classname="nav-link" aria-current="page" href="/" style={{color: "#ffff"}}>User List</a>
//         </li>   &nbsp;&nbsp; &nbsp;&nbsp;

//         <li classname="nav-item">
//           <a classname="nav-link" aria-current="page" href="/" style={{color: "#ffff"}}>Voucher List</a>
//         </li>   &nbsp;&nbsp; &nbsp;&nbsp;

//         <li classname="nav-item">
//           <a classname="nav-link" aria-current="page" href="/" style={{color: "#ffff"}}>Voucher Particular List</a>
//         </li>  &nbsp;&nbsp; &nbsp;&nbsp;

//       </ul>
//             <form classname="d-flex">
//             <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> </form>  &nbsp;&nbsp;
//             <i classname="fa fa-search fa-lg" aria-hidden="true" type="submit" style={{color: "#ffff"}} ></i> &nbsp;&nbsp;&nbsp;&nbsp;

//             <IconButton aria-label="profile" href="/user/profile" style={{color: "#FFFFFF"}} >
//             <PersonIcon fontSize="large" />
//             </IconButton>

//       </div>
//     </div>
//   </nav>
//  </div>
//         )
//     }
// }

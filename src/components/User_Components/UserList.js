import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

function GetUserList() {
  const [user, setUser] = useState([]);

  const id = window.localStorage.getItem("Authorization");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/user/all`).then((res) => {
    //   console.log(res.data);
      if (res.data.success) {
        setUser(res.data.Users);
        // const users = res.data.Users;
        // setUser(user=>[...user,res.data.users]);
        
      }
    });
  }, []);
  console.log(user);
  // const onDelete = () => {
  //     if (window.confirm("Are you sure to Dlete Account?")) {
  //       axios.delete(`http://localhost:8080/api/user/delete/${id}`).then((res) => {
  //         if (res.User) {
  //           alert("delete success...!");
  //           window.location.href = "/user";
  //         }
  //       });
  //     }
  //   };

  //   const onRedirect = () => {
  //     window.location.href = `/user/update/${id}`;
  //   };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "Username", width: 100 },
    { field: "usertype", headerName: "User Type", width: 130 },
    { field: "status", headerName: "User Status", width: 130 },
  ];


  const rows = []
   
  

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={user}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[4]}
        checkboxSelection
      />
    </div>
  );
}

export default GetUserList;

import { height } from "@mui/system";
import React, { Component } from "react";
import Navbar2 from "./Navbar2";

const Userlist = () => {
  window.location = `/user/all`;
};

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar2 />

        <div class="row d-flex align-items-center justify-content-center">
          <br />
          <br />
          <div align="center">
            <div
              style={{
                width: 900,
                background: "#F5F5F5",
                height: 500,
                backgroundSize: "1500px ",
              }}
            >
              {" "}
              <br />
              <br />
              <div class="card-body">
                <div align="center">
                  <div
                    class="card-body"
                    style={{
                      color: "white",
                      background: "#151B54",
                      height: "60",
                      width: "40rem",
                      lineHeight: "60px",
                      borderRadius: "10px",
                    }}
                    onClick={Userlist}
                  >
                    <h2 class="card-title" id="dashh5" align="center">
                      <b> User List</b>
                    </h2>
                  </div>
                  <br />
                  <div
                    class="card-body"
                    style={{
                      color: "white",
                      background: "#151B54",
                      height: "60",
                      width: "40rem",
                      lineHeight: "60px",
                      borderRadius: "10px",
                    }}
                    onClick={Userlist}
                  >
                    <h2 class="card-title" id="dashh5" align="center">
                      <b> User List</b>
                    </h2>
                  </div>
                  <br />
                  <div
                    class="card-body"
                    style={{
                      color: "white",
                      background: "#151B54",
                      height: "60",
                      width: "40rem",
                      lineHeight: "60px",
                      borderRadius: "10px",
                    }}
                    onClick={Userlist}
                  >
                    <h3 class="card-title" id="dashh5" align="center">
                      <b> User List</b>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

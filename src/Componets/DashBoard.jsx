  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import List from "./List";
  import { useContextBox } from "../ContextProvider";

  const DashBoard = () => {
  const {users,setUsers} = useContextBox()
  const getUser = async()=>{
    try {
      const usersRepo = await axios.get("https://65cc6905dd519126b83e67c2.mockapi.io/userData");
      // console.log(usersRepo.data);  
      setUsers(usersRepo.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getUser();
  },[])
    return (  
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1>Dash Board</h1>
            <div className="row">
              <div className="col-lg-12">
                <div className="main-box clearfix">
                  <div className="table-responsive">
                    <table className="table user-list">
                      <thead>
                        <tr>
                          <th>
                            <span>User</span>
                          </th>
                          {/* <th className="text-center">
                            <span>Status</span>
                          </th> */}
                          <th>
                            <span>Email</span>
                          </th>
                          <th>
                            <span>Address</span>
                          </th>
                          {/* <th>
                            <span>Phone</span>
                          </th> */}
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                      {users.map((user,index)=><List key={index} user={user} getUser={getUser}  />)} 
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default DashBoard;

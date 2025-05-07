import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useContextBox } from "../ContextProvider";
import { useNavigate } from "react-router-dom";

const List = ({ user, setUsers, users ,getUser }) => {
  const params = useParams();
  const navigateTo = useNavigate();
  const { handleViewChange, handleEdit } = useContextBox();

  const onDelete = async () => {
    try {
      await axios.delete(
        `https://65cc6905dd519126b83e67c2.mockapi.io/userData/${user.id}`
      );
      console.log("User deleted successfully!");
      getUser()
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <tr key={user.id}>
        <td>
          <img
            src={`https://bootdey.com/img/Content/avatar/avatar${getRandomInt(
              1,
              8
            )}.png`}
            alt=""
          />

          <h6>{user.username}</h6>

          <span className="user-subhead">{user.name}</span>
        </td>
        <td>
          <p>{user.email}</p>
        </td>
        <td>
          <p>{user.address.city}</p>
        </td>
        <td style={{ width: "20%" }}>
          <Link
            to={`/dashboard/userview/${user.id}`}
            onClick={() => {
              handleViewChange(user);
            }}
            className="table-link"
          >
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
            </span>
          </Link>

          <Link
            to={`/dashboard/edit/${user.id}`}
            onClick={() => {
              handleEdit(user);
            }}
            className="table-link warning"
          >
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span>
          </Link>

          <Link onClick={onDelete} className="table-link danger">
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
            </span>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default List;

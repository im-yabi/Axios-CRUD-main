  // ContextProvider.js
  import axios from "axios";
  import React, { createContext, useState, useContext, useEffect } from "react";

  const Context = createContext();

  export const ContextProvider = ({ children }) => {
    const [users,setUsers] = useState([]);
    const [view, setView] = useState([]);
    const [edit, setEdit] = useState([]);


    function handleViewChange(newView) {
      setView(newView);
    }

    const handleEdit = (user) => {
      console.log('User in handleEdit:', user);
      setEdit((prevEdit) => [...prevEdit, user])
      console(edit); 
    };

    return (
      <Context.Provider value={{ view, edit, handleViewChange, handleEdit,users,setUsers }}>
        {children}
      </Context.Provider>
    );
  };
  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  // let randomNumber = getRandomInt(1, 8);

  export const useContextBox = () => useContext(Context);

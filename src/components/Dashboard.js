import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./todos/TodoForm";
import TodoLists from "./todos/TodoLists";
import Logout from "./Logout";

function Dashboard({userData}) {
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const BASE_URL = "https://todobackend-4eqz.onrender.com";

  const [userTodos, setUserTodos] = useState(null);
  //to get all todos

  const fetchUserTodos = async () => {
    const resp = await axios.get(`${BASE_URL}/api/todo`);
   

    if (resp.data.todos.length > 0) {
      setUserTodos(resp.data.todos);
    }
  };

  useEffect(() => {
    fetchUserTodos();
    return;
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center p-4">
        {" "}
        <Logout BASE_URL={BASE_URL} />
        <p className="text-sm font-semibold rounded-2xl p-2 border border-solid  ">{userData.email}</p>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-full mb-[3rem]">
        <TodoForm fetchUserTodos={fetchUserTodos} BASE_URL={BASE_URL} />
        <TodoLists
          fetchUserTodos={fetchUserTodos}
          setUserTodos={setUserTodos}
          userTodos={userTodos}
          BASE_URL={BASE_URL}
        />
      </div>
    </>
  );
}

export default Dashboard;
